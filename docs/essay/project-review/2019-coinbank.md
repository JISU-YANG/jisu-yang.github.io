---
# 페이지 셋팅
layout: project_review
title: 모의 가상화폐 거래소
parent: 프로젝트 회고록
grand_parent: Essay
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
    service: # 서비스 정보 @name: 이름 @subject: 주제
        name: CoinBank
        subject: 모의 가상화폐 거래소
    platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모url @github: 깃헙url, @value: default -> n
        environment: 데스크탑 응용 프로그램  
        demo: n
        github: https://github.com/JISU-YANG/2019_CoinBank
    period: # 개발 기간 @date: 범위 @day: 기간
        date: 19.05.03. ~ 19.05.08.
        day: 6일
    people: # 개발 인원 @number: 인원 수 @script: 비고
        number: 2명
        script: 팀장
intro:
    tech_stack: # 기술 스택 key(index):value(script)
        language: Java
        server: n
        framework: n
        api_and_library: javax
        database: n
        ide: Eclipse
    role:
        1:
            script: 프로젝트 기획 및 업무 분배
            contribution: 80
        2:
            script: javax의 Swing을 이용한 화면 구성
            contribution: 100
        3:
            script: 전체 기능(로그인, 대시보드, 매도 및 매수, 내역, 마감) 구현
            contribution: 90
    thumbnail: 2019-coinbank-thumb01.png, 2019-coinbank-thumb02.png
---


## Keep
### 예외상황에 대한 처리
기본적으로 해당 조건이 아님에도 접근하는 경우들을 고려해서 안내 Pop-up이 나올 수 있도록 수정해 두었다. 지금 와서 생각해 보면 애초에 그런 버튼들을 비활성화해 두는 편이 더 낫겠다는 생각이 들지만, 모든 예외 상황에 대한 대처가 반영이 된 점 자체는 잘했다는 생각이 든다.

<img class="cdn-img" id="2019-coinbank-code01.png"/>

<img class="cdn-img" id="2019-coinbank-code02.png"/>

코인의 매수와 매도의 경우 사용자가 숫자를 입력하여 개수를 설정할 수 있는데, 그 부분에 문자열을 입력할 경우 Integer.parseInt()의 파라미터 타입이 일치하지 않으므로 프로그램이 다운되는 것을 막기 위하여 try-catch 문을 적용해 두었다.

<img class="cdn-img" id="2019-coinbank-code03.png"/>

---

### 시세 변동 알고리즘
각각의 코인마다 다른 변동 폭을 가졌으면 했고, 그 수치에 대한 부분을 쉽게 컨트롤할 수 있었으면 했다. 마땅한 레퍼런스를 찾을 수 없어서 자체적으로 고안해 보기로 하였다. 그래서 일단 코인 객체가 생성될 때 변동 폭을 파라미터로 받았다. 매수, 매도 시에 변동이 이루어지는 구조상 저렴한 코인을 매수, 매도하면서, 시세 변동의 차익을 보는 편법을 막기 위해 개별적으로 시세 변동이 이루어질 수 있도록 객체의 메소드로 구성했다.
<img class="cdn-img" id="2019-coinbank-code04.png"/>

단순히 원래 가격을 랜덤으로 변경하기에는 항상 들쭉날쭉하게 가격 차이가 나는 문제가 발생했다. 고민 끝에 그 편차를 미세하게 조절하기 위해 최소, 최대 가격 폭을 가정했다. 최소 가격에 개발자가 지정한 수준의 변화가 이루어진 값을 구한 뒤 더함으로써 이에 대한 부분을 해결했다.

<img class="cdn-img" id="2019-coinbank-code05.png"/>


## Problem & Try


### 실시간 시세 변동
시시각각으로 변동되는 코인의 시세를 원했지만, Thread에 대한 개념을 모를 때라서 결국 작동되는 지점을 직접 정해주기로 했다. 그나마 자연스럽게 매도, 매수 직후로 설정하고 메소드가 이어 작동하게 하였다.

<img class="cdn-img" id="2019-coinbank-code06.png"/>


---

### 주석 대신 구체적인 이름으로
변수명을 짓는 일은 누구에게 물어도 어려운 일이다. 이 프로젝트를 할 때 나는 최대한 디테일인 부분보다는 상징성에 가깝게 변수명을 지었다. 그러고 로직과 변수에 대한 주석을 철저하게 써놓았다. 만약 변수명에 오히려 디테일한 부분을 나타낼 수 있는 단어로 사용하였다면, 굳이 주석으로 남길 필요도 없었을 것이란 생각이 인제 와서 든다. 그리고 제대로 된 명명법도 알지 못해서 프론트에서 사용하던 \_(언더바) 스타일을 사용하고 말았다.

<img class="cdn-img" id="2019-coinbank-code07.png"/>

---

### 클래스 분리가 아쉽다
모든 시스템이 Java 안에서 이루어져야 하므로 고충이 있었다. 나름의 MVC 모델에 대해 들은 적이 있었기 때문에 사용자의 지갑 같은 데이터는 분리해 두었지만, 오히려 메시지 클래스라던가, 유틸리티 클래스를 분리하지 않고 프로세스 클래스에 둔 것은 상당히 아쉽다.

<img class="cdn-img" id="2019-coinbank-code08.png"/>

<img class="cdn-img" id="2019-coinbank-code09.png"/>

<br>

## 마치며
직접 코드를 처음부터 끝까지 작성해서 만들어 보는 첫 프로젝트이기 때문에 너무 설레었고 특별한 경험이었다. 그것도 Java라는 매력적인 언어로 로직과 연산도 함께했고 웹 서비스가 아닌 자체 프로그램 형태로 결과물이 나온 것도 신기했다. PM으로서는 "팀 프로젝트는 조별 과제와 같은 것인가?"라는 생각이 들며, 꼭 이미 알고 있는 것이 아니더라도 도전해 보게끔 비전을 공유하는 능력을 어떻게 길러야 하나 고민이 된다.
