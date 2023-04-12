---
# 페이지 셋팅
layout: project
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
        script: 팀장, 개발인원 1명
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


## Keep
### jQuery를 잘 활용한 것 같다.
JavaScript를 자유롭게 구사할 수 있었다면 덜 고생하고 더 깔끔하게 코드가 구현될 수 있었던 것은 사실이지만, 그 당시 나는 JavaScript를 잘 알지 못 했고, 같은 기능을 구현할 수 있는 방법 중에 더 직관적인 jQuery를 선택했다.

- Element의 값 입력
```javascript
// 버튼으로 달력의 날짜를 컨트롤 하기 위해 값을 입력하는 부분
$("#dateButtonTomorrow").click(function() {
    var text = "{date('Y-m-d',$tomorrow)}";
    $("#date").val(text);
});
```
- 더 다양한 함수 사용
```javascript
// 자연스러운 애니메이션 전환을 위한 delay(), switchClass()
$(function() {
	$("#When-SB").on("click", function() {
    	$("svg.When-LB").delay(100).switchClass("When-LB", "When-LB-Off", 200, "easeInOutCubic");
	});
});
```

---

### Rhymix 시스템에 대한 이해가 늘었다.
이 CMS는 PHP 7.0 이상을 지원한다. 나는 쉽게 레퍼런스를 얻을 수 있는 특화된 문법을 사용했는데, 기능에 대해 명확하게 알지 못한 채 외부자료에 의존한 채로 값을 조절해가며 이해하느라 시간이 많이 소요되었다.
- 사용자 변수 가져오기
```html
{$oDocument->getExtraEidValue("M1_1")}
```
- 조건문 사용하기
```php
<!--@if($oDocument->getExtraEidValue("M2")=='만남')-->
<!--@else if($oDocument->getExtraEidValue("M2")=='음식')-->
<!--@else-->
<!--@end-->
```
- shrtotime() 함수 사용하기
```php
// 전후 날짜 변수 초기화
{@ $yesterday = strtotime("-1 day")}
{@ $tomorrow = strtotime("+1 day")}
```
- substr() 함수 사용하기
```php
// 날짜 표기
{substr($oDocument->getExtraEidValue('D1'),2,2)}
.
{substr($oDocument->getExtraEidValue('D1'),5,2)}
.
{substr($oDocument->getExtraEidValue('D1'),8,2)}
```
- 모듈 호출하기
```html
<!-- 작성 -->
<a class="fas fa-pencil-alt" href="{getUrl('act','dispBoardWrite','document_srl',$oDocument->document_srl,'comment_srl','','yves','')}"></a>
<!-- 북마크 -->
<a href="#" class="fas fa-star" onclick="doCallModuleAction('member','procMemberScrapDocument','{$oDocument->document_srl}');return false;"></a>
<!-- 삭제 -->
<a class="fas fa-trash-alt" href="{getUrl('act','dispBoardDelete','document_srl',$oDocument->document_srl,'comment_srl','','yves','')}"></a>
```

---

## Problem & Try
### 1. 게시판의 구조 변형
아무래도 전문적인 지식이 부족한 상태라 원래 시스템을 건드리는 것은 위험하다고 생각이 들어서 비효율적이지만 대처를 하는 형태로 접근을 했다. 주로 표시하는 부분을 없앤 후 보이지 않게 그에 대해 기본값을 설정해주었다.
- 본문 값이 필수인 부분을 임의 값으로 대체하여 저장하기
```html
<input type="hidden" name="content"  value=".">
```
- 공개, 비공개 선택 상자 자동으로 체크하기
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

---

### 2. 구조적 문제
MVC에 대한 개념, Framework 에 대한 정보가 없었어서 화면에 대한 수정에 상당히 애를 먹었다. 예를 들어, Header나 Footer에 대한 간단한 수정이 있어도 모든 파일의 코드를 수정을 해야만 했다.

중반부에 이 부분에 대한 해결 방법이 ~~절대~~ 있을거라고 믿고 검색과 삽질의 반복을 통해 include 태그를 사용할 수 있게 되었다. 그래서 한가지 주요한 책임 단위로 나누어, 최종적인 코드에는 include의 조합이 작성되었고, 재사용성을 높일 수 있었다.

```html
<include target="/a.html" />
```

---

### 3. QA 요구사항
지인들에게 QA를 부탁한 후 가장 많이 이야기를 들었던 것이 이미 작성했던 약속에 대해 수정을 할때 날짜가 자동으로 입력이 되어있지 않은 부분을 꼽았다. 인지하고 있었지만 text가 아닌 date는 조금 까다로웠다. 정보를 찾기가 쉽지 않아 우선순위에서 미루었지만 QA 이후 해결하기로 마음먹고 다른 형태의 레퍼런스를 참고하여 개선할 수 있었다.
- 약속 수정 시 기존 값 불러오기

```php
<div class="writeInputBasic">
	<input id="date" type="text" name="extra_vars1" id="when" cond="!$oDocument->getExtraEidValueHTML('when')">
	<input id="date" type="text" name="extra_vars1" id="when" value="{zdate(str_replace('-','',$oDocument->getExtraEidValue("when")), 'Y-m-d')}" cond="$oDocument->getExtraEidValueHTML('when')">
</div>
```

---

## 마치며
사실, 할 수 있는 최선을 다했지만 능력적인 한계에 부딪힌 부분이 많은 프로젝트였다.
온전히 Architecture를 설계할 수 있는 자유로움이 없기 때문에 CMS에 의존적일 수 밖에 없었고, 
추가적으로 프로그래밍 언어에 대한 지식이 얕아서 시간 대비 고생을 많이 했다.

이번 프로젝트를 진행하면서 코드 한줄을 해결하지 못해 라디오와 함께 밤을 새면서도 해결한 순간 느낀 그 도파민을 잊을 수가 없다.
그 기억이 나를 개발자의 길로 향하게 한 불쏘시개🔥가 되었다.