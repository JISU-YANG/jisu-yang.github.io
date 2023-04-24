---
# 페이지 셋팅
layout: project
title: 스마트 북마크 서비스
parent: 프로젝트 회고록
grand_parent: Essay
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
  service: # 서비스 정보 @name: 이름 @subject: 주제
    name: Hyper
    subject: 스마트 북마크 서비스
  platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
    environment: 웹 서비스
    demo: https://hyper.egoist.im/
    github: https://github.com/JISU-YANG/2020_Hyper
  period: # 개발 기간 @date: 범위 @day: 기간
    date: 20.02.12. ~ 20.03.31.
    day: 2달
  people: # 개발 인원 @number: 인원 수 @script: 비고
    number: 2명
    script: PM
intro:
  tech_stack: # 기술 스택 key(index):value(script)
    language: JSP, Java, Javascript, HTML/CSS, SQL
    server: Tomcat
    framework: Spring Framework, MyBatis
    api_and_library: Maven, HTML5 File API, commons-fileupload, commons-io, Spring Security
    database: MariaDB
    ide: Eclipse
  role:
    1:
      script: 서비스 기획, UX/UI, 프론트 개발
      contribution: 90
    2:
      script: 데이터 모델링, ERD 작성
      contribution: 50
    3:
      script: 위젯(사용자 정보, 단축키, 시계, 대표 디데이) 기능 구현
      contribution: 100
    4:
      script: 단축키 시스템, 모드(빠른 검색, 즐겨찾기, 편집모드), 웹 로그 기능 구현
      contribution: 100
    5:
      script: 회원(가입, 바로접속, 테마 및 배경화면 관리) 기능 구현
      contribution: 80
    6:
      script: 기능 통합 및 서비스 배포
      contribution: 80
  thumbnail: 2020-hyper-thumb01.png, 2020-hyper-thumb02.png, 2020-hyper-thumb03.png
---

## Keep
### 즐겨찾기 아이콘
<img class="cdn-img" id="2020-hyper-image01.png"/>

처음 기획할 때는 해당 사이트의 favicon을 크롤링해 자동으로 등록되는 기능으로 구현하려고 했다. 하지만 컬러나 형태, 배경 유무 등 일체감이 너무 떨어져서 자체 아이콘 설정 기능으로 새로 개발하기로 했다. Font Awesome 5 API를 CDN으로 이용했고 classs name으로 치환되는 방식으로 컨트롤했다. 편집 모드에서 키를 선택하게 되면 Modal이 뜨는데 위의 스크린샷과 같이 즐겨찾기 링크의 설정과 동시에 할 수 있도록 했다. 원하는 아이콘을 선택하면 hidden type Input에 해당 아이콘의 value가 저장되어 사용자가 임시 선택을 하고 체크 버튼으로 반영하게 해서 코드는 굉장히 짧지만 자연스러운 흐름으로 반영될 수 있어 만족스러웠다.

```jsp
<div class="hotEdit" data-key="<%=arKey[i - 1][j]%>">
	<!-- 링크 -->
	<div class="editLink">
		<input type="text" class="editLinkInput" data-key="<%=arKey[i - 1][j]%>"
			placeholder="<%=arKey[i - 1][j]%>:url ex) www.naver.com/" />
	</div>
    
	<!-- 아이콘 -->
	<div class="editIcon">
		<i onclick="editChange('');"> </i>
		<% for (int k = 0; k < arIconSet.length; k++) { %>
		<i class="<%=arIconSet[k]%>" data-click="false"
			onclick="editChange('<%=arIconSet[k]%>');"></i>
		<% } %>
	</div>
    
	<!-- 적용 -->
	<div class="editBtn">
		<i class="fas fa-check" onclick="editSave('<%=arKey[i - 1][j]%>');"></i>
	</div>
    
</div>
```

---

### 단축키 시스템
<img class="cdn-img" id="2020-hyper-image02.png"/>

단축키가 서비스 전반에 다양한 곳에 적용되어 있다. 그래서 아래와 같이 구분을 했다.
- Global (모드 변경을 위한 키)
- Local (모드의 기능을 사용하기 위한 키)
- 예외 (input 태그에 입력중일 때 등)

