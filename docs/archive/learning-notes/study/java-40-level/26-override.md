---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 26
title: Override
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

메소드 오버라이딩, 재정의라는 기법을 통해 부모 클래스의 메소드를 자식 클래스에서 변경하여 사용할 수 있다.

---

### 오버라이딩의 조건

메소드 오버라이딩은 다음과 같은 조건에서만 가능하다:

1. 오직 부모 클래스와 자식 클래스의 관계에서만 이루어진다.

---

### 오버라이딩의 의미

오버라이딩은 다음과 같은 의미를 가지고 있다:

1. 부모 클래스의 메소드 코드 내용을 자식 클래스에서 다시 정의한다.

---

### 오버라이딩의 예외

오버라이딩이 불가능한 경우는 다음과 같다:

1. `private`으로 선언된 메소드는 extends 될 수 없으므로 오버라이딩 대상이 아니다.
2. 부모 클래스의 메소드가 `final`로 선언된 경우, 해당 메소드는 변경이 불가능하므로 오버라이딩 대상이 아니다.
3. 부모 클래스의 생성자 메소드는 오버라이딩 대상이 아니다.

