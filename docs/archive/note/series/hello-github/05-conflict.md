---
layout: note_series
parent: Note
series: Hello GitHub
chapter: 5
title: Conflict
toc: true
reference:
  1: 
    author: 호눅스
    year: 2020
    platform: Inflearn
    content: Git과 GitHub 시작하기
    content-link: https://www.inflearn.com/course/git-and-github/dashboard
---
### 충돌 (Conflict)

병합하는 과정에서 때때로 충돌이 발생한다. 이는 두 브랜치가 동일한 코드 라인을 다르게 수정했을 때 발생한다.

---

### 충돌 (Conflict) 예시

충돌이 발생하는 일반적인 상황은 아래와 같다:

1. 병합 대상인 두 커밋에서 같은 파일을 동시에 수정했다.
2. 이 경우, 병합을 시도할 때 충돌이 발생할 가능성이 높다.

---

### 충돌 (Conflict) 해결

충돌을 해결하는 과정은 아래와 같다:

1. 충돌이 발생하는 로컬 파일을 수정한다.
   - 여기서, 충돌이 생기는 부분 A와 B가 자동으로 표시된다.
2. 수정한 파일을 스테이지에 올린다. 이 때, 나누어져 있던 항목들이 합쳐진다.
3. 최종적으로 커밋을 진행한다.
