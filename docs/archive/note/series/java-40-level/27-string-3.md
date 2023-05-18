---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 27
title: String 3
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

1. String 클래스의 메소드는 인스턴스로 반환된다.
2. 인스턴스를 통해 String Pool에 접근되는 값은 오버라이딩된 해시코드를 가지게된다.

### 형태
```java
class ex(){
    String str1 = "A";
    String str2 = new String("a");
    String str3 = "";
    String str4 = null;
}
```

### 문자열 합치기
- Concatenation
  - 문자열과 문자열 사이에 "+" 연산자를 사용해 발생시킨다.
- Concat
  - String 클래스의 concat 메소드를 이용한다.