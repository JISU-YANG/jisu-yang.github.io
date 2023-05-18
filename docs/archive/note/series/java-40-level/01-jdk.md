---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 1
title: JDK
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

### JAVA의 적용 영역

JAVA는 다양한 영역에서 활용된다. 대표적으로 다음과 같은 분야에서 활용되는 언어이다.

1. 안드로이드(Android) 애플리케이션(Application) 개발
2. 웹사이트 및 웹 애플리케이션 개발
3. 다양한 응용 프로그램 개발 (관리 시스템, 인디게임 등)

---

### JVM, 자바 가상 머신

JVM은 자바 프로그램을 실행하는 역할을 수행한다. 크게 세 가지 기능으로 나뉘어진다.

- 클래스 로더(Class Loader) : 메모리에 클래스를 적재
- 런타임 데이터 영역(Runtime Data Areas) : 메모리 영역을 관리
- 실행 엔진(Execution Engine) : 소스코드를 해석하고 실행

---

### JRE, 자바 런타임 환경

JRE에는 자바의 기본 문법과 클래스 라이브러리가 포함되어 있다.

- 운영체제(OS)에 독립적으로 실행 가능
- 서버 환경에서는 주로 이것만 요구됨

---

### JDK, 자바 개발 키트

JDK는 JVM과 JRE를 통해 실행하고 작동할 수 있는 자바 프로그램을 개발할 수 있도록 돕는 툴셋이다.

---

### JDK의 다양한 버전과 그 목적

JDK에는 목적에 따라 다양한 버전이 있다.

- ME (Micro)
  임베디드 시스템을 위한 버전
- SE (Standard)
  jar(실행파일), war(웹 애플리케이션)를 위한 버전
- EE (Enterprise)
  서버 개발을 위한 버전

---

### JDK의 버전별 주요 특징

각 JDK 버전에는 특징적인 기능들이 있다.

- 1.6
  - java.util.scanner 클래스 도입
  - System.out.printf() 바인딩 지원
- 1.7
  - 리소스 관리를 위한 try-catch 문법 간소화 (Resource ~ with)
  - Switch 문에서 정수 뿐만 아니라 문자열도 처리 가능
- 1.8
  - 람다식 표현 (Lambda Expression) 도입

---

### JDK 도구들(.jar)

JDK는 다양한 도구들을 제공한다.

- javac.exe (컴파일러, 자바 소스 파일 -> 바이트 코드 변환)
- javap.exe (클래스 파일을 자바 소스코드로 변환)
- jdb.exe (디버깅 도구)
- javaDoc.exe (자동 문서 생성 도구)
