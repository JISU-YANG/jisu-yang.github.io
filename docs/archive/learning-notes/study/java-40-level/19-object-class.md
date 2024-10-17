---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 19
title: Object Class
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
### java.lang 패키지

Java의 가장 기본적인 클래스들은 `java.lang` 패키지에 있다. 이 패키지의 클래스들은 명시적인 `import` 표시 없이도 사용할 수 있다.

---

### Object 클래스

모든 클래스는 기본적으로 `Object` 클래스를 상속한다. 이 클래스는 Java의 최상위 클래스로, `Object` 클래스를 상속받게 되면 해시코드를 부여받고 4가지 메소드를 사용할 수 있다.

1. `toString()`: 객체의 기본 값을 String 타입의 인스턴스로 변환한다.
2. `getClass()`: 객체의 패키지 위치를 반환한다.
3. `hashCode()`: 객체의 고유값인 hashCode를 long 타입으로 반환한다.
4. `equals()`: 객체의 주소 값을 비교한다.

---

### System.out.print() 함수

`System.out.print()` 함수를 사용하여 출력하면, 기본 타입과 참조 타입을 구분하여 각각의 값과 주소를 표시한다.

---

### System 클래스

`System` 클래스는 JVM을 핸들링할 수 있는 유일한 클래스다. 로그와 입출력도 담당한다.

