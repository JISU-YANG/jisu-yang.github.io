---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 7
title: Import
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

### 임폴트(Import)

임폴트는 클래스의 맨 위에 사용해서 필요한 API의 위치를 명확하게 알려주는 역할을 한다. 이로써 프로그램은 필요한 API가 어디에 있는지 알 수 있게 된다.

---

### 임폴트(Import)의 예시

예를 들어, 기본 자료형들은 'java.lang' 패키지 아래에 위치한다. 이를 보여주는 예시로는 'java.lang.Integer'가 있다. 또한, 유용한 도구들은 'java.util' 패키지에 위치하며, 'java.util.Random'이 그 예시이다.

---

### 임폴트(Import)의 예외

대부분의 경우에는 선언부에서 패키지 위치를 명시적으로 표시하지만, 특정 경우에는 표시하지 않는 경우도 있다.

첫 번째, 같은 패키지에 있는 클래스를 사용할 때는 위치를 표시하지 않는다.

두 번째, 자주 사용되는 클래스들, 예를 들어 'java.lang.String'과 같은 클래스는 위치를 표시하지 않는 경우가 많다. 이런 클래스들은 사용 빈도가 아주 높기 때문에, 코드를 간결하게 유지하기 위해 위치를 생략하는 경우가 많다.
