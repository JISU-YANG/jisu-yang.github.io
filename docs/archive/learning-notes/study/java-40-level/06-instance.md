---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 6
title: Instance
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

### 인스턴스 (Instance)

메모리(heap)에 생성된 클래스를 인스턴스라고 한다.

---

### 인스턴스 (Instance)의 특징

- 메모리 안 어느 위치에 있는지 고유한 주소(reference)를 가진다.
- 오브젝트 종류에 따른 식별번호 해쉬코드(hashcode)를 가진다.

---

### 인스턴스 (Instance)의 생성

- 인스턴스화 (== 객체화) 라고 부른다.
- new 라는 예약어를 사용해 클래스(Class)를 인스턴스(Instance)로 만들어준다.
- 클래스의 지정은 클래스의 주소를 가지고 있는 생성자를 사용한다.
- ex) new Class()

---

### 인스턴스 (Instance)의 선언

A b = new A();

1. 클래스(A의 자료형과 같은 타입) 오브젝트를 메모리의 Heap영역에 생성하고
2. 그 안에 인스턴스의 주소 값과 해시코드를 부여한다.

