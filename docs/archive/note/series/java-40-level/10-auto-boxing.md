---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 10
title: Auto Boxing
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

### 래퍼 클래스 (Wrapper Class)

- 각 기본 타입에는 래퍼 클래스가 있다.
- 이 클래스는 기본 타입 값을 객체로 만들어준다.
- 'int'는 'Integer', 'char'는 'Character' 같은 래퍼 클래스가 있다.

---

### 오토 박싱 (Auto Boxing)과 오토 언박싱 (Auto Unboxing)

- JDK 1.5부터 자동으로 동작하기 시작했다.
- 오토 박싱은 기본 타입을 참조 타입으로 바꿔준다.
- 오토 언박싱은 참조 타입을 기본 타입으로 바꿔준다.
- 이 변환은 메모리에서 값 이동을 포함한다.

```java
int a1 = 10;

// 오토 박싱: 기본 타입 -> 참조 타입
Integer a2 = a1;

// 오토 언박싱: 참조 타입 -> 기본 타입
int a3 = a2;

// 이전 방식
int a4 = a2.intValue();
```

- 위 코드에서, 'a1' 값이 'a2'로 바뀌고, 'a2' 값이 다시 'a3'로 바뀌는 것을 볼 수 있다.