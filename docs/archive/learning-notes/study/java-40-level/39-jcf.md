---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 39
title: JCF
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

JCF(Java Collection Framework)는 JAVA의 주요 자료형으로, 기본 배열을 바탕으로 만들어진 데이터 구조다. 이 JCF는 Iterator가 구현되어 있어, 순차적으로 자료를 처리할 수 있다.

---

### JCF의 특징

1. JAVA의 기본 자료형 중 하나다.
2. 기본 배열을 기반으로 구현되었다.
3. Iterator가 구현되어 있어, 자료를 순차적으로 처리할 수 있다.
4. 과거에는 Vector를 사용했었다.

---

### JCF 인터페이스의 특징

1. Set
   - 중복과 순서가 없다.
   - Iterator를 이용해 데이터를 처리한다.
   - 다른 자료형에 비해 빠르다.

2. List
   - 데이터가 추가됨에 따라 자동으로 공간이 늘어난다.
   - 데이터가 제거되면 인덱스가 자동으로 조정된다.

3. Map
   - key와 value의 쌍으로 데이터를 저장한다.
   - 다른 자료형에 비해 속도가 느리다.
   - key 값을 알아야 데이터를 사용할 수 있다.

<img class="cdn-img" id="java-40-level-JCF.png">