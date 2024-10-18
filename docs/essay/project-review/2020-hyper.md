---
# 페이지 셋팅
layout: project_review
title: 스마트 북마크 서비스
parent: 프로젝트 회고록
grand_parent: Experience
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

## 어려움과 극복
### 즐겨찾기 아이콘
<img class="cdn-img" id="2020-hyper-image01.png"/>

즐겨찾기 아이콘 연결에 꽤나 많은 시간을 썼다. 
사이트마다 favicon이 다른 것을 확인하였고, 처음에는 자동으로 크롤링하는 방법을 생각했다.
그러나 일관되지 않은 favicon이 오히려 가시성을 떨어트려 유저가 직접 아이콘을 선택하도록 기능을 추가하기로 했다.
Font Awesome API의 아이콘을 사용해 class name 으로 컨트롤했고 유저가 선택하는 과정의 모달은 직접 구현했다.

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

단축키를 설정하는 것이 쉽지 않았다.
키 중복이나 잘못된 키 인식 문제가 발생했다. 그래서 여러 방법을 고려하였다.
flag 변수를 사용해 시스템을 제어하고, 빠른 검색 모드에서는 단축키 사용을 최대로 줄였다.
또한, 입력받는 키 값의 범위를 ASCII 코드상의 알파벳으로 제한하기로 결정했다.

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

---

### 코드 최적화
즐겨찾기 값은 데이터 관리 편의를 위해 배열단위로 값들을 서버에서 응답 받았다.
단축키 UI를 적용되고 나서 불필요하게 코드가 많이 늘어나게 되었다.
반복적인 패턴을 찾았지만 2뎁스 배열의 길이가 일정하지 않아 문제였다.
다행히도 길이가 10, 9, 7로 (n-i)같이 떨어지는 규칙성을 발견했고 반복 횟수로 적용할 수 있었다.
한 루프 안에서 처리하고 나니 개별 코드들이 정리되었고 객체의 개수를 많이 줄일 수 있었다.

---

## 배운 점
### 네이밍 컨벤션
프로젝트 중 네이밍 컨벤션의 필요성을 다시금 깨달았다.
특별히 팀 내에서 설정하지 않았더라도 개발자 사이에서 대체로 사용되는 네이밍 컨벤션이 존재하는 것을 간과하였다.
팀원에게도 안내를 하지 못 했고, 그로인해 불필요한 에러에 시달려야했다.
다음에는 프로젝트를 시작할때 미리 꼭 논의를 하고 넘어가야겠다.

---

### 컨트롤러의 역할
이론을 공부 했을때 컨트롤러 본연의 역할은 최종 전달자였다. 가공된 값을 전달하는 임무를 수행한다.
하지만 나는 편하다는 이유로 간단한 로직들을 컨트롤러에서 그냥 처리하고 있었다.
프로젝트 후반부에 피드백을 통해 알게되었다. 서비스 레이어를 잘 활용하지 못 했다.

## 결과 및 성과

### 웹 로그
<img class="cdn-img" id="2020-hyper-image03.png"/>

TOMCAT 서버를 호스팅했는데 서버의 콘솔과 로그에 접근하기 위해서는 FTP를 이용해야 했다. 
웹 로그 컨트롤러를 따로 두고 일부 Joinpoint에서 메소드 호출하여 모바일로도 접근이 가능한 웹 로그 시스템을 개발했다.
전체검색, 날짜별검색, 상세검색(날짜, 태그별)으로 쉽게 확인하도록 구현했다.

---

### 스케일 조절
생각보다 좋은 아이디어가 많았지만, 중요하거나 시간적 여유가 있는 것들만 먼저 구현했다.
취지에 가까운 소셜 기능인 하이퍼 공유, 즐겨찾는 하이퍼, 추천 url 기능은 반영되었다. 
비즈니스 목적에 가까운 기능인 Hyper 플러스, iframe을 이용한 위젯형태의 모바일 사이트 연동, 플러그인 형태의 사용자 위젯 마켓은 보류되었다. 
2.0 프로젝트를 기획하게 된다면 꼭 해보고 싶다.

---

## 마치며
아무래도 PC보다는 스마트폰을 더 사용하다보니 일반인 지인들에게는 피드백을 받지 못 했지만, 개발자 지인들의 반응은 뜨거웠다. 
프로젝트 담당 기능도 잘 나누어졌고, 예측 범위 안에서 흘러가서 프로젝트 기간도 길어지지 않았다.
만족스러운 프로젝트였다.
