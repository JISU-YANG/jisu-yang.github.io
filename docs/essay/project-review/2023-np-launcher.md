---
# 페이지 셋팅
layout: project_review
title: 북마크 런처 프로그램
parent: 프로젝트 회고록
grand_parent: Essay
nav_order: 12
nav_exclude: true
toc: true

summary: # 프로젝트 개요
    service: # 서비스 정보 @name: 이름 @subject: 주제
        name: NP-Launcher
        subject: 북마크 런처 프로그램
    platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
        environment: 윈도우 응용 프로그램  
        demo: https://github.com/JISU-YANG/NP-Launcher/releases/tag/v1.0.0
        github: https://github.com/JISU-YANG/NP-Launcher/tree/common
    period: # 개발 기간 @date: 범위 @day: 기간
        date: 23.03.07. ~ 23.03.12.
        day: 일주일
    people: # 개발 인원 @number: 인원 수 @script: 비고
        number: 1명
        script: 
intro:
    tech_stack: # 기술 스택 key(index):value(script)
        language: JavaScript, HTML/CSS
        server: Node.js
        framework: <a href="https://namu.wiki/w/Electron(%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC)">ELECTRON</a>
        api_and_library: BrowserWindow, <a href="https://www.electronjs.org/docs/latest/tutorial/ipc">electron-ipc</a>, <a href="https://github.com/sindresorhus/electron-store#readme">electron-store</a>, electron-shutdown-command
        database: n
        ide: IntelliJ
    role: 
        1:
            script: 전체(기획, UX/UI, 풀스택 개발, QA)
            contribution: 100
    thumbnail: 2023-NPLauncher-신메인화면.png, 2023-NPLauncher-신설정화면.png
---

## 필요한게 없으면 참지를 못 한다
### PC방 런처를 쓰고 싶다
<img class="cdn-img" id="2023-NPLauncher-PC방런처.PNG">

매번 보던 PC방 런처가 유난히 눈에 들어왔다.
평소에도 정리정돈에 집착이 강한 편인데 내 데스크탑의 바탕화면과 대조되어 보이기 시작했다.
그러고는 내가 쓰는 프로그램과 게임으로 PC방 런처의 항목들이 바뀌는게 머릿속에 그러졌다.
쓰고싶으면 쓰면 되지. 적합한 프로그램들을 찾기 시작했다.

