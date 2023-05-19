---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 35
title: Memory
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

자바 메모리는 크게 Method Area, Stack, Heap의 세 영역으로 나뉜다.

---

### 메소드 영역(Method Area)

메소드 영역에는 정적 필드(Static)와 메소드(Method)가 저장된다.

- Static: 클래스 변수로써, 모든 인스턴스가 공유한다.
- Method: 클래스가 가진 메소드가 저장된다.

이 영역의 특징은 다음과 같다.

1. 애플리케이션이 실행될 때 가장 먼저 할당된다.
2. 한 번만 할당되며, 프로그램이 종료될 때까지 유지된다.

---

### 스택(Stack)

스택 영역에는 지역 변수, 연산의 중간 결과 등이 저장된다.

- Value: 실제 값이 저장된다.
- 연산: 연산의 중간 결과가 저장된다.
- 변수명: 지역 변수의 이름이 저장된다.

이 영역의 특징은 LIFO(Last In First Out) 방식으로 동작한다는 것이다.

---

### 힙(Heap)

힙 영역에는 객체와 생성자가 저장된다.

- 생성자: 객체를 생성하는 데 사용된다.
- 객체: 인스턴스가 저장된다.

이 영역의 특징은 가비지 컬렉션(Garbage Collection)에 의해 더 이상 참조되지 않는 객체가 정리된다는 것이다.

---

### 메모리의 특징

자바 메모리의 특징은 다음과 같다.

1. 하위 클래스가 생성되기 전에 상위 클래스가 먼저 생성된다.
2. 하위 클래스를 호출하면 상위 클래스의 메소드가 먼저 실행된다.
3. 생성된 객체의 주소는 부모 객체의 주소와 같다.
4. 클래스에 정의된 공개 메소드만 사용 가능하다.

![Memory Image](/docs/archive/note/source/%EB%A9%94%EB%AA%A8%EB%A6%AC.png)


