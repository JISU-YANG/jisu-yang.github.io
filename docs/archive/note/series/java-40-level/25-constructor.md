---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 25
title: Constructor
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

생성자는 클래스를 초기화하는 역할을 한다. 아래에서 생성자의 특징, 기능, 종류에 대해 알아보자.

---

### 생성자의 특징

생성자는 다음과 같은 특징을 가지고 있다:

1. 클래스 이름과 동일하다.
2. 반환 타입이 없다.
3. 메소드와 비슷한 형태를 가지고 있다.
4. Heap 영역에 생성된다.

---

### 생성자의 기능

생성자는 다음과 같은 기능을 수행한다:

1. 인스턴스를 생성할 때 단 한 번만 호출되며, 생성된 인스턴스의 주소를 반환한다.
2. 클래스의 멤버 필드를 초기화한다.

---

### 생성자의 종류

생성자에는 크게 세 가지 종류가 있다:

1. Default 생성자
2. Overloading 생성자
  - Overloading 생성자를 사용하기 위해서는 Default 생성자를 명시적으로 선언해야 한다.
  - 생성자 내부에서 다른 생성자를 호출하려면 this()를 사용한다.
3. 예외적으로, 메서드나 인스턴스의 기반을 형성하는 멤버 필드를 제어할 때 함께 사용된다.