[포레런처(게토)](https://service.geto.co.kr/Guide/download/foreLauncher), [위코런처](https://www.wico.co.kr/new/download/dn2.html), [Rainmeter](https://www.rainmeter.net/) 등이 후보가 되었지만, 아래의 이유로 만족스러운 프로그램을 찾지 못했고, 만들어볼까 하고 조사에 들어갔다.

1. 광고가 거슬린다.
2. 개인용을 지원하지 않는다.
3. 디자인이 너무 불쾌하다.
4. 컴퓨터의 리소스를 너무 잡아먹는다.

---

### 일렉트론이라고 했던가
언젠가 "자바로 쉽게 윈도우 프로그램을 만들 수 있는 프레임워크가 있다고 한다. 자바를 좋아하니 이것도 써보면 재밌어할 것 같다."는 권유를 받은게 기억이 났다. Electron을 떠올려 찾아보니 자바스크립트 기반의 프레임워크였다.
아쉽게도 자바는 아니지만 아는 언어로 만들 수 있는게 어디인가. 하지만 일이 점점 커지는 것 같은 기분이 든다.
일단 다음으로 넘어갔다.

---

### 무서운 실루엣, Node.js
노드js라면 주변에서 많이 들어는 봤지만 사용해본적은 없었다. 그래서 덜컥 겁이 났지만 막상 셋팅을 하다보니 프레임워크를 돌리기 위해 필요한 부분이 적어서 그런지 할게 많이 없었다. 톰캣과 같이 사용은 쉬우나 커스텀이 어려운 건가 싶다.
그리고 라이브러리를 찾다보면 자주 만나게 되는 `npm` 이란 놈을 나도 이제 써보았다. 프로젝트의 환경을 설정하는게 간편해서 일이 커지니 멈추어야하는 망설임이 사라졌다.

---

## 일렉트론만의 새로운 환경
### 로컬의 프로그램을 실행시키는 권한
일단 BroserWindow로 간단하게 테스트를 마친뒤 핵심 기능인 로컬 환경의 파일과 경로를 접근하는 방법을 알아보았다.
브라우저를 이용한 방법을 먼저 시도해보았는데 Active X가 사라진 이후 보안 상의 이유로 Chrome을 비롯한 브라우저에서 파일을 실행할 수 없도록 바뀌었다고 한다.
그런데 나는 브라우저를 통해 프로그램을 실행시키는걸 본적이 있다. `ex://` 이런 형태의 이상한 주소로 말이다.
찾아보니 URL 프로토콜이라고 부르고 레지스트리에 등록해서 스키마를 호출하는 방식이었다. 시도 해보았는데 구현은 되었으나 너무 번거로웠다.
다른 방법이 없나 Stack Overflow를 해매다가 node.js의 `execfile` 기능이 언급되는 것을 찾았고 절대 경로만 넣어주면 잘 실행이 되었다. 
폴더같은 경우는 `shell.openPath`를 사용하니 잘 작동하였다.

---

### DB가 필요하다
매번 컴퓨터가 켜질때마다 셋팅 설정을 하는 것은 말도 안되고 그러면 쓸 이유가 없다. 고로 로컬에 데이터를 저장 해야하는데 라이브러리를 찾아보니 [electron-store](https://github.com/sindresorhus/electron-store)을 찾을 수 있었다.
swift로 개발할 때 UserDefaults를 사용한 것과 비슷한 방식이라 금방 적용했다.

---

### 지옥의 IPC(프로세스 간 통신)
`execfile`이나 `shell`같이 경로를 서버에서 처리를 해야하는 경우가 있는데 같은 패키지에 있지만 데이터를 인식을 못 하는 것에 많이 혼란스러웠다.
원인은 어떤 구조로 프레임워크가 돌아가는지 내가 제대로 알지 못해서 였다. 메인 프로세스와 렌더러 프로세스가 분리되어 있었고 [IPC 통신](https://www.electronjs.org/docs/latest/tutorial/ipc)을 사용해서 프로세스간 데이터를 주고 받아야했다.
마치 서버와 클라이언트같은 느낌이었다. js에 대한 고정관념이 해매는 시간을 증가시켰다.

---

## 베타 버전 제작
### 프로토타입 완성
<img class="cdn-img" id="2023-NPLauncher-구메인화면.png">

<img class="cdn-img" id="2023-NPLauncher-구설정화면.png">

그렇게 많은 타협 끝에 프로그램이 완성되었다.

- 바로 구글 검색을 할 수 있다.
- 미리 설정해놓은 프로그램, 게임, 웹 서비스, 폴더에 접근할 수 있다.
- 실행파일의 경로는 환경설정에서 변경할 수 있다.
- 윈도우의 환경 설정(종료, 밝기, 소리, 마우스 등)을 변경할 수 있다.

---

### 채찍은 칭찬이 아니지만
> Q. 잘 만들었네. 다른 사람도 쓸 수 있어?  
> A. 아니 😅

> Q. 아이템 바꿀 수 있어?  
> A. 아니 🥲

> Q. 못 하는거야?  
> A. 아니 🫠

속으로 칭찬과 인정받는 상상을 하며 아주 뿌듯한 마음으로 개발자인 여자친구에게 시연을 했다. 하지만 정곡을 찌르는 질문에 나는 아니라는 말 밖에 할 수 없었다. 
그리고 마지막 질문인 "쫄?"은 차마 용납할 수 없었다. 

---

### 계획을 변경하자
목적과 방향이 달라진 다는 것은 보이는 차이보다 훨씬 많은 작업이 필요로 한다. 체스 말을 원하는 곳으로 한번에 옮길 수 없는 것과 같다.

- 명명과 분리, 로직 수정 등의 코드 리팩토링
- 아이템의 타입(링크, 경로, 폴더)과 속성(이름, 이미지, 경로)을 설정할 수 있게 기능변경
- 아이템의 개수가 자유롭게 프론트 변경
- 일관적인 디자인 포인트를 공유하는 UI/UX 반영

작업을 거쳐 공개용 베타 버전이 탄생할 수 있었다.

---

## 마치며
새로운 환경에서 개발해보자는 올해 목표 중 하나를 얼떨결에 이루게 되었다. 그보다 이번 프로젝트를 하고 나서 느낀 것인데 어려워보이고 막막해보이는 것도 상대적인 것 같다. 모든 문제는 어떻게든 해결이 되고, 지나고 나서 보면 생각보다 훨씬 쉬워보이는. 당연한 사실 속에 있다는 것이다. 그로서 자신감 또한 많이 생긴 것 같다. 