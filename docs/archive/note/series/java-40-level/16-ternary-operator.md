---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 16
title: Ternary Operator
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
### 3항 연산자

3항 연산자는 간단한 조건 판단을 위해 사용된다.

```java
// 3항 연산자 형태
조건 ? 참 : 거짓;
isTrue ? true : false
```

3항 연산자의 가장 큰 특징은 항상 값을 반환한다는 점이다. 이는 if문과의 차이점이다.

```java
// 3항 연산자 사용 예시
result = isTrue ? 1 : 2; // 변수에 반환 값을 대입
```
