---
layout: note_shorts
parent: Learning Notes
category: Git
title: GitFlow 전략
toc: true
content-link: https://andy-archive.tistory.com/38
---

## GitFlow 전략
프로젝트의 기능과 목적에 따라 다양한 브랜치를 사용하여 작업을 체계적으로 관리할 수 있다. 이 전략은 개발 과정을 효율적으로 분류하여 각 단계별로 명확한 역할과 책임을 부여한다.

## 1. 주요 브랜치
### Main (또는 Master)
- 사용자에게 배포 가능한 상태만을 관리하는 브랜치이다.
- 안정적이고 검증된 코드만이 포함된다.

### Develop
- 다음 출시 버전의 기반을 형성한다.
- 기능 개발과 버그 수정을 위한 주요 브랜치로 활용된다.

## 2. 보조 브랜치
### Feature
- 새로운 기능 개발이나 버그 수정을 위해 Develop 브랜치에서 분기한다.
- 각 기능의 개발이 완료되면 Develop 브랜치로 병합되고 삭제된다.
- 예시: `feature/기능명`, `feature/{issue-number}-{feature-name}`

### Release
- 배포 전 최종 작업을 수행하는 브랜치이다.
- 버그 수정, 문서 작업 등 배포와 직접적으로 관련된 작업을 수행한다.
- 예시: `release-1.0`, `release-RB_1.0`

### Hotfix
- 배포된 버전에서 긴급 수정이 필요할 때 Master 브랜치에서 분기하는 브랜치이다.
- 긴급 수정 후에는 Master 및 Develop 브랜치로 병합된다.
- 예시: `hotfix-1.0`

## 3. 작업 흐름 예시

<img class="cdn-img" id="gitflow-흐름도.png">

이러한 구조를 통해 팀은 개발과정을 명확하게 관리하며, 각 단계에서 발생할 수 있는 이슈를 적절하게 해결할 수 있다.