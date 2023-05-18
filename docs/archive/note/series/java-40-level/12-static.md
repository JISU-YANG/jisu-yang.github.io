---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 12
title: Static
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

### Static의 메모리 영역

메모리는 크게 세 가지 영역으로 나눌 수 있다.
1. Method Area: 스태틱 변수와 메서드가 저장된다.
2. Stack: 변수의 이름, 타입, 값, 연산 등이 저장된다.
3. Heap: 인스턴스와 생성자가 저장된다.

---

### Static의 이점

스태틱 변수는 두 가지 큰 이점이 있다.
1. 값이 변하지 않는 경우, 메모리 할당을 한 번만 하기 때문에 메모리 사용에 있어서 이점이 있다.
2. 모든 인스턴스가 같은 메모리 주소를 공유하기 때문에, 변수를 통해 값을 공유하고 조절할 수 있다.

---

### Static의 접근 규칙

스태틱과 non-static 변수나 메서드 사이의 접근 규칙은 다음과 같다.
- static은 static을 접근할 수 있다.
- static은 non-static을 접근할 수 없다.
- non-static은 static을 접근할 수 있다.
- non-static은 non-static을 접근할 수 있다.
