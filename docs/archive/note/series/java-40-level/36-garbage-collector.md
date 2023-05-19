---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 36
title: Garbage Collector
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
### 객체의 생성과 삭제

1. 자바에서는 메모리의 힙(Heap) 영역에 객체가 생성된다.
2. 더 이상 사용하지 않는 객체는 가비지 컬렉터의 삭제 대상이 된다.

---

### 가비지 컬렉터의 역할

가비지 컬렉터는 다음과 같은 작업을 수행한다:

1. 삭제 대상이 되는 객체가 스택(Stack)에 묶여있지 않은지 확인한다.
2. 확인 과정이 끝난 후, JVM은 가비지 컬렉터를 작동시켜 메모리에서 객체를 제거한다.

---

### 가비지 컬렉터의 특이사항

가비지 컬렉터는 다음과 같은 특성을 가진다:

1. `java.lang.System.gc()`를 통해 가비지 컬렉터를 실행시킬 수 있다. 하지만, 이는 JVM이 결정하므로 항상 작동하는 것은 아니다.
2. `java.lang.finalize()` 메소드는 객체가 삭제되기 전에 호출된다. 그러나 Java 9 버전 이상에서는 `java.lang.ref.Cleaner()`가 대체하였다.