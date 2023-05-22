---
layout: note_series
parent: Note
series: Hello GitHub
chapter: 4
title: Branch Merge
toc: true
reference:
  1: 
    author: 호눅스
    year: 2020
    platform: Inflearn
    content: Git과 GitHub 시작하기
    content-link: https://www.inflearn.com/course/git-and-github/dashboard
---

### 합병 (Merge)

합병은 헤드 브랜치에서 특정 커밋을 기준으로 이루어진다. 이 과정은 주로 두 개의 다른 브랜치에서 작업한 내용을 통합할 때 사용한다.

---

### Fast-Forward Merge

Fast-Forward Merge는 아래와 같은 조건을 만족할 때 발생한다:

1. 헤드 브랜치에서 어떤 변경사항도 없다.
2. 병합하려는 브랜치가 헤드 브랜치에서 분기되었다.

이런 경우에는 매우 쉽게 병합이 가능하다. 그리고 병합 후의 상태는 마치 A에서 A'로 직접 이동한 것처럼 보인다.