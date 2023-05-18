---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 35
title: Memory
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

### 메모리의 구성
- Method Area
  - 요소
    - Static
    - Method
  - 특징
    - App이 실행될 때 가장 먼저 할당된다.
    - 단, 1회 할당된다.
- Stack
  - 요소
    - Value
    - 연산
    - 변수명
  - 특징
    - LIFO
- Heap
  - 요소
    - 생성자
    - 객체
  - 특징
    - Garbage Collection

### MEMORY의 4대 특징
- 하위 클래스가 생성되려면 상위 클래스가 먼저 생성되어야한다.
- 하위 클래스를 호출하면 상위 클래스가 먼저 실행된다.
- 생성된 주소는 부모의 주소다.
- 클래스에 공개되어 있는 메소드만이 사용가능하다.

![Memory Image](/Source/%EB%A9%94%EB%AA%A8%EB%A6%AC.png)