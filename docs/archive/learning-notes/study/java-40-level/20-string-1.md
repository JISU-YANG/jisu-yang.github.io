---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 20
title: String 1
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
웹에서는 주로 문자열을 다루기 때문에, String 클래스에 대한 이해가 중요하다. 여기서는 주요한 내용들을 살펴본다.

---

### String 클래스의 중요 요소

1. `String` 클래스의 메서드
2. 문자열 분리
3. 문자열 비교
4. 객체 비교

---

### String 클래스의 특징

`String` 클래스는 `java.lang` 패키지에 속해있다. 이 클래스는 다른 클래스에서 `extends` 할 수 없다. 또한, `new` 예약어를 이용한 인스턴스 생성 없이도 인스턴스가 생성된다. 문자열이 합쳐질 때는 'Concatenation'이 발생한다.

---

### String 선언 방법

```java
// 예시 A
String s1 = "예시A";

// 예시 B
String s2 = new String("예시B");
```

String은 'Wrapper Class' 중 하나로, 자동으로 Boxing/Unboxing이 이루어져 값을 가져간다. 하지만 String은 다른 고유 영역에 보관되는 예외적인 경우다. 또한, String은 불변(immutable)한 기본타입의 특징을 가지면서 동시에 변형 가능(mutable)한 참조타입의 성질을 따른다.

---

### Concatenate
'Concatenate'는 문자열과 Object를 합쳐서 문자열로 만드는 기능을 말한다. '+' 연산자를 이용할 때 발생하며, 문자열을 만난 순간 바로 일어난다.