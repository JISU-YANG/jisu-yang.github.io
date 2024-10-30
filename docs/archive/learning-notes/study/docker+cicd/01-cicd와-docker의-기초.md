---
layout: note_series
parent: Learning Notes
study: Docker+CICD
chapter: 1
title: CICD와 Docker의 기초
toc: true
reference:
  1: 
    author: 이현구
    year: 2023
    platform: 스파르타코딩클럽
    content: Docker + CI/CD
    content-link: https://spartacodingclub.kr/
---

## CI/CD란 무엇인가?
### CI/CD의 정의
**CI/CD**는 지속적인 통합(Continuous Integration)과 지속적인 제공(Continuous Delivery)을 의미한다.

- **지속적인 통합 (CI)**: 자동화된 빌드와 테스트로 안정적인 코드를 빠르게 제공할 수 있다.
- **지속적인 제공 (CD)**: 자동화된 ** 지속적인 배포**로, 배포 시간을 단축하고 최신 기능을 빠르게 반영한다.

---

## Docker 기초
### Docker를 사용하는 이유
**애플리케이션 개발과 배포의 효율성**  
`Docker Container`는 여러 SW 설치 시에도 **Host OS**에 영향을 주지 않으며, `CI/CD` 통합 과정에서 테스트 도구로도 활용된다.

---

**표준화된 배포 구성**  
컨테이너는 서버 환경에 구애받지 않고 일관되게 실행 가능하다.

---

**높은 독립성과 확장성**  
`Docker`는 가상화의 **사실상 표준**으로 자리 잡았다.

---

## Docker Image 관리
### Docker Image 이해
런타임에 필요한 바이너리, 라이브러리, 설정 등을 포함한 서비스 패키지다.
- **상태 저장 없음**(Stateless): 이미지가 상태를 저장하지 않아 다른 환경에서도 동일한 애플리케이션을 실행 가능하다.
- **불변성**(Immutable): 이미지가 생성되면 변경할 수 없고, 변경 시에는 새 이미지를 만들어야 한다.

---

### Docker Image 구조확인
- `docker pull`: Docker 이미지를 내려 받는다.
- `docker image inspect`: 이미지 구조를 확인한다.
- `docker image history`: 이미지 생성 정보 확인한다.

---

## Docker Container 와 CLI
### Docker Image와 Container의 관계
- **Image**: 컨테이너에 필요한 OS, 라이브러리 정보를 포함한다.
- **Container**: `Image`를 실행한 상태. 하나의 `Image`로 여러 `Container`를 생성 가능하다. (1:N 관계)

---

### Container의 상태
- **Running**: 작동 중
- **Paused**: 일시중지
- **Stopped**: 정지

---

### docker run 자주 사용하는 옵션
- `-d`: 백그라운드 모드.
- `-p`: 호스트와 컨테이너의 포트 연결.
- `-v`: 디렉토리 연결.
- `-e`: 환경변수 설정.
- `-name`: 컨테이너 이름 설정.
- `-rm`: 종료 시 자동 삭제.
- `-ti`: 터미널 입력 옵션.

---

### 실행 중인 Container에 대한 정보
- `docker top node-test`: 컨테이너 프로세스 조회.
- `docker port node-test`: 포트 매핑 조회.
- `docker stats node-test(--no-stream)`: 리소스 통계 출력.

---

### docker logs
- `docker logs node-test`: 표준 출력 및 에러 로그 확인.
- `docker logs –f node-test`: 실시간 로그 출력.

---

### docker exit code
- `0`: 정상 종료.
- `125`: Docker run 명령 실패.
- `127`: Command 발견 실패.
- `137`: `kill -9`로 종료됨.
그 외 exit code는 다양한 종료 원인을 나타냄.

---

## Docker Container를 정리하는 방법
- `docker container ls -a`: 모든 컨테이너 조회.
- `docker container prune`: 실행 중이 아닌 컨테이너 삭제.
- `docker image prune`: 태그 없는 이미지 삭제.
- `docker system prune`: 사용하지 않는 모든 Docker 리소스 삭제.
