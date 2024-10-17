---
layout: note_shorts
parent: Learning Notes
category: Database
title: Type과 Concatenation
toc: true
---

### 자주 사용하는 데이터 유형

벤더사마다 차이는 있지만 ORACLE 기준으로 주로 사용하는 데이터 타입은 크게 3가지로 나뉘어진다.

**문자 데이터 타입**

문자 데이터를 저장하는 데에는 주로 다음의 타입이 사용된다.

- `CHAR(index)`
- `VARCHAR2(index)`
  - `VARCHAR`는 최대 4000자, `VARCHAR2`는 최대 8000자까지 지원한다

**숫자 데이터 타입**

숫자 데이터를 저장하는 데에는 주로 `NUMBER (index, 부동소수점)` 타입이 사용된다. 지정한 부동소수점은 총 index에서 제해진다.

**날짜 데이터 타입**

날짜 데이터를 저장하는 데에는 `DATE`와 `TIMESTAMP` 타입이 사용된다.

- `DATE`: 년월일시분초
- `TIMESTAMP`: `DATE` 타입에 밀리초까지 추가로 저장할 수 있다.

---

### 문자열 합치기 (Concatenation)

데이터베이스에서 문자열을 합칠 때는 다음과 같은 방법들이 있다.

- `||` (Oracle)
- `+` (SQL Server)
- `CONCAT(String1, String2)`

### 날짜형 데이터의 연산

날짜형 데이터와 다른 데이터 타입을 연산할 때는 다음과 같이 할 수 있다.

- 날짜형 데이터 + 숫자형 데이터(기본 단위 1일)
- 날짜형 데이터 + 문자형 데이터(숫자형 데이터로 변환이 가능한 경우)
