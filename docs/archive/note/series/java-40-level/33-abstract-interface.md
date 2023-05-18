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

||Abstract|Interface|
|---|---|---|
|클래스|일반 클래스|인터페이스 클래스|
|형태|public (abstract) class A{}||
|공통점|상속강요, 구현강요||
|키워드|extends|implements|
|멤버 필드|일반 클래스와 같다|자동으로 static, final 처리|
|다중 상속|X|O|


### 추상메소드
- Block이 구현되어 있지 않은 메소드
- 자동으로 public으로 접근제한자가 바뀐다.