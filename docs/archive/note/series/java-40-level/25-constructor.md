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

### 생성자의 특징
- 클래스 명과 같다.
- 반환 타입이 없다.
- 메소드 형태를 띄고 있다.
- Heap에 노출된다.

### 생성자의 기능
- 인스턴스화 할때 1번만 호출하며 주소를 반환한다.
- 멤버 필드를 초기화한다.
- 
### 생성자의 종류
- Default 생성자
- Overloading 생성자
  - Overloading 생성자를 사용하기 위해서는 Default 생성자를 명시적으로 표현해야한다.
  - 자신의 생성자를 호출하려면 this()를 사용한다.
- 예외적으로 기능과 연산을 담고있는 메서드 혹은 인스턴스의 기반이 되는 멤버필드를 제어할때는 같이 사용한다.