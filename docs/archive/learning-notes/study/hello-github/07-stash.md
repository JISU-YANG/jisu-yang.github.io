---
layout: note_series
parent: Learning Notes
study: Hello GitHub
chapter: 7
title: Stash
toc: true
reference:
  1: 
    author: 호눅스
    year: 2020
    platform: Inflearn
    content: Git과 GitHub 시작하기
    content-link: https://www.inflearn.com/course/git-and-github/dashboard
---

### 스태시 (Stash)

스태시는 현재 브랜치의 커밋되지 않은 변경사항을 임시로 저장하고, 다른 브랜치로 이동할 수 있게 해준다.

---

### 스태시 (Stash)의 특징

스태시는 다음과 같은 특징이 있다.

1. 불필요한 커밋을 줄일 수 있다.
    - 작업 중인 내용을 임시로 저장하고, 새로운 작업을 시작할 수 있다.

2. git push --force를 사용할 확률을 줄인다.
    - 커밋하지 않은 변경사항을 임시로 저장하므로, 강제 push를 하지 않아도 된다.

3. 변경된 내용을 스테이지에 올리지 않고 진행할 수 있다.
    - 변경사항을 바로 커밋하지 않고, 나중에 처리할 수 있다.

4. Git에 한번도 올라가지 않은 파일(Untracked File)은 스테이지에 올려야 한다.
    - 처음 생성한 파일은 Git이 인식하지 못하므로, 스테이지에 올려야 한다.

5. 이전 커밋을 덮어쓸 수 있다.
    - 이전의 커밋에 스태시한 내용을 적용할 수 있다.
