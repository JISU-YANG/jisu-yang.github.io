---
layout: note_shorts
parent: Learning Notes
category: Database
title: DISTINCT와 GROUP BY
toc: true
---

### 비교: `DISTINCT`와 `GROUP BY`

- `DISTINCT`
  - 중복된 값을 제거하고 유일한 값만 조회한다.

- `GROUP BY`
  - 특정 컬럼의 값들을 기준으로 데이터를 그룹화하고 조회한다.

---

### 공통점

- `DISTINCT`와 `GROUP BY`는 모두 중복된 값을 제거한다는 공통점이 있다.

---

### 차이점

- `DISTINCT`는 기본적으로 정렬 기능을 포함하지 않는다.
- 반면에 `GROUP BY`는 정렬 기능이 포함된다.

하지만 데이터베이스 제공업체들은 사용자들의 요청에 따라 `GROUP BY`에 포함된 정렬 기능을 제외하는 방법을 제공한다.

- MySQL에서는 `GROUP BY` 절 다음에 `ORDER BY NULL`을 사용하면 정렬 기능을 끌 수 있다.
- Oracle은 10g R2부터 `GROUP BY`에 기본적으로 포함된 정렬 기능을 제거했다.

---

### 추가 기능

- `DISTINCT`
  - 서브쿼리를 줄일 수 있다.

- `GROUP BY`
  - 집계 함수를 사용할 수 있다.

참고로 MySQL에서는 `DISTINCT`를 사용하면 `SELECT` 절의 모든 컬럼에 적용된다.
