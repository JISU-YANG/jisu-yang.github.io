---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 33
title: Abstract Interface
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
자바의 Abstract와 Interface는 객체지향 프로그래밍에서 중요한 역할을 한다. 둘의 차이점을 이해하는 것은 매우 중요하다.

---

| | Abstract | Interface |
|---|---|---|
|클래스의 종류|일반 클래스|인터페이스 클래스|
|형태|public (abstract) class A{}||
|공통점|상속 강제, 구현 강제||
|키워드|extends|implements|
|멤버 필드|일반 클래스와 동일|자동으로 static, final 처리|
|다중 상속 지원|아니오|예|

---

### 추상 메소드

추상 메소드는 구현되지 않은 메소드를 말한다. 이는 클래스를 상속받는 하위 클래스에서 반드시 구현해야 하는 메소드를 지정하는 데 사용된다.

- 추상 메소드는 메소드 몸체(Block)가 구현되어 있지 않다.
- 추상 메소드는 자동으로 public으로 접근제한자가 설정된다.

추상 메소드의 사용을 통해 클래스의 구현을 강제함으로써 객체 간의 일관성을 유지할 수 있다.
