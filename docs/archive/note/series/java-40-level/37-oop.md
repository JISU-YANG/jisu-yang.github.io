---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 37
title: OOP
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

JAVA에서는 대부분 객체지향 프로그래밍(Object-Oriented Programming, OOP) 방식을 사용한다. 이는 C 언어의 절차지향 프로그래밍과는 대조적이다. 이 방식은 세상의 모든 것을 객체(Object)로 바라보고, 이에 따라 프로그램을 구현한다.

---

### 객체지향 프로그래밍의 세 가지 주요 특징

1. **은닉화(Encapsulation)**
    - 멤버 필드는 private으로 선언하여 데이터를 은닉화한다.
    - 데이터 접근을 위해 `get()`과 `set()` 메소드를 사용한다.

2. **계층구조(Inheritance)**
    - 인터페이스는 계층구조로 생각하지 않는다.
    - 오버라이드(Override)는 계층구조 상에서만 가능하다.
    - 오버라이드 불가능한 조건:
        - final로 선언된 경우
        - 부모의 생성자인 경우
        - private로 선언된 경우
        - static으로 선언된 경우

3. **다형성(Polymorphism)**
    - 캐스팅(casting)을 통해 여러 형태(type)를 가질 수 있다.
    - 다형성의 발생 원리는 다음 세 단계로 이루어진다:
        - 상위 클래스의 이름으로 하위 클래스를 생성한다. (다른 하위 클래스 타입으로 다운캐스팅하면 ClassCastException 발생)
        - 상위 클래스 타입으로 하위 클래스를 참조한다.
        - 상위 클래스의 메소드로 자식의 메소드를 실행한다. (추상 메소드의 오버라이드, VMI)

