---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 29
title: Final
toc: true
reference:
  1:
    author: 한동석
    year: 2019
    platform: 코리아IT아카데미
    content: JAVA 단과 과정
    content-link:
  2:
    author: 전민균
    year: 2019
    platform: 코리아IT아카데미
    content: 웹 개발자 양성 과정
    content-link: 
---


Java에서는 'final'이라는 예약어를 사용해 클래스, 메소드, 변수에 대해 특별한 조건을 부여할 수 있다. 이들 각각에 대해 'final'이 어떻게 작동하는지 알아보자.

---

### 변수에 'final' 사용

'final'이 변수에 사용될 경우, 해당 변수는 상수로 변하게 된다. 이 말은, 한 번 초기화된 값을 다시 바꿀 수 없다는 뜻이다.

---

### 메소드에 'final' 사용

메소드에 'final'을 사용하면, 그 메소드는 더 이상 오버라이드(OverRide)될 수 없게 된다. 즉, 자식 클래스에서 부모 클래스의 해당 메소드를 재정의할 수 없게 되는 것이다.

---

### 클래스에 'final' 사용

클래스에 'final'이 사용되면, 그 클래스는 더 이상 상속(extends)되지 못하게 된다. 예를 들어, Java의 java.lang 패키지에 있는 많은 클래스들이 'final'로 선언되어 있다.

---

또한, 'static' 예약어를 이용하면 초기화 없이도 객체에 접근해 변수와 메소드를 호출할 수 있다.
