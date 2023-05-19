---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 13
title: Method
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

### 메서드란?

메서드는 프로그램의 특정 기능을 수행하는 코드의 묶음이다. 프로그램의 실행 흐름을 구성하는 핵심적인 요소이다.

---

### 메서드의 필수 요소

메서드를 정의하는 데는 몇 가지 필수적인 요소가 필요하다.

1. **접근 제한자(Access Modifier)**: 메서드의 접근 가능 범위를 지정한다.
  - public
  - protected
  - default
  - private
2. **리턴 타입(Return Type)**: 메서드가 반환하는 값의 데이터 타입을 지정한다.
3. **메서드명(Method Name)**: 메서드를 호출할 때 사용하는 이름을 지정한다.
4. **블록(Block)**: 메서드가 수행할 코드를 담는 영역을 지정한다.

---

### 메서드의 옵션 요소

메서드 정의에는 필수적인 요소 외에도 추가적으로 포함할 수 있는 요소들이 있다:

1. **static/non-static**: 메서드가 클래스 로드 시에 메모리에 할당되는지(static) 아니면 객체 생성 시에 메모리에 할당되는지(non-static)를 지정한다.
2. **아규먼트 (Arguments)**: 메서드에 전달될 값들의 타입과 순서를 지정한다.
3. **파라미터 (Parameter)**: 메서드 내부에서 아규먼트를 사용하기 위한 변수를 지정한다.
