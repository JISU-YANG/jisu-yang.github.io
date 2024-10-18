---
# 페이지 셋팅
layout: project_review
title: 도서 관리 프로그램
parent: 프로젝트 회고록
grand_parent: Experience
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

## 어려움과 극복
### 개발환경 통합
기능들이 정의된 후 각 팀원들은 바로 자신의 담당 기능에 착수했다.
통합 단계가 되고 나서야 팀원들의 개발환경(IDE)의 셋팅을 미리 통합해야한다는 것을 깨달았다. 
결국 인코딩 설정이 달라 코드가 깨지는 이슈가 발생했고, 파일 하나 하나 텍스트 에디터로 불러와 복구해 애를 먹었다.
규모가 큰 프로젝트 였다면 큰일날뻔했다.

---

### 데이터 관리
도서와 회원에 대한 정보를 불러오고 저장할 수 있어야 하지만 데이터베이스는 사용할 줄 몰랐다.
프로그램이 종료되면 메모리의 인스턴스가 사라지기 때문에 데이터 관리를 할 수 없었다.
그래서 파일 입출력을 통해 Java로 해결하는 대안을 적용해보기로 했다. 
File I/O를 구현하는데만 많은 시간이 소요되어서, 
프로젝트 내에서 사용할 수 있도록 추가적인 라이브러리 형태로는 다루지 못 해서 아쉬웠다.

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

다들 어려워하는 상황이었기 때문에 기능을 모두에게 숙지시키는 것은 무리였고, 담탕 팀원과 팀장인 내가 기능과 입출력을 연결시키고 테스트를 했다.
시연 전 마지막 테스트에서 데이터가 저장될 외부 경로를 설정하는데 Mac과 Windows OS간 사용자 기본 경로의 차이가 있어 매우 당황했지만,
System 클래스의 getProperty 메소드를 이용해 해결했다.

```java
System.getProperty("user.home")
```

---

## 배운 점
### 아키텍처 설계
모든 과정이 Java로만 개발되었기 때문에 더욱 로직의 분리가 중요하다고 생각했다. 
저번 프로젝트에서 제대로 알지 못했던 MVC 패턴을 더 알아보고 view, dao, db로 크게 나누어 기능의 분류에 맞춰 클래스를 설계해 코드를 독립적이고 중복을 줄일 수 있었다.

<img class="cdn-img" id="2019-airbooks-image01.png" style="height: 500px">

---

### AWT Refresh 이슈
객체에서 발생하는 이벤트가 화면에 바로 반영되지 않았다. 
stackoverflow를 찾아본 결과 JPanel 객체에 removeAll() 호출한 뒤 직접 revalidate(자식 컴포넌트 재배치), repaint(모양, 위치 변경)를 호출하여 이 문제를 해결할 수 있었다. 
웹과는 다르게 화면의 단위가 없기때문에 발생하는 문제라고 생각된다.

```java
static void refresh(){
    Reco.loadView();
    Reco.reco.revalidate();
    Reco.reco.repaint();
    Header.searchCheck = false;
}
```

---

## 결과 및 성과
### 뿌듯한 1등
KIT의 Java 단과 심화반까지 모든 과정을 마치게 되었고 진행된 최종 팀 프로젝트였다. 
배운 내용들을 최대한 많이 사용해보고 싶었지만 그런 주제를 찾기가 결코 쉽지 않았다.
흥미롭지는 않았지만 심화 과정에서 가장 어려웠던 내용인 파일 입출력을 실전에 적용해 볼 수 있는 도서 관리 프로그램으로 선정했다.
높은 난이도 덕분에 고생도 많았고 자연스럽게 팀으로서의 협업도 요구되어 특별한 경험을 할 수 있었던 것 같다.
시연 결과는 7개의 조 중에서 1등을 수상했다.

---

## 마치며
3개월이 조금 넘는 기간동안 Java 단과반을 마쳤다.
심화 과정에서 배운 추상 클래스, 인터페이스(+마커), 내부 클래스, 익명 클래스, API 등 
이번 프로젝트에서 사용해보지 못 한 것들에 아쉬움이 남긴 하지만,
예외처리, JCF, SWING, 파일 입출력을 사용해볼 수 있어 좋은 경험이 되었다.
막막한 개념들도 알아갈 수록 점점 더 선명하게 자리잡으며 답답함이 해소되고, 
생각에서 출발해 프로그램으로 결과물이 완성해 작동하는 것을 보며 느껴지는 성취감이
개발이 점점 더 매력적으로 느껴지게 하는 것 같다.
