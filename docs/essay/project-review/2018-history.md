---
# 페이지 셋팅
layout: project_review
title: 약속 관리 노트
parent: 프로젝트 회고록
grand_parent: Essay
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
    service: # 서비스 정보 @name: 이름 @subject: 주제
        name: History
        subject: 약속 관리 노트
    platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
        environment: 모바일 웹 서비스  
        demo: n
        github: https://github.com/JISU-YANG/2018_History
    period: # 개발 기간 @date: 범위 @day: 기간
        date: 18.09.20. ~ 19.04.23.
        day: 9개월
    people: # 개발 인원 @number: 인원 수 @script: 비고
        number: 2명
        script: 팀장
intro:
    tech_stack: # 기술 스택 key(index):value(script)
        language: PHP, JavaScript, HTML/CSS
        server: n
        framework: <a href="https://rhymix.org/">Rhymix</a>
        api_and_library: jQuery
        database: n
        ide: Atom Editor
    role: 
        1:
            script: 프로젝트 업무, 일정 관리와 프로젝트 기획
            contribution: 80
        2:
            script: 화면 흐름 설계 및 디자인, 화면 구성 
            contribution: 90
        3:
            script: 프레임워크 구성 및 전체 기능(약속 단위 일정 정보 기록, 검색, 지출 리포트 등) 구현
            contribution: 100
        4:
            script: 프로젝트 투자 유치
            contribution: 40
    thumbnail: 2018-History-Image.gif, 2018-History-Image2.png
---

## 어려움과 극복
### 개발할 서비스를 기획하기
가계부와 캘린더를 결합한 새로운 서비스를 기획했다.
참고 모델이 없기 때문에, 기존 서비스의 문제점을 개선하는 방향으로 고민했다.
기획에서 개발로 이어지는 과정이 낯설어서 어려움도 많았다.
사용되는 서비스가 되기 위해 최대한 간단하고, 쉽고, 유용해야한다는 규칙을 정했다.
자연스러운 화면 흐름과 가공한 데이터를 보상으로 제공하는 것에 집중했다.

### 기획에서 개발로 넘어가기
서비스라는 것이 어떤 과정을 거쳐 기획에서 개발로 반영되는지 알지 못 했다.
그래서 기획안에 어떤 것 작성해야하는지 어떤 부분이 중요하고 어떤 방식으로 정리되어 있어야하는지 몰랐다.
그래서 추상적으로 이런 기능이 있었으면 좋겠다. 전달받으면 하나 반영하고 마음에 들지 않는다. 하면 다시 고치는 식이었다.
그런 사항들을 구두상으로 전달 받는 경우가 많아 정확하게 파악하지 못하는 경우가 빈번했다.
더디기도 하고 업무량도 많았고 제일 큰 고충은 완성된 그림을 떠올리며 기능들을 고려할 수 없기 때문에 새로 엎는 일이었다.

### CMS를 활용하여 구축하기
Rhymix라는 CMS(컨텐츠 관리 시스템)를 활용해 프로젝트를 진행했다.
이 CMS는 기본적으로 회원 관리, 게시판 등의 기능을 제공하고 사용자 정의 변수를 추가할 수 있어서, 
DB와 서버 구축 능력이 부족한 우리 팀에게 큰 도움이 되었다.
대신 기존의 용도로 사용하는 것이 아니다 보니 몇 가지 처리가 필요했다. 
전문적인 지식이 없는 상태라 시스템 자체를 변경할 수는 없었고 급한대로 대처하는 형태로 접근했다.
가령, 글 작성시에 필수 값이지만 사용하지 않는 본문과 공개옵션을 숨기고 코드로 처리했다.

<details class="highlight p-5 mt-5" style="border-radius: 6px">
<summary class="text-purple-000 fw-500">필수 값인 본문 내용을 임의로 기본값 설정하기</summary>
<div markdown="1">

```html
<input type="hidden" name="content"  value=".">
```

</div>
<details>

