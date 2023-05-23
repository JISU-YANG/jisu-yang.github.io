---
layout: note_shorts
parent: Note
category: Database
title: Tablespace
toc: true
---
### TABLESPACE

`TABLESPACE`는 데이터베이스의 물리적인 공간을 말한다. `TABLE`이나 `ENTITY`를 생성하고, 이들이 속한 `SCHEMA`는 건들지 않는다. 이 정보는 `DBA_DATA_FILES`에 저장되어 있다.

---

### SCHEMA

`SCHEMA`는 데이터베이스의 자료, 표현, 관계구조를 나타내는 껍데기로 생각하면 된다.

---

### TEMPORARY TABLESPACE

`TEMPORARY TABLESPACE`는 연산이나 `SORT` 작업 등에 사용되는 임시 공간이다.

---

### TABLESPACE 관련 쿼리

다음은 `TABLESPACE`와 관련한 쿼리들이다.

**위치확인**
```sql
SELECT FILE_NAME, TABLESPACE_NAME, AUTOEXTENSIBLE FROM DBA_DATA_FILES;
```
**테이블스페이스 생성**
```sql
CREATE TABLESPACE 테이블스페이스이름 DATAFILE '경로/파일이름.dbf' SIZE 200M AUTOEXTEND ON NEXT 5M MAXSIZE 300M;
```
**계정에 기본 테이블 스페이스 지정**
```sql
ALTER USER 계정 DEFAULT TABLESPACE 테이블스페이스명;
```
**임시 테이블 스페이스 선언**
```sql
ALTER USER 계정 TEMPORARY TABLESPACE 임시테이블스페이스명;
```
**DBA, RESOURCE, CONNECT 권한부여**
```sql
GRANT DBA, RESOURCE, CONNECT TO 계정명;
```
**DBA, RESOURCE, CONNECT 권한해제**
```sql
REVOKE DBA, RESOURCE, CONNECT FROM 계정명;
```