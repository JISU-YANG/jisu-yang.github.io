---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 28
title: Array
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

배열은 하나의 변수명을 가지며, 이를 통해 인덱스를 통해 값을 가져올 수 있다. 단, 선언된 1개의 타입만 입력이 가능하다. 배열 자체에는 클래스가 없지만, java.util.Arrays를 이용하면 배열에 기능을 추가해 사용할 수 있다. 선언된 객체는 공간을 갖지만, 타입에 따라 초기 값이 달라진다.

---

### 예외 사항

배열은 일반적으로 다음과 같은 특징을 가진다:

1. 다양한 타입을 입력하고 싶을 때는 Object 타입을 이용한다. 하지만 타입이 명시적으로 알 수 없으므로, JDK 1.5부터는 Generic을 사용해 타입 안정성을 높일 수 있다.
2. 범위를 벗어난 인덱스를 호출하면, indexOutBoundaryException이 발생한다.

---

### 배열 선언

다음은 Java에서 배열을 선언하는 방법이다:

```java
class Ex() {
    // 공간과 값을 동시에 선언
    int [] num1 = {1, 2, 3};

    // 공간만 선언
    int [] num2 = new int[3];

    // 인스턴스화
    int [] num3 = new int[]{1,2,3};
}
```