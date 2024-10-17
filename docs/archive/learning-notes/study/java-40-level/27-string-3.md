---
layout: note_series
parent: Learning Notes
study: Java 40 Level
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
String 클래스의 메소드는 인스턴스 형태로 반환되며, 이를 통해 String Pool에 접근할 수 있다. 이때, 접근되는 값은 오버라이딩된 해시코드를 가지게 된다.

---

### String 클래스의 형태

다음과 같이 String 인스턴스를 만들 수 있다:

```java
class Ex(){
    String str1 = "A";
    String str2 = new String("a");
    String str3 = "";
    String str4 = null;
}
```

---

### 문자열 합치기

Java에서 문자열을 합치는 방법은 크게 두 가지다:

1. Concatenation: 문자열과 문자열 사이에 "+" 연산자를 사용해 합친다.
2. Concat: String 클래스의 `concat` 메소드를 이용해 합친다.

