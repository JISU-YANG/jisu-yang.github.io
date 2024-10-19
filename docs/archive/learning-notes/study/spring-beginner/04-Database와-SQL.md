---
layout: note_series
parent: Learning Notes
study: Spring Beginner
chapter: 4
title: Database와 SQL
toc: true
reference:
  1: 
    author: Eric 튜터, Jinny 튜터, Jen 튜터
    year: 2024
    platform: 스파르타코딩클럽
    content: Spring Master 1주차
    content-link: https://online.spartacodingclub.kr/
---

### 데이터베이스 (DB)
데이터를 모아 저장하는 집합체이다.  
이 데이터를 관리하고 운영하는 소프트웨어가 **DBMS**(Database Management System)이다.  
**RDBMS**(Relational Database Management System)는 관계형 데이터베이스로, 데이터를 열과 행을 가진 **테이블** 형식으로 저장하며, 이 테이블이 데이터 저장의 기본 단위가 된다.

---

### SQL
RDBMS에서 데이터를 관리하고 조작하기 위해 사용하는 언어이다. 세 가지 유형으로 나뉜다.

- **DDL**(Data Definition Language)  
  데이터베이스의 구조를 정의하는 데 사용된다. 테이블, 인덱스, 스키마 생성, 변경, 삭제 작업이 포함된다.
- **DCL**(Data Control Language)  
  데이터에 대한 접근 권한을 제어하는 데 사용된다. 사용자 권한 부여 및 회수 작업 등이 포함된다.
- **DML**(Data Manipulation Language)  
  테이블의 데이터를 조회하거나 조작하는 데 사용된다. 데이터를 삽입, 수정, 삭제, 검색하는 작업이 해당된다.

---

### JDBC
Java 애플리케이션과 데이터베이스를 연결해주는 역할을 한다.  
JDBC는 데이터베이스 간의 호환성을 위해 표준 인터페이스를 제공하며, 각 데이터베이스 제공사에서 이 표준을 따르는 JDBC 드라이버를 제공한다. 
이를 통해 특정 DBMS에 종속되지 않고 코드 수정 없이 다른 데이터베이스로 전환할 수 있다.

---

### Spring JDBC
Spring Framework에서 제공하는 JDBC의 확장으로, 반복적인 코드를 줄이고, 데이터베이스와의 상호작용을 간편하게 만들어주는 도구이다. 
**JDBC 템플릿**을 사용하면 코드 간결화뿐만 아니라 트랜잭션 관리와 예외 처리도 자동으로 처리된다.

---

## 실습자료
### GitHub
- [SQL 연습하기](https://github.com/JISU-YANG/study-spring-memo/commit/0383d8df0675fae4a0a6d5deda6e69c9d4cbe9ba)
- [JDBC Template 적용](https://github.com/JISU-YANG/study-spring-memo/commit/efa8d06a763fc4ea111aab8448485ebb3333ef61)