---
# 페이지 셋팅
layout: project
title: 도서 관리 프로그램
parent: 프로젝트 회고록
grand_parent: Essay
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
  service: # 서비스 정보 @name: 이름 @subject: 주제
    name: Airbooks
    subject: 도서 관리 프로그램
  platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
    environment: 데스크탑 응용 프로그램
    demo: n
    github: https://github.com/JISU-YANG/2019_AirBooks
  period: # 개발 기간 @date: 범위 @day: 기간
    date: 19.05.23. ~ 19.06.05.
    day: 14일
  people: # 개발 인원 @number: 인원 수 @script: 비고
    number: 6명
    script: PM
intro:
  tech_stack: # 기술 스택 key(index):value(script)
    language: Java
    server: n
    framework: n
    api_and_library: AWT, Swing, File I/O
    database: n
    ide: Eclipse
  role:
    1:
      script: 기획안 작성 및 아키텍처 설계
      contribution: 70
    2:
      script: 기능 개선 및 프로젝트 병합
      contribution: 100
    3:
      script: AWT와 Swing을 이용한 UI/UX 개발
      contribution: 80
  thumbnail: 2019-airbooks-thumb01.png, 2019-airbooks-thumb02.jpeg, 2019-airbooks-thumb03.jpeg
---

## Keep
### 로직이 분리된 아키텍처
모든 과정이 Java로만 개발되어 더욱 로직의 분리가 중요하다고 생각했다. 코드를 독립적이고 중복을 줄일 수 있도록 view, dao, db로 크게 나누고 기능의 분류에 맞춰 클래스를 설계 했다.

<img class="cdn-img" id="2019-airbooks-image01.png" style="height: 500px">

---

### PM의 영역
지금까지 내가 생각하는 PM의 큰 역할은 의지할 수 있고, 의견을 잘 낼 수 있도록 대화를 이끌어주며, 불만에 대한 대책을 반영해주는 것이라고 생각했다. 그것이 기한 안에 프로젝트를 좋은 팀 컨디션으로 최선의 퀄리티라고 생각했다. 하지만 놓친 것이 있었다.

이번 프로젝트를 통해 경험해볼 수 있었는데 PM에게 너무 의존적인 구조를 내가 형성하고 있었는지도 모르겠다는 생각이 들었다. 예를들어 해결하기 어려워하는 상황에서 대신 작업을 해주는 도움을 주지 않았다. 큰 틀에서 서로 지켜야하는 부분, 구현되어야하는 기능의 요소을 더 강조했었다.

그리고 그것에 대해 디테일하게 칭찬해주었다. "이렇게 구성하면 ~ 이런 상황에서도 문제가 없겠네요." 처럼. 어떻게 보면 그 부분까지 고려하고 작성한 것이 아닐지라도 다음 작업을 할때 더 많은 상황을 고려하게 유도한 것이다.

그리고 맡은 기능들이 이번 프로젝트가 아니더라도 어떤 곳에서 사용될 수 있을지에 대해 이야기해주며 단기적 목표로 인한 성장에 대해 체감될 수 있도록 노력했다. 이러한 노력끝에 포기하거나 이탈자없이 기한안에 잘 마무리할 수 있었다.

---

## Problem & Try

### DB를 txt file로 대체
DB를 따로 사용하지 않았기 때문에 프로그램이 종료되면 인스턴스가 사라짐으로 인해 데이터가 누적이 안 되는 부분을 파일 입출력을 통한 대안을 적용했다. 하지만 현 수준에서 File I/O를 구현하는데 약간의 어려움이 있었고 시간을 많이 소모해 프로젝트 내에서 사용할 수 있도록 라이브러리 형태로 다루지는 못 했다. Path들에 대해서만 Class로 묶어두었다.

```java
while(iter.hasNext()){
    Map.Entry<String, ArrayList<Integer>> e = iter.next();
    fileText += "\r\n" + "/" + e.getKey() + "/";
    if(e.getValue() != null){
        for(int i = 0; i < e.getValue().size(); i++){
            if(i % 4 == 0){
                fileText += "\r\n" + "/";    
            }
            fileText += e.getValue().get(i) + "/";
        }    
    }
}

buffWrite.write(fileText, off: 0, fileText.length());
buffWrite.flush();
buffWrite.close();
```

그런 상황에서 다른 팀원들도 이 기능을 숙지시키는 것은 무리였고, 담당 팀원과 내가 기능과 연결시키고 테스트하는 역할을 했다. 시연 전 마지막 테스트에서 데이터가 저장될 외부 경로를 설정하는데 Mac과 Windows OS간 사용자 기본 경로의 차이가 있어 System 클래스의 getProperty 메소드를 이용해 해결했다.

```java
System.getProperty("user.home")
```

---

### 인코딩 이슈
프로젝트 시작 직후 모든 팀원들의 개발환경을 일치시켰어야 가했는데, 같은 강의를 듣고 있는 수강생들이라 당연하게 같을줄 알고 넘어갔었다. 기능들을 합칠때 문제가 발생했고, 그제서야 다시 확인을 하고 정정했다. 그래서 깨진 부분들은 다른 에디터를 사용하여 Copy&Paste 했다. 규모가 큰 프로젝트였으면 큰일날뻔했다. 명심하자.

---

### 화면 리프래시
화면의 구성요소가 바뀌어도 바로 화면에 반영이 되지 않았다. 현재 켜있는 메인 프로그램을 그대로 사용하면서 수정이 되어야 했는데, JPanel 인스턴스에 removeAll() 호출한 뒤 아래와 같은 과정으로 해결했다.

```java
static void refresh(){
    Reco.loadView();
    Reco.reco.revalidate();
    Reco.reco.repaint();
    Header.searchCheck = false;
}
```
---

## 마치며
단과반의 두 과정 중 마지막 과정에 진행한 프로젝트였다. 배운 내용들을 최대한 많이 사용해보고 싶었지만 그런 주제를 찾기가 여간 쉽지 않았다. 그래서 추상 클래스, 인터페이스(+마커), 내부 클래스, 익명 클래스, API 등 사용해보지 못 한 것들에 아쉬움이 남긴 하지만 예외처리, JCF, SWING, 파일 입출력을 사용할 수 있어서 그래도 좋은 경험이었다. 7개의 조 중에서 1등으로 결과를 마무리 했다.


