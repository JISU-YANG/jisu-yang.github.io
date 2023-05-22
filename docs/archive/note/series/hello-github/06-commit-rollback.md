---
layout: note_series
parent: Note
series: Hello GitHub
chapter: 6
title: Commit Rollback
toc: true
reference:
  1: 
    author: 호눅스
    year: 2020
    platform: Inflearn
    content: Git과 GitHub 시작하기
    content-link: https://www.inflearn.com/course/git-and-github/dashboard
---

### 커밋 되돌리기 (Commit Rollback)

커밋을 이용하면 브랜치의 시점을 되돌릴 수 있다. 이렇게 하면 이전 상태로 복구가 가능하다.

---

### 커밋 되돌리는 방법

커밋을 되돌리는 방법에는 주로 세 가지가 있다.

1. Reset 방법
    - 특정 커밋을 지정하고, 그 커밋으로 헤드 브랜치를 초기화한다.
    - 이 방법은 아주 쉽다.
    - 단, 이전 커밋이 사라질 수 있으며, 강제 push가 필요할 수도 있다.

---

2. Branch 방법
    - 헤드 브랜치로부터 특정 커밋을 기준으로 새 브랜치를 만들어 되돌린다.
    - 이 방법은 내용이 사라지지 않는 장점이 있다.
    - 간단하게 사용할 수 있지만, 브랜치가 많아져 트리가 지저분해질 수 있다.

---

3. Revert 방법
    - 특정 커밋을 지정하여 그 커밋 전 상태로 되돌린다.
    - 이 방법은 가장 기본적이며, 커밋 히스토리를 유지할 수 있다.
    - 이미 Push가 된 상태라면 충돌이 발생할 수 있으며, 여러 개의 커밋을 되돌릴 때는 역순으로 진행한다.
