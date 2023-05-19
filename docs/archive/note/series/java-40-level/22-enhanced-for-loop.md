---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 22
title: Enhanced For Loop
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

향상된 for문은 배열을 다루는 로직에 유용하게 사용된다. 그러나 사용시 장단점을 잘 알아두는 것이 중요하다.

---

### 향상된 for문의 용도

주로 배열을 처리하는 로직에서 사용한다.

---

### 향상된 for문의 장점

향상된 for문을 사용하면 다음과 같은 이점이 있다:

1. 인덱스와 객체 호출을 사용하지 않는다.
2. 객체 배열의 처음부터 끝까지 출력하므로 인덱스 예외가 절대 발생하지 않는다.
3. 자동으로 타입 캐스팅할 수 있다.

---

### 향상된 for문의 단점

그러나 향상된 for문에도 다음과 같은 단점이 있다:

1. 중간에 멈출 수 없다.
2. 인덱스를 알 수 없다.
3. 값을 수정할 수 없다.

---

### 향상된 for문 사용 예시

```java
class Ex() {
    int[] a = {1, 2, 3};
    {
        for (int b : a) { 
            System.out.print(b);
        }
    }
}
```