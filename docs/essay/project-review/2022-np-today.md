---
# 페이지 셋팅
layout: project_review
title: NP-Today
parent: 프로젝트 회고록
grand_parent: Essay
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
  service: # 서비스 정보 @name: 이름 @subject: 주제
    name: NP-Today
    subject: 스마트 대시보드
  platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
    environment: 웹 서비스
    demo: https://www.jisuyang.com/today
    github: n
  period: # 개발 기간 @date: 범위 @day: 기간
    date: 22.05.19. ~ 22.05.25.
    day: 일주일
  people: # 개발 인원 @number: 인원 수 @script: 비고
    number: 1명
    script: 
intro:
  tech_stack: # 기술 스택 key(index):value(script)
    language: Javascript, HTML/CSS
    server: n
    framework: n
    api_and_library: jQuery, <a href="https://www.notion.so/">Notion</a>, <a href="https://calendar2notion.opize.me/">Calendar2Notion</a>, <a href="https://www.oopy.io/">oopy</a>, <a href="https://openweathermap.org/">openweathermap</a>
    database: n
    ide: IntelliJ
  role:
    1:
      script: 서비스 기획, UX/UI, 기능구현, 배포
      contribution: 100
  thumbnail: 2022-today-thumb01.png
---

> 📣 이 서비스는 혼자 사용하는 것을 목적으로 제작하였습니다.  
>   
> 🚫 2023년 현재는 Notion에서 공식 API를 제공하고 있어 이런 희안한 방법으로 제작하지 않아도 됩니다.

---

## 기획
### 나를 위한 대시보드
**스마트 북마크, 하이퍼**

