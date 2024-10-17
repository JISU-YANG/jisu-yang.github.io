---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 18
title: JAVA DOC
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

### 메뉴얼

"메뉴얼을 작성한다"는 프로그램을 API 문서로 변환하는 작업을 가리킨다.

---

### JAVA DOC

JAVA DOC은 Java 소스 코드에서 HTML 형식의 문서를 생성하기 위한 문서 생성기다. JDK에는 기본적으로 `javadoc.exe`가 포함되어 있다.

---

### API 주석

API 주석은 `/**`로 시작해 `*/`로 끝난다. 여기에는 작성자, 버전, 매개 변수, 리턴 등에 대한 다양한 태그가 사용된다.

---

### 이클립스 Javadoc 인코딩 설정

이클립스에서는 Javadoc을 생성할 때 VM 옵션을 통해 인코딩 타입을 UTF-8로 설정할 수 있다.

- 이클립스 > export > VM options
- -local ko_KR -encoding UTF-8 -charset UTF-8 -docencoding UTF-8

<img class="cdn-img" id="java-40-level-Eclipse_Javadoc_VMOption.png">

