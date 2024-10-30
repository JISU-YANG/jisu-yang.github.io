---
layout: note_series
parent: Learning Notes
study: Docker+CICD
chapter: 2
title: GitHub Actions의 이해
toc: true
reference:
  1:
    author: 이현구
    year: 2023
    platform: 스파르타코딩클럽
    content: Docker + CI/CD
    content-link: https://spartacodingclub.kr/
---

## CI/CD 파이프라인
### GitHub Actions란?
`GitHub Actions`는 GitHub에 내장된 CI/CD 도구이다.  
GitHub과의 통합이 쉬우며, CI/CD 서버가 내장되어 별도의 서버 구축이 필요 없다. 
일정 수준까지 무료로 제공되며, 필요한 Actions 파일을 `repository`의 `.github/workflows` 디렉토리에 `yaml` 형식으로 작성한다.

---

### GitHub Actions의 CI
테스트를 통과한 코드만 `develop` 및 `main` 브랜치에 `merge`되도록 하여 오류를 방지하고, 안정적인 코드 배포와 빠른 버그 발견이 가능하다.

- `develop` 브랜치에 `merge`된 경우 `gradle test`를 진행한다.
- `feature/**` 브랜치가 `push`된 경우, `gradle test`를 진행한다.
- `gradle test`가 실패한 경우 알림을 보내 개발자에게 코드를 수정하도록 안내한다.

---

### GitHub Actions의 CD
배포를 자동화하여 빠르고 간편하게 배포를 진행한다.

1. `main` 브랜치에 코드가 통합된 경우 운영 환경에 신속하게 배포할 수 있게 한다.
2. `main` 브랜치의 코드를 기준으로 `jar` 파일을 생성한다.
3. 생성된 `jar` 파일을 특정 환경(AWS, GCP 등)에 배포한다.

---

### GitHub Actions 뜯어보기
**Workflow**  
- 최상위 개념으로 여러 `Job`으로 구성되며, `Event`에 의해 트리거될 수 있는 자동화 프로세스.
- `Workflow` 파일은 `YAML`로 작성되고, GitHub Repository의 `.github/workflows` 폴더에 저장된다.

---

**Event**  
- `push`, `pull request open`, `issue open`, 특정 시간대 반복(`cron`) 등의 규칙에 의해 `workflow`를 실행(`trigger`)한다.

---

**Runner**  
- `Github Action Runner` 앱이 설치된 VM으로, `Workflow`가 실행될 인스턴스. 각 `Job`은 개별적인 `runner`에서 실행된다.

---

**Job**  
- 하나의 `runner`에서 실행될 여러 `step`의 모음.

---

**Step**  
- 실행 가능한 하나의 `shell script` 또는 `action`.

---

**Actions**  
- `Workflow`의 가장 작은 단위로, 재사용이 가능하다. `Job`을 만들기 위해 여러 `Step`들을 연결하여 구성한다.

---

### 전체 흐름 예시
1. 개발자는 `feature/`로 시작하는 브랜치를 만들어 `test` 코드를 포함한 수정 작업을 완료한 뒤 `Pull Request` 생성.
2. (자동화) `Pull Request`를 만들면 해당 브랜치에 대해 `gradle test`를 수행.
3. `Pull Request` 코드의 `test`가 실패한 경우, `Pull Request`를 생성한 개발자가 `test` 코드를 수정하여 `Pull Request`를 변경.
4. `Pull Request` 코드의 `test`가 성공하면, 다른 개발자들의 승인을 기다림.
5. 다른 개발자들은 `Pull Request`의 코드를 승인하거나 댓글로 소통.
6. (자동화) `main` 브랜치에 `merge`되면 해당 브랜치를 `cloudtype` 서버에 배포.