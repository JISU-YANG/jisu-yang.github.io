---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 24
title: Switch
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

Switch문은 '선택 조건문'이라고도 불린다. 아래에서 switch문의 특징과 기법에 대해 알아보자.

---

### Fall-throw 기법

Fall-throw 기법에 대해 이해하면 다음과 같다.

1. 값이 일치하는 case부터 break를 만날 때까지 코드가 계속 실행된다.
2. 값에 해당하는 case가 없으면 default가 실행된다.

---

### Switch문의 특징

Switch문은 아래와 같은 특징을 가진다:

1. Key와 case value의 타입이 같아야 하며 값이 필요하다.
2. JDK 1.6에서 사용할 때는 반드시 정수만을 사용한다.
3. JDK 1.7부터는 String 타입도 사용할 수 있다.
4. 1:1 매핑이기 때문에 범위를 조건으로 하는 if문과 대체가 불가능하다.