나는 반복적으로 하는 일을 매우 싫어한다. 우리가 웹 페이지나 서비스를 접속하는 과정도 그렇다. 구글이나 네이버에서 검색을 하고 찾아서 접속을 해야한다. 그래서 나는 단축키 기능을 강화해 시작 페이지에서 한번의 키 입력으로 이 과정을 생략한 [Hyper 서비스](https://jisulog.com/docs/essay/project-review/2020-hyper.html)를 제작하는 프로젝트를 진행했었다. 하지만 Hyper는 위젯 기능이 다소 아쉬웠다. 필요한 위젯들이 마우스를 올리지 않고도 먼저 보였으면 했다.

---

**일정 관리, 구글 캘린더**

캘린더 뷰만큼 전반적인 일정들을 직관적으로 확인할 수 있는게 없다고 생각한다. 그래서 다양한 서비스와 강력한 연동성을 가진 구글 캘린더를 사용하고 있다. 그런데 주간이나 월간은 그럴 수 있다고 생각하지만, 오늘의 일정을 확인하려고 구글 캘린더 앱이나 웹에 접속하는 것에 상당히 불만을 가지고 있었다. 그래서 이번 서비스에 당일의 일정을 타임라인으로 제공하는 기능을 넣기로 했다.

---

**일기 기록, 노션**

Day One(데이원)이라는 앱을 사용하다가 손쉽게 알찬 일기를 다양한 플랫폼에서 지원한다는 것은 만족스러웠지만 가격이 사악했기 때문에 고민 끝에 노션으로 갈아탔었다. 노션으로 넘어오면서 데이터베이스의 속성을 이용해 수면 시간, 감정, 피곤, 건강까지 같이 기록하고 있었다. 이 데이터를 유의미한 정보로 만들 수 없을까 하는 아쉬움이 있었다. 이번 프로젝트의 동기 중에 하나가 되었다. 그리고 같은 노션 페이지였기 때문에 데이터를 참조해오는 일이 수월했다.

---

### 보조 서비스
**웹에서 공유, 노션**

<img class="cdn-img" id="2022-today-image01.png"/>

노션에는 기록한 페이지를 손쉽게 웹 페이지로 만들어 주는 기능이 있다. 이 '웹 링크 공유'를 이용하면 간단한 목적으로는 DB와 서버의 역할을 대신할 수 있겠다는 생각이 들었다. 유지비의 부담때문에 서비스 개발을 주저했으나 그 걱정을 덜어주었다.

---

**HTML 편집, oopy**

<img class="cdn-img" id="2022-today-image02.png"/>

웹 링크 공유로 웹 페이지로 탄생한 노션 페이지를 도메인과 연결해주고, 간단한 스타일 적용을 지원하고, HTML 편집도 가능하게 해주는 oopy라는 서비스가 있다. 2가지 방식의 HTML을 제공하는데 도메인 공통으로 적용되는 방식과 페이지 상단에 코드 블럭을 추가해 개별로 적용하는 방식이다. 후자가 적합했다.

---

## 개발
### Database Layer
**노션의 데이터베이스**

<img class="cdn-img" id="2022-today-image03.png"/>

Notion의 데이터베이스는 실제 DB와 닮았다. 그래서 매우 친숙했다.
- 컬럼의 속성을 부여할 수 있고 로우를 추가할 수 있다.
- 컬럼의 속성 중 유형(타입)에서 수식을 선택하면 if문을 비롯한 함수들을 사용할 수 있고, 다른 컬럼의 값을 사용하는 것도 가능하다.
- SQL을 직접 사용할 수는 없지만 select절에서 집계 함수를 사용하듯 컬럼별 계산을 볼 수 있다.
- 서브 쿼리를 쓰는 것 처럼 관계형 데이터베이스를 설정해서 다른 데이터베이스를 연결해 값을 가져오는 것도 가능하다.

추가로 링크된 데이터베이스라는 기능도 있는데 원래 데이터베이스의 값을 참조하지만 옵션들과 뷰를 다르게 설정한 데이터베이스를 만들 수도 있다.

---

**데이터베이스 셋팅**

<img class="cdn-img" id="2022-today-image04.png"/>

<img class="cdn-img" id="2022-today-image05.png"/>

목표했던 스케줄, 메모, 디데이, 북마크 데이터베이스를 만들고 값을 셋팅해두었다. 기념일은 수식 유형의 컬럼으로 구현했고 북마크는 url 컬럼을 추가하고 oopy의 기능을 이용해 location.href를 구현했다.

**캘린더 데이터베이스화**

<img class="cdn-img" id="2022-today-image06.png"/>

템플릿을 사용할 수도 있고 [Calendar2Notion 가이드](https://www.opize.me/d4121d70-1392-4275-a5a9-3cb7998fccac)에서 제시된 6가지 컬럼을 생성하고 간단한 연동 과정을 거치면 바로 해당 데이터베이스와 구글 캘린더가 동기화 된걸 볼 수 있다. 나는 추가로 수식 컬럼을 이용해 문자열 자르기를 해서 원하는 형식으로 값을 사용했다. 그리고 메인 페이지에 링크된 데이터베이스로 추가해주었다.

---

**Persistence Layer**

웹 링크로 공유된 페이지에서 새로운 엘리먼트들을 추가할 예정이기 때문에 렌더링을 하기위해 기본적인 노션의 데이터데이스를 사용하기 용이하게  List<Dto\>로 변환하는 작업을 거쳤다.

각각의 셀렉터들을 상수로 선언해두고 공통 메소드를 DTO의 builder()에서 호출하여 사용하는 방식으로 구현했다.

---

**공통 메소드 구현**

```js
function selectorAllToText(selector) {
  var res = $(selector).map(function () {
    return $.trim($(this).text());
  }).get();
  return res;
}
function selectorAllToLink(selector) {
  var res = $(selector).map(function () {
    return $.trim($(this).attr('href'));
  }).get();
  return res;
}
```

---

**DTO 선언**

```js
class DataDto {
  constructor(title, data) {
    this.title = title;
    this.data = data;
  }
  static builder(title, data){
    return new DataDto(
      selectorAllToText(title),
      selectorAllToText(data)
    )
  }
  objectToArray() {
    var res = [];
    for (var i = 0; i < this.title.length; i++) {
      res.push(new DataDto(this.title[i], this.data[i]));
    }
    return res;
  }
}

class BookmarkDto {
  constructor(category, itemCount, itemTitle, itemLink) {
    this.category = category;
    this.itemCount = itemCount;
    this.itemTitle = itemTitle;
    this.itemLink = itemLink;
  }
  static builder(category, itemCount, itemTitle, itemLink){
    return new BookmarkDto(
      selectorAllToText(category),
      selectorAllToText(itemCount),
      selectorAllToText(itemTitle),
      selectorAllToLink(itemLink)
    );
  }
  objectToArray() {
    var res = [],
        cnt = 1,
        j = 0;
    for (var i = 0; i < this.itemTitle.length; i++) {
      res.push(new BookmarkDto(this.category[j], '', this.itemTitle[i], this.itemLink[i]));
      if (cnt == this.itemCount[j]) {
        j++;
        cnt = 0
      }
      cnt++;
    }
    return res;
  }
}
```

---

**셀렉터 상수 DTO 파싱**

```js
const todayDto = DataDto.builder(selectorTodayTitle, selectorTodayDate);
const destinationDto = BookmarkDto.builder(
  selectorDestinationCategory,
  selectorDestinationItemCount,
  selectorDestinationItemTitle,
  selectorDestinationItemLink
);
const anniversaryDto = DataDto.builder(selectorAnniversaryTitle, selectorAnniversaryDate);
const boardDto = DataDto.builder(selectorBoardTitle, selectorBoardContent);
const conditionDto = DataDto.builder(selectorConditionCategory, selectorConditionStat);
```

---

### Business Layer
**노션 디데이 수식**

카운트 다운과 디데이를 동시에 필요로 했기 때문에 날짜 컬럼의 값이 0과 양수인 경우 카운트 다운, 음수인 경우 디데이를 표시할 수 있도록 했다.
```
dateBetween(now(), prop("날짜"), "days") >= 0)
? (format(dateBetween(now(), prop("날짜"), "days") + 1) + "일") 
: ("D" + format(dateBetween(now(), prop("날짜"), "days"))
```

---

**컨디션 로직**

가지고 있는 컨디션들의 데이터는 1~5 범위의 숫자이고, 3가지 상태(좋음, 보통, 나쁨)로 표현하고자 했다. 예상치 못한 조건에 우여곡절이 있었다.

1. 사람마다 좋음의 기준이 중간이 아닐 수도 있다는 점
2. 컨디션(감정, 수면, 피곤, 건강)마다 기준치가 다른 점
3. 수면은 상대 측정 값이 아니라 절대 측정 값인 점
4. 피곤은 낮을 수록 좋음에 가까운 점
5. 3가지 상태와 더불어 백분위 퍼센트로 제공도 해야하는 점


- 보통의 기준치를 설정한다. #1, #2
  standard 변수에 보통 상태의 기준 값을, gap 변수에 좋음, 나쁨과의 차이를 얼마나 둘 것인지 정해주었다.
```js
var tempCondition = [
  {
    standard: '60',
    gap: '10'
  }, {
    standard: '80',
    gap: '10'
  }, {
    standard: '60',
    gap: '10'
  }, {
    standard: '70',
    gap: '10'
  }
]
```

- 백분위로 변환한다. #3, #4, #5
```js
const dtoCondition = [
  {
    title: '감정',
    data: Math.round(dtoConditionTemp[0].data * 10) // 감정수치 max 10
  }, {
    title: '수면',
    data: Math.round(dtoConditionTemp[1].data > 10 ? 100 : dtoConditionTemp[1].data * 10) // 수면수치 최대 max 10
  }, {
    title: '피곤',
    data: Math.round(
      (5 - dtoConditionTemp[2].data) * 20 // 피곤수치 max 5, 낮을수록 좋음
    )
  }, {
    title: '건강',
    data: Math.round(dtoConditionTemp[3].data * 20) // 건강수치 max 5
  }
];
```

---

**날씨 API**

날짜와 더불어 날씨까지 보여지면 좋겠다고 생각해서 OpenWeather사의 API를 사용하였다. 구현은 어렵지 않았는데 크롬 브라우저 기준으로 현재 위치를 가져오는 과정에서 동의 권한을 구하는 팝업이 매번 떠서 원래 의도와는 달라졌다. 접속한 클라이언트의 IP를 조회하는건 일도 아니여서 자세한 위치까지는 아니더라도 날씨를 조회할만큼의 주소는 쉽게 가져올 수 있을 줄 알았다. 결국 자주 머무는 곳의 디폴트 좌표 값을 지정하고 추가로 아이콘을 클릭하면 그때 장소를 가져오는 것으로 변경했다.

```js
function askForCoords() { 
 	navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}
function handleSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  getWeather(latitude, longitude);
}
function handleError() {
  console.log("can't not access to location");
}

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
    .then(function (response) {
    return response.json();
  })
    .then(function (json) {
    const temperature = Math.round(json.main.temp);
    const weatherIcon = json.weather[0].icon;
    const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    weatherInfo.innerHTML = `<img src='${weatherIconAdrs}'/><div>${temperature}℃</div>`;
  })
    .catch((error) => console.log("error:", error));
}
```

---

### Presentation Layer
**눈 앞의 타공판**

<img class="cdn-img" id="2022-today-image07.png"/>

처음 프로토 타입을 제작했을때 컨셉을 어떻게 잡아야하나 많이 고민했다. 미니멀하게 디자인을 하고 싶었지만 효율을 고려해서 만들게된 프로젝트인데 직관성이 더 중요하다고 생각했다. 위젯들을 잘 표현하려면 대시보드 형태가 유리했고, 흔한 디자인을 벗어나기 위해 포인트가 문제였다.

<img class="cdn-img" id="2022-today-image08.png"/>

마침 최근 업무 환경을 타공판을 달았던 것이 눈 앞에 보였고 이를 바로 적용해보았더니 공간감이 마음에 들었고 생각보다 이뻤다.

---

**css가 적용이 안 되는 이슈**

며칠이 지나고 갑자기 css가 일그러졌다. 코드에는 문제가 없었고 일부만 적용이 안된 것 처럼 보였기에, 혹시 css가 덮어 씌어진 것이 아닐까 싶어 개발자 도구로 import된 css를 하나씩 지워보았다. 역시나였다. oopy의 렌더링 과정에서 추가된 것 같아 보이는데, 주기적으로 하나씩 늘어나 새로 찾아봐야하는 귀찮음이 생겼다. 현재까지 충돌이 있었던 css파일은 아래와 같다.

```js
$('link[href="https://cdn.lazyrockets.com/_next/static/css/e768e53b90ce2c2b146c.css"]').remove();
$('link[href="https://cdn.lazyrockets.com/_next/static/css/422ebf16c0b668a0fcb9.css"]').remove();
$('link[href="https://cdn.lazyrockets.com/_next/static/css/639aa92721b8ee58e791.css"]').remove();
$('link[href="https://cdn.lazyrockets.com/_next/static/css/d87ec43f6407a67fd431.css"]').remove();
$('link[href="https://cdn.lazyrockets.com/_next/static/css/b135aff0733c0e7479b4.css"]').remove();
```

---

## 마치며
노션 애호가로서 노션의 이해도가 더 높아졌다는 점, 똑같은 기록 습관으로 가공된 정보를 제공받는 점이 재미있었다. 사실 편법인 것 같은 느낌적인 느낌이지만 완전히 새로운 방식으로 개발하는 것이었는데 새로워서 좋기도 했지만 문제를 해결할때는 힘들었다. 하지만 만족스러운 구색을 갖추게 됐고, 실용적이지만 북마크라던지 메모를 자체적으로 수정할 수가 없어서 아쉬웠다. 그리고 Java와 Javascript가 class나 function을 다루는 태도(?)가 묘하게 달라서 흥미로웠다. 강력하고 인기 만점이지만 불친절한 자바 스크립트를 여유가 되면 제대로 공부해보고 싶다.