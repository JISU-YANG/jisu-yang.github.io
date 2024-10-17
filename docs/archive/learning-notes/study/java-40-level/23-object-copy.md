---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 23
title: Object Copy
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

객체 복사는 주로 깊은 복사(Deep Copy)와 얕은 복사(Shallow Copy) 두 가지 방법으로 이루어진다.

---

### 깊은 복사(Deep Copy)

깊은 복사는 객체 내부의 값을 새로운 객체에 넣는 방법이다.

---

### 깊은 복사를 위한 방법

깊은 복사를 하기 위한 방법에는 다음과 같은 세 가지가 있다:

1. 스택 영역에서 일어나는 방식:
  - 복사하려는 배열과 같은 크기의 객체를 생성한다.
  - 같은 인덱스에 위치한 값을 꺼내와 입력해준다.
  - 힙 영역에 있는 배열 내부의 값을 스택 영역으로 꺼내와 힙의 다른 배열에 넣어줘 연산한다.

2. 힙 영역에서 일어나는 방식:
  - Object를 통해서 자식의 객체를 힙 영역에 복사하고 생성된 주소를 넘겨준다.
  - 단, 복제가 가능한 클래스만 가능하다.
  - 데이터를 가진 클래스들은 clone()을 재정의, 기능만 가진 클래스는 하지 않는다.

3. 시스템 메모리에서 사용하는 방식:
  - 배열에서만 사용하고 배열을 합칠 수 있다.

---

### 얕은 복사(Shallow Copy)

얕은 복사는 객체의 주소를 전달하는 방식이다. 이렇게 되면 복사한 객체와 원본 객체가 같은 데이터를 바라보게 된다.