중복으로 인식하는 일을 막기 위해 모드에 맞게 키 연결이 대체되거나 일시적으로 작동이 멈추는 상황이 필요했다. 각 범위에 논리타입의 변수와 조건문으로 Handling하는 로직을 추가했다. 서비스에서 사용되지는 않지만 모든 키 입력에 대응하던 부분을 ASCII 코드상의 범위를 알파벳 범위로 제한하고 각 키에 대응하는 입력값 연결로 구현했다.
```javascript
/*
 * 0 : off, 1: on
 */
function activeChange(choice) {
	if(choice){
    	active = false;
    }else{
    	active = true;
    }
}
```

```javascript
function modeChange() {
	if (active) {
		if (mode == "link" && event.keyCode == 39) {
			keydownTrans();
		}else if (mode == "search" && event.keyCode == 37){
			keydownTrans();
		}else if (event.keyCode == 9) {
			keydownTab();
		}else if (event.keyCode>=65 && event.keyCode<=90 && mode=="link"){
			keydownLink();
		}else if(mode == "search" && event.keyCode == 13){
			keydownEnter();
		}
	}
}
```

즐겨찾기 모드는 데이터 관리 편의를 위해 배열단위로 값들을 서버에서 응답 받는데 처음에는 리스트로 제공을 해서 문제가 없었지만, 단축키라는 특징을 직관적으로 사용자에게 전달하는 경험을 추가하기 위해 화면에서 현실의 키보드 배치로 제공하기로 변경되었다. 이 부분의 코드와 과정을 줄이기 위해 줄 간 키 개수의 패턴이 10, 9, 7로 (n-i)같이 떨어지는 것을 이용했고, 처리과정에서 객체의 개수를 줄여 코드를 많이 줄일 수 있었다.

---

### 웹 로그
<img class="cdn-img" id="2020-hyper-image03.png"/>


이 서비스는 TOMCAT 서버 호스팅을 이용했는데 Server의 Console과 Log에 접근하기 위해서는 ftp를 이용해야만 했다. 서버를 중단해야했던 적도 있었다. 그래서 모바일로도 접근이 가능한 웹로그를 개발했다. 웹 로그 컨트롤러를 따로 두고 일부 Joinpoint에서 메소드 호출했고, 전체검색/날짜별검색/상세검색(날짜, 태그별)으로 3가지 쿼리를 이용해 화면의 유연한 요청을 처리하게끔 구현했다.

---

## Problem & Try
### 개발 표준을 정하자
프로젝트를 시작할때 명명법이나 구조적인 부분에 대해 회의와 규칙을 정하지 못 했다. 그래서 잔 에러나 소통 실수가 생겨났다. 그리고 중반부에 알게된 것이 컨트롤러에 기능적인 로직을 최대한 줄이고 서비스 단계에서 마무리를 하는게 더 좋았을 것이라는 생각이 들었다. 그 부분이 찝찝한 아쉬움으로 남는다.

---

### 익숙한 것 벗어나기
사용자 편의성을 고려하는데 분석을 많이 했고 그것을 반영한 설계로 기능들의 로직흐름이 변화했다. 그리고 나에게 익숙했던 Server 단계가 아닌 기술 트렌드에 맞춰 스크립트로 기능들을 최대한 구현하려고 신경썼다. 그 결과, 빠른 처리 속도와 서버의 부하를 줄일 수 있어서 적은 비용으로 더 많은 사용자들을 수용할 수 있게 되었다.

---

### 기간을 위해 보류
중간중간 좋은 아이디어들이 많이 나왔다. 중요도가 높거나 시간이 별로 소모되지 않는 경우 반영되기도 했지만 보통 보류된 것들이 많다. Social기능을 강화한 하이퍼 공유, 즐겨찾는 하이퍼, 추천 url 기능과 비즈니스 목적으로도 사용가능한 Hyper 플러스, iframe을 이용한 위젯형태의 모바일 사이트 연동, 플러그인 형태의 사용자 위젯 마켓 등 욕심이 나는 것들이 참 많았다. 만약 2.0 프로젝트를 기획하게 된다면 꼭 해보고 싶다.

---

## 마치며
결과적으로 담당 기능도 잘 나누어졌고 나름 예측 범위 안에서 흘러가서 프로젝트 기간이 길어지지 않았고, 퀄리티도 괜찮은 수준으로 개발되었다. 아무래도 요새 PC보다는 스마트폰을 사용하다보니 일반인 지인들에게는 피드백을 받지 못 했지만, 개발자 지인들의 반응이 뜨거웠고 과정, 결과 모두 뿌듯할 수 있었다. 