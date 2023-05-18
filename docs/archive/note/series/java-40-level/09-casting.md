---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 9
title: Casting
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
### 형변환 (Casting)

형변환은 값의 크기나 형태를 바꾸는 것을 말한다. 이는 기본 타입에서만 일어난다.

---

### 형변환 (Casting) 연산자

형변환을 하려면 다음과 같이 (목적타입) 값의 형태로 쓴다.

```java
double a = 1.1;
int b = 0;

b = (int) a; // 이렇게 하면 b는 1이 된다.
```
위 예시에서 볼 수 있듯이, 큰 타입에서 작은 타입으로 형변환하면 손실이 발생할 수 있다. 이 경우, 소수점 아래의 값이 손실된다.

---

### 형변환 (Casting)의 종류
형변환에는 두 가지 종류가 있다.

1. 프로모션 (자동 형변환, Promotion): 값이 바뀌지 않고 작은 공간에서 큰 공간으로 옮겨진다. 예를 들어, byte에서 int로 변환하는 경우가 있다.

2. 캐스팅 (강제 형변환, Casting): 큰 공간에서 작은 공간으로 이동할 때 값의 손실이 일어날 수 있다. 예를 들어, long에서 short로 변환하는 경우가 이에 해당한다.