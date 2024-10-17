---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 17
title: Short Circuit
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

### 숏 서킷

'&'(엔퍼센트)와 '\|'(브로큰바)를 이용해서 논리연산을 진행한다. 앞의 결과에 따라 뒤의 연산을 생략할 수 있다.

### &&(AND, 논리곱)

'a && b'는 a와 b 모두 true일 때만 true를 반환한다.

### ||(OR, 논리합)

'a \|\| b'는 a와 b 중 하나만 true라도 true를 반환한다.

### 효율적인 연산 순서

false가 더 많이 발생하는 연산을 먼저 작성하면 연산 단축 효과를 볼 수 있다. 더 줄이려면 객체지향, 디자인 패턴 순으로 적용해볼 수 있다.

```java
package jisu.log;

public class ShortCirCuit {
    public void check() {
        if(isTrue() && isFalse()); // True, False 출력
        if(isTrue() && isTrue()); // True, True 출력
        if(isFalse() && isTrue()); // False만 출력
        if(isFalse() && isFalse()); // False만 출력
    }
    
    public boolean isTrue() {
        boolean isc = true;
        System.out.println(isc);
        return isc;
    }

    public boolean isFalse() {
        boolean isc = false;
        System.out.println(isc);
        return isc;
    }
}
```