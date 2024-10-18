---
# 페이지 셋팅
layout: project_review
title: 북마크 런처 프로그램
parent: 프로젝트 회고록
grand_parent: Experience
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
    service: # 서비스 정보 @name: 이름 @subject: 주제
        name: NP-Launcher
        subject: 북마크 런처 프로그램
    platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
        environment: 윈도우 응용 프로그램  
        demo: https://github.com/JISU-YANG/NP-Launcher/releases/tag/v1.0
        github: https://github.com/JISU-YANG/NP-Launcher/tree/master
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
            script: 프로젝트 기획, UX/UI 디자인, 풀스택 개발, QA 및 테스트
            contribution: 100
    thumbnail: 2023-NPLauncher-신메인화면.png, 2023-NPLauncher-신설정화면.png
---

## 어려움과 극복
### 런처 프로그램
PC방에 가게 되면 보게 되는 런처가 유난히 눈에 들어왔다.
정리정돈이 안 되어 있는 나의 데스크탑 배경화면과 대조되어 보였다.
그래서 개인용으로 쓸 수 있는 게 없나 찾아보았다.
[포레런처(게토)](https://service.geto.co.kr/Guide/download/foreLauncher), 
[위코런처](https://www.wico.co.kr/new/download/dn2.html), 
[Rainmeter](https://www.rainmeter.net/)를 찾아볼 수 있었는데 광고, 부족한 개인화, 불쾌한 디자인, 높은 리소스의 이유로 다 제외되었다.
그래서 공부도 될 겸 직접 도전해보기로 했다.

### 새로운 개발 환경
익숙한 Java로는 번듯한 응용 프로그램을 제작하기 어렵다는 것을 경험으로 알고 있었다.
그래도 언젠가 JavaScript로 쉽게 윈도우 프로그램을 만들 수 있는 프레임워크가 있다고 들은 적이 있어 알아보니 Electron이라는 오픈소스 프레임워크가 나왔다.
하지만 Node.js를 기반으로 하고 있었다. 시간이 많이 추가될 것 같아 고민했지만 일단 가이드를 따라 셋팅을 해보니 프레임워크를 돌리기까지 필요한 부분은 많지 않았다.
Tomcat과 같이 사용은 쉬우나 커스텀이 어려운 게 아닐까 생각된다. 그리고 라이브러리를 관리해주는 npm을 사용해야 했는데 이것도 크게 어렵지 않았다.
막상 시도해보니 겁과 고민은 사라져갔다.

### IPC(프로세스 간 통신)의 이해
`execfile`이나 `shell`같이 서버의 권한을 이용해서 처리를 해야하는 경우가 있었는데, 
분명 같은 패키지에 있지만 데이터를 인식을 못 하는 것에 많이 혼란스러웠다.
프로젝트 진행동안 가장 어렵고 힘들었던 부분이었다.
원인은 어떤 구조로 프레임워크가 돌아가는지 구조를 제대로 알지 못했기 때문이었다.
결론적으로 Node.js는 메인 프로세스와 렌더러 프로세스가 분리되어 있고 [IPC 통신](https://www.electronjs.org/docs/latest/tutorial/ipc)을 사용해서 프로세스간 데이터를 주고 받아야 했다.
Electron에서 Node.js로 요청과 응답받는 것이 마치 서버와 클라이언트가 완벽하게 분리된 모습과 유사하다는 것이 떠올랐다.
JavaScript가 여전히 클라이언트 언어라는 고정관념 때문에 해매는 시간이 배로 늘었던 것 같다.

## 배운점
### 로컬의 프로그램을 실행시키는 권한
BrowserWindow로 기본적으로 화면하는 구성하는 것을 테스트를 마친뒤, 
핵심 기능으로 사용될 로컬 환경의 파일과 경로를 접근하는 것을 알아보았다.
브라우저를 이용한 방법을 먼저 시도해보았는데 도통 진행되질 않았다.
알고보니 Active X가 사라진 이후 보안상의 이유로 Chrome을 비롯한 브라우저에서 파일을 실행할 수 없도록 바뀌었다고 한다.
그런데 나는 브라우저를 통해 프로그램을 실행시키는걸 본적이 있다. `ex://` 이런 형태의 이상한 주소로 말이다.
더 찾아보니 URL 프로토콜이라고 부르고 레지스트리에 등록해서 스키마를 호출하는 방식이었다.
테스트를 해보았고 구현은 되었으나 과정이 번거로웠다. 
매번 이런 과정을 거칠 수는 없기에 다른 방법을 찾으려고 Stack Overflow를 해매던중 node.js의 `execfile` 기능이 언급되는 것을 찾았다.
바로 테스트를 해보니 절대 경로만 넣어주면 잘 실행이 되었다.
폴더같은 경우는 `shell.openPath`를 이용하여 해결했다.

### 로컬 데이터 관리
매번 컴퓨터가 켜질 때마다 셋팅을 새로 설정할 것이 아니라면 당연히 데이터를 저장해두어야 한다.
이 데이터를 익숙한 DB를 사용하자니 관리가 부담스러웠기에 로컬로 관리할 수 있는 라이브러리가 있지 않은지 확인해보았다.
[electron-store](https://github.com/sindresorhus/electron-store)라는 딱 맞는 라이브러리를 찾았다.
swift로 개발할 때 UserDefaults를 사용한 것과 비슷한 방식이라 금방 적용할 수 있었다.

## 결과 및 성과
### 프로토타입 완성

<img class="cdn-img" id="2023-NPLauncher-구메인화면.png">

<img class="cdn-img" id="2023-NPLauncher-구설정화면.png">

많은 타협 끝에 프로그램이 완성되었다.

- 바로 구글 검색을 할 수 있다.
- 미리 설정해놓은 프로그램, 게임, 웹 서비스, 폴더에 접근할 수 있다.
- 실행파일의 경로는 환경설정에서 변경할 수 있다.
- 윈도우의 환경 설정(종료, 밝기, 소리, 마우스 등)을 변경할 수 있다.

### 베타버전 개발
목적과 방향이 달라진 다는 것은 보이는 차이보다 훨씬 많은 작업이 필요로 한다.
나의 사용만을 고려했기 때문에 이것 저것 쉽게 커스텀할 수 없는 것은 항상 아쉬운 피드백을 받았다.
결국 다른 사람도 사용 가능할 수준의 베타 버전 개발에 착수하게 되었다.

- 명명과 분리, 로직 수정 등의 코드 리팩토링
- 아이템의 타입(링크, 경로, 폴더)과 속성(이름, 이미지, 경로)을 설정할 수 있게 기능변경
- 아이템의 개수가 자유롭게 프론트 변경
- 일관적인 디자인 포인트를 공유하는 UI/UX 반영

위의 작업을 거쳐 공개용 베타 버전이 탄생할 수 있었다.

## 마치며
새로운 환경에서 개발해보자는 올해 목표 중 하나를 얼떨결에 이루게 되었다. 
그보다 이번 프로젝트를 하고 나서 느낀 점은 어려워보이고 막막해보이는 것도 상대적인 것 같다. 
모든 문제는 어떻게든 해결이 되고, 지나고 나서 보면 생각보다 훨씬 쉬워보이는 당연한 사실 속에 있다는 것이다. 
그로서 자신감 또한 많이 생긴 것 같다.
