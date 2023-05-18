---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 34
title: Factory Pattern
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

> 어떤 객체를 자동 분기해서 사용하는 것.
> - 반환의 객체를 통일화시켜 같은 메소드로  자식의 메소드를 실행시키는 방법.
> - 반환 타입은 여러개를 만들어 낼 수 없다.
 

### 팩토리 패턴 설계 구조
1. 메인 클래스
2. 자체기능 클래스
   1. 입력 클래스
   2. 예외처리
3. 객체 인터페이스
   1. 추상클래스
      1. 하위클래스
4. 프로세스 실행 클래스