<details class="highlight p-5 mt-5" style="border-radius: 6px">
<summary class="text-purple-000 fw-500">공개, 비공개 선택 상자 자동으로 체크하기</summary>
<div markdown="1">

```javascript
document.onclick = function(e) {
  if (!e) e = window.event;
  var el = e.target || e.srcElement;
  if (el.type === "checkbox") {
    if (el.checked){
      el.nextSibling.className += " checked";
    }else{
      el.nextSibling.className = el.nextSibling.className.replace(/\bchecked\b/, "");
    }
  }
}
```

</div>
<details>

## 배운 점
### 기본적인 개발에 대해 이해하기
이 CMS는 PHP 7.0 이상을 지원한다. 하지만 프레임워크의 문법을 주로 사용 했기 때문에 구글링으로 찾기 힘든 정보도 많아 힘들었다. 대신 [잘 활성화 되어있는 커뮤니티](https://xetown.com/)가 있어 도움을 많이 받았다.

<details class="highlight p-5 mt-5" style="border-radius: 6px">
<summary class="text-purple-000 fw-500">사용자 변수 가져오기</summary>
<div markdown="1">

```php
{$oDocument->getExtraEidValue("변수 이름")}
```

</div>
<details>

<details class="highlight p-5 mt-5" style="border-radius: 6px">
<summary class="text-purple-000 fw-500">조건문 사용하기</summary>
<div markdown="1">

```php
<!--@if($oDocument->getExtraEidValue("변수 이름")=='값 1')-->
<!--@else if($oDocument->getExtraEidValue("변수 이름")=='값 2')-->
<!--@else-->
<!--@end-->
```

</div>
<details>

<details class="highlight p-5 mt-5" style="border-radius: 6px">
<summary class="text-purple-000 fw-500">상대적인 날짜 구하기</summary>
<div markdown="1">
```php
// 전후 날짜 변수 초기화
{@ $yesterday = strtotime("-1 day")}
{@ $tomorrow = strtotime("+1 day")}
```
</div>
<details>

<details class="highlight p-5 mt-5" style="border-radius: 6px">
<summary class="text-purple-000 fw-500">문자열 자르기</summary>
<div markdown="1">
```php
// 날짜 표기
{substr($oDocument->getExtraEidValue('날짜 변수'),2,2)}
.
{substr($oDocument->getExtraEidValue('날짜 변수'),5,2)}
.
{substr($oDocument->getExtraEidValue('날짜 변수'),8,2)}
```
</div>
<details>

<details class="highlight p-5 mt-5" style="border-radius: 6px">
<summary class="text-purple-000 fw-500">모듈 호출하기</summary>
<div markdown="1">

```html
<!-- 작성 -->
<a class="fas fa-pencil-alt" href="{getUrl('act','dispBoardWrite','document_srl',$oDocument->document_srl,'comment_srl','','yves','')}"></a>
<!-- 북마크 -->
<a href="#" class="fas fa-star" onclick="doCallModuleAction('member','procMemberScrapDocument','{$oDocument->document_srl}');return false;"></a>
<!-- 삭제 -->
<a class="fas fa-trash-alt" href="{getUrl('act','dispBoardDelete','document_srl',$oDocument->document_srl,'comment_srl','','yves','')}"></a>
```

</div>
<details>

### 반복되는 공통 코드를 분리하기
Header나 Footer, GNB 같은 경우 간단한 수정이 있어도 코드를 포함하는 모든 파일의 직접 코드를 수정을 해야만 했다.
수정이 잦다보니 여간 과정이 번거로운게 아니였다. 놓치는 파일도 있었다. 
프로젝트 중반부에 도저히 개발이라는 것이 효율적이기 위해 생긴 것인데 이렇게 작업할리가 없다는 생각이 들었다.
~~절대로~~ 이 부분에 대한 해결 방법이 있을 거라고 믿고 검색과 삽질의 반복을 통해 include 태그를 사용할 수 있다는 것을 알게 되었다.

```html
<include target="/header.html" />
```

---
당신의 프로젝트에서 두 가지 주요 문제였던 약속 수정 기능의 개선과 사용자 경험 향상을 성공적으로 이루었습니다.

날짜 형식의 불일치 문제를 해결하여 약속 수정 기능을 개선했습니다. 이를 통해 등록된 약속의 날짜를 정확하게 불러올 수 있게 되었습니다.

jQuery를 사용해 웹페이지에 애니메이션 효과를 추가함으로써, 사용자 경험이 향상되었습니다. 이로 인해 웹페이지는 더 부드럽고 동적인 느낌을 제공하게 되었습니다.

이 두 가지 성과는 프로젝트의 품질 향상에 중요한 역할을 하였으며, 앞으로의 개발에서도 활용할 수 있는

당신의 프로젝트에서 두 가지 주요 문제였던 약속 수정 기능의 개선과 사용자 경험 향상을 성공적으로 이루었습니다.

## 성과 및 결과
### 사용자 의견 반영하기
개발 도중 너무 시간이 지체되는 부분들은 우선순위를 뒤로 미루거나 보류하고 넘어갔다. 개발이 완성된 이후, 지인분들에게도 부탁을 드려 따로 QA 기간을 가졌다.
가장 많이 나왔던 의견 두 가지가 기억에 남는다.

1. 이미 등록했던 약속을 수정을 할 때 기존의 날짜를 불러오지 않던 부분은 날짜 타입이 일치하지 않아 초기 개발 단계에서 해결하지 못했는데 원인을 찾아내 편의성을 개선할 수 있었다.
    ```php
    <div class="writeInputBasic">
      <input id="date" type="text" name="extra_vars1" id="when" cond="!$oDocument->getExtraEidValueHTML('when')">
      <input id="date" type="text" name="extra_vars1" id="when" value="{zdate(str_replace('-','',$oDocument->getExtraEidValue("when")), 'Y-m-d')}" cond="$oDocument->getExtraEidValueHTML('when')">
    </div>
    ```
2. 정적인 웹페이지로 느껴지는 점은 jQuery를 사용해 웹 페이지에 애니메이션 효과를 추가함으로서, 더 부드럽고 동적인 느낌을 제공해 사용자 경험을 향상할 수 있었다.
    ```javascript
    // 자연스러운 애니메이션 전환을 위한 delay(), switchClass()
    $(function() {
        $("#When-SB").on("click", function() {
            $("svg.When-LB").delay(100).switchClass("When-LB", "When-LB-Off", 200, "easeInOutCubic");
        });
    });
    ```

### 효율성 향상
작업한 파일을 매번 FTP 클라이언트를 통해 서버에 올려 테스트하는 번거로운 프로세스를 진행하고 있었다.
하지만 에디터에서 FTP 접속을 하고 바로 파일에 접근해 코드를 수정하는 방법을 발견하여 작업 시간을 단축할 수 있게 되었다.

### 투자 실패
서비스의 프로토 타입이 개발이 된 후로 투자를 목표로 관계자분과 미팅을 거쳐 요구사항을 전달받아 추가로 반영하였다.
하지만 최종 미팅에서 결정권이 있는 담당자 분과 이해 관계가 맞지 않아 결국 승인을 받지 못해 아쉽게도 프로젝트는 중단되었다.

## 마치며
개발자인 분이 팀원으로 활동하기로 해서 시작할 수 있었던 프로젝트였는데, 
사정으로 인해 무산되고서 많은 고민과 회의 끝에 결국 내가 그 역할을 맡기로 했었다.
막상 겪어보니 언어와 로직의 개발적 사고가 생각보다 더 진입장벽이 높았다.
최선을 다 했음에도, 원하는 기획을 완전하게 구현할 수 없는 한계도 아쉬웠다.
코드 한 줄을 해결하지 못해 라디오와 함께 밤을 새우면서도 해결이 된 순간 느꼈던 그 도파민이 잊혀지지가 않는다.
이 기억이 본격적인 개발자의 길로 향하게 한 불쏘시개🔥가 되었다.