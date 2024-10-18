---
# 페이지 셋팅
layout: project_review
title: 
parent: 프로젝트 회고록
grand_parent: Experience
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
  service: # 서비스 정보 @name: 이름 @subject: 주제
    name: Blank
    subject: 자료 수집 챗봇
  platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
    environment: 웹 서비스
    demo: http://blank.egoist.im/
    github: https://github.com/JISU-YANG/2020_Blank
  period: # 개발 기간 @date: 범위 @day: 기간
    date: 20.07.27. ~ 20.07.29.
    day: 3일
  people: # 개발 인원 @number: 인원 수 @script: 비고
    number: 1명
    script: 
intro:
  tech_stack: # 기술 스택 key(index):value(script)
    language: JSP, Java, Javascript, HTML/CSS
    server: Tomcat
    framework: Spring Framework
    api_and_library: 네이버 뉴스 API, 심심이 API, Maven, JSON-SIMPLE, OkHttp, Jsoup
    database: n
    ide: Eclipse
  role:
    1:
      script: 서비스 기획, 기능 구현, UX/UI, 배포
      contribution: 100
  thumbnail: 2020-blank-thumb01.png, 2020-blank-thumb02.png
---
## 어려움과 극복
### 데이터 파싱과 정제
나무위키를 크롤링하고 싶었지만 구조화가 잘 되어있지 않아 위키백과로 타겟을 변경했다.
요약 정보 데이터를 추출할 때, 참조 텍스트와 불필요한 정보의 제거가 필요했는데 Jsoup 라이브러리를 활용해 HTML을 파싱했다.
위키 특유의 참조를 안내하는 text\[1]의 \[1]을 제거하기 쉽지 않았지만 아래의 과정을 추가해 해결해준 것이 기억에 남는다.

```java
int cnt = 1;
while(result.indexOf("[") != -1){
    result += result.replaceAll("\\[" + cnt++ + "\\]", "");
}
```

---

### 자연어 처리
챗봇이니 당연히 단어가 아니라 문장으로 질문을 던진다. 그래서 자연어 처리를 피하고 싶었지만 어쩔 수 없이 어떻게 대화를 자주 건네는지 패턴을 분석했다.
그 결과 공통점이 '은', '는', '이', '가' 등의 조사 앞에 목적어 명사가 위치하는 것을 알아냈고 추출하는 알고리즘을 개발했습니다. 
추출한 키워드를 분석해 본인을 소개하거나 정보를 반환할지 판단하게 된다.
처음에는 자연어 처리의 복잡성에 직면했으나, 흔히 사용되는 질문 패턴을 분석하여 유효한 검색어를 추출할 수 있는 시스템을 마련했습니다.

---

### 데이터를 전달하는 방식
그리고 재밌는 점은 소개, 대화는 한 줄의 긴 문자열이고, 정보는 문자열 배열이다. 
평소같았으면 DTO, LIST, MAP과 같은 객체를 사용하여 화면에 응답하게 했을지도 모른다. 
Ajax를 통해 MAP 객체를 사용하긴 했지만 뉴스 10줄, 사전 1줄, 위키 1줄이 생각보다 길지 않아 구분자와 합쳐주어 화면에서 스크립트로 split해서 뿌려주는 재밌는 방법을 사용해보았다.

---

## 배운 점
### 서버에서 API 통신

<img class="cdn-img" id="2020-blank-image02.png">

일상대화를 가능하게할 API를 찾아보던 중 [심심이](https://workshop.simsimi.com/document)를 발견했다.
지금까지는 form 태그나 JavaScript를 이용해서 Ajax 비동기 데이터 통신을 했었다.
서버에서는 API 통신이 처음이라 구글링과 API 문서를 오래 들여다보았다.
HTTP 라이브러리를 찾아보았고 사용하기 수월해보여 OkHttp로 결정했다.

---

### 공식 문서 먼저 찾아보기
네이버에 검색했을때 가장 먼저 나오는 뉴스를 가져오기 위해 크롤링을 시도했지만 되지 않았다.

<img class="cdn-img" id="2020-blank-image04.png">

알고보니 자체적으로 REST API를 제공하고 있었고, 이용 신청을 하고 발급받는 TOKEN을 사용하면 됐다.

<img class="cdn-img" id="2020-blank-image05.png">

---

## 결과 및 성과
### 타협점 찾기
제한된 시간과 자원 내에서 프로젝트를 완성하면서, 현실적인 타협점을 찾는 방법을 배운 것 같다. 
완벽하지 않더라도 목적에 부합하는 결과물을 만들어내는 것은 중요하니까 좋은 경험이 되었다.

---

### 기술적 성장
딥 러닝이나 자연어처리와 같은 전문적인 기술 없이는 챗봇으로서의 매력을 갖추기는 어렵겠다고 느꼈다.
그래도 그런 기술없이 유용할 수 있는 챗봇을 구현해보았다. 아쉬움이 남는 만큼 더 발전된 기술을 배우고 싶어지는 동기 부여가 되었다.

---

## 마무리
영화 '아이언맨 3'에서 겨우 목숨을 부지하고 아무런 지원과 자원이 없는 외지에서 
좌절만 하고 있는 '토니 스타크'에게 꼬마 아이인 '할리 키너'가 이런 말을 건넨다. 
"정비공이라고 그랬죠? 뭐라도 만들지 그래요?"
이 말에 나도 힘을 얻어 이번 프로젝트로 진행해 볼 수 있었다.
개발을 시작하고 나서 자비스(J.A.R.V.I.S)와 같은 AI까지는 아니지만,
업무를 보조하는 서비스를 언젠가는 도전해보고 싶었는데 대안책을 고민해보고 부족함도 느낄 수 있는 좋은 기회가 되었다.