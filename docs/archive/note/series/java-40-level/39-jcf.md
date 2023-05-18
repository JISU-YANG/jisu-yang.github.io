---
layout: note_series
parent: Note
series: Java 40 Level
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

### JCF(Java Collection Framework)의 특징
1. JAVA의 자료형(Data Type)이다.
2. 기본 배열을 기반으로 만들었다.
3. Iterator가 구현되어 있다.
4. 과거에는 Vector를 사용했었다.

### 인터페이스 별 특징
1. Set
   - 중복과 순서가 없다.
   - Iterator을 이용한다.
   - 가장 빠르다.
2. List
   - 값이 늘어남에 따라 공간이 늘어난다.
   - 값이 지워지면 index가 당겨진다.
3. Map
   - key, value -> xml, json
   - 느리다.
   - key 값을 모르면 사용할 수 없다.

![JCF Image](/Source/JCF.png)