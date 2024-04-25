---
# 페이지 셋팅
layout: project_review
title: 북마크 런처 프로그램
parent: 프로젝트 회고록
grand_parent: Essay
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
    service: # 서비스 정보 @name: 이름 @subject: 주제
        name: NP-Launcher v1.1
        subject: 북마크 런처 프로그램
    platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
        environment: 윈도우 응용 프로그램  
        demo: https://github.com/JISU-YANG/NP-Launcher/releases/tag/v1.1
        github: https://github.com/JISU-YANG/NP-Launcher/tree/master
    period: # 개발 기간 @date: 범위 @day: 기간
        date: 24.04.14. ~ 24.04.16.
        day: 3일
    people: # 개발 인원 @number: 인원 수 @script: 비고
        number: 1명
        script: 
intro:
    tech_stack: # 기술 스택 key(index):value(script)
        language: JavaScript, HTML/CSS
        server: Node.js
        framework: <a href="https://namu.wiki/w/Electron(%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC)">ELECTRON</a>
        api_and_library: BrowserWindow, <a href="https://www.electronjs.org/docs/latest/tutorial/ipc">electron-ipc</a>, <a href="https://github.com/sindresorhus/electron-store#readme">electron-store</a>, electron-shutdown-command, electron-dialog
        database: n
        ide: IntelliJ, VSCode
    role: 
        1:
            script: 프로젝트 기획, UX/UI 디자인, 풀스택 개발, QA 및 테스트
            contribution: 100
    thumbnail: 2023-NPLauncher-신메인화면.png, 2023-NPLauncher-신설정화면.png
---

## 어려움과 극복
### 로컬파일 절대 경로

파일을 선택해 경로를 얻으려고 했으나, 모든 브라우저가 보안상의 이유로 인해 막아두었다고 한다. 자바스크립트로 직접 구현할 수 는 없지만, 해결책을 찾던 중 node.js를 활용하면 가능하다는 것을 알게 되었다. electron-dialog 라이브러리를 사용해 직접 dialog를 구현함으로써 우회적으로 로컬파일의 절대 경로를 가져올 수 있게 되었다. 그리고 부가적인 문제가 있었했는데 alert 창이 활성화 된 후 input 필드에 focus가 이동되지 않아 사용자가 입력을 할 수 없는 상황이 발생했다. 같은 라이브러리를 이용해 직접 alert를 구현해서 해결 할 수 있었다.

### 데이터 관리 방식 개선

초기 버전 개발 당시, 왜 데이터를 복잡하고 직관적이지 않은 n차원 배열로 구성했는지 기억이 나지 않았다. 그래서 일단 Map 형태로의 전환을 결정했다. 하지만 이 과정에서 store 라이브러리와의 호환성 문제가 발생했고, 여러 차례 시행착오 끝에 문제의 원인을 알 수 있었다. 직렬화 데이터를 사용해야 한다는 것이었는데, Map 구조를 JSON으로 변환해도 동일한 에러가 반복되어, 결국 Map 내부에 저장된 List만을 별도로 추출하여 로컬 데이터로 저장하는 방법을 선택해야 했다. 이로 인해 데이터 변환 및 복구 과정이 추가되어야 했다.

### 실행파일 빌드 이슈

배포 과정에서 exe 파일로 빌드를 시도할 때 에러가 발생했다. 문제 해결을 위해 다양한 시도 끝에 반쯤 포기하는 마음으로 기존 코드로 롤백을 해보았으나 문제는 계속됐다. 자세히 조사해본 결과, 원인은 electron의 버전이 업데이트 되면서 `package.json` 파일 내의 `"directories" 설정이 `"build"` 항목 안으로 이동되어야 했던 것이었다. 변경 사항을 적용하고서 빌드 문제를 해결할 수 있었다.

## 배운 점
### JavaScript의 메모리 관리
프로젝트 진행 중, JavaScript만의 고유한 메모리 관리 방법을 충분히 이해하고 적용하지 못한 것 같다. 가령, 익명 함수를 사용하여 호이스팅에서 제외시키고 오버헤드를 줄이는 방법에 대해서도 프로젝트 완료 후에야 알게 되었다. 성능 최적화에 대해 더 깊이 고민하고, 다양한 기법에 대한 지식을 확장할 필요성을 느꼈다.

### 새로운 JavaScript 기법의 적용
ES6의 템플릿 리터럴 사용, 람다를 활용한 forEach에서의 break 대체 방법 등 새로운 JavaScript 기법을 렌더링 프로세스에 적용해보았다. javascipt도 좋은 기능이 많아져서 흥미롭다. 클로저를 떠올리지 못해 반영하지 못한 것은 아쉬움으로 남는다.

## 결과 및 성과
### 리팩토링을 하며 느낀점
코드의 가독성과 유지보수성을 향상시키는 것에 집중한 리팩토링이었다. HTML 엘리먼트의 관리를 개선하기 위해 클래스를 분리했고, 상수 값을 명확하게 관리하기 위해 enum을 도입했다. 또한, 직렬화된 데이터의 처리를 개선하기 위해 데이터 구조를 재설계하였다. 이 과정을 통해 기능적 요구사항을 단순히 충족시키는 것을 넘어서, 설계단계에서의 고민과 클린 코드를 작성하는 습관의 중요성을 다시 깨닫게 되었다.

## 마치며
개발한지 1년이 지난 서비스라 코드가 낯설기도 하고 서비스를 리팩토링해보는 것은 처음이라 새로운 점이 많았다. 도메인 분석을 하다보니 직접 작성한 코드 이지만 코드 하나하나 왜 이렇게 작성했는지 기억이 나지 않아서 이해하는데 참 어려움이 있었다. 기존 구조와 코드를 분석하고 리팩토링을 하여 더 효율적인 시스템을 만들어보는 경험을 할 수 있어서 만족스러운 것 같다.