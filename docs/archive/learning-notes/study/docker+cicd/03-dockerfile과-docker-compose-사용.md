---
layout: note_series
parent: Learning Notes
study: Docker+CICD
chapter: 3
title: Dockerfile과 Docker Compose 사용
toc: true
reference:
  1:
    author: 이현구
    year: 2023
    platform: 스파르타코딩클럽
    content: Docker + CI/CD
    content-link: https://spartacodingclub.kr/
---

## Dockerfile로 나만의 Docker Image 만들기
### Dockerfile이란?
`Dockerfile`을 이용해 앱 실행에 필요한 모든 것을 담고 있는 `Docker Image`를 만들 수 있다.  
누구나 `Dockerfile`을 보고 똑같은 앱 환경을 쉽게 만들고, 앱을 자동으로 빌드할 수 있다.

---

### Dockerfile 명령어

| **명령어**       | **설명**                                               | **예시**                                                         |
|------------------|--------------------------------------------------------|------------------------------------------------------------------|
| **FROM**        | 베이스 Image를 지정                                    | `FROM ubuntu:22.04`                                             |
| **MAINTAINER**  | Dockerfile 작성자 정보를 입력                            | `MAINTAINER naebaecaem <nbcamp@spartacoding.co>`                |
| **LABEL**       | Image에 메타데이터 추가                                | `LABEL purpose='nginx test'`                                    |
| **RUN**         | Image 생성 시 실행할 명령어 입력                        | `RUN apt update && apt upgrade -y && apt autoremove && apt autoclean` |
| **CMD**         | Container 생성 시 실행할 명령어                           | `CMD ["nginx", "-g", "daemon off;"]`                            |
| **ENTRYPOINT**  | Container 시작 시 실행할 명령어                           | `ENTRYPOINT ["npm", "start"]`                                   |
| **ENV**         | 환경 변수 설정                                          | `ENV STAGE staging`                                             |
| **WORKDIR**     | 작업 디렉토리 지정                                      | `WORKDIR /app`                                                  |
| **COPY**        | 파일을 Image에 복사                                    | `COPY index.html /usr/share/nginx/html`                         |
| **USER**        | Container 기본 사용자를 설정                              | ```docker\nRUN ["useradd", "user"]\nUSER user\n```             |
| **EXPOSE**      | Container에서 노출할 포트를 지정                          | `EXPOSE 80`                                                     |


---

### Docker CLI 명령
**Docker Image 생성**
```bash
docker buildx build -t my-nginx:latest .
docker build -t my-nginx:latest . # 위 명령이 실행되지 않는 경우 실행
```

---

**Container 실행**
```bash
docker run -d -p 80:80 my-nginx:latest
```

---

**Container 종료**  
```bash
docker stop my-nginx
```

---

## Docker Compose로 여러 개의 Container를 한번에 관리하기
### Docker Compose 사용하는 이유
사용하면 여러 Container를 쉽게 관리하고, 자동으로 설정하고, 확장하며 보안을 강화할 수 있다.

- **설정의 편리함**: 여러 Container 설정을 한 파일에 작성해 한 번에 관리 가능
- **자동 배포**: Docker Compose가 설정 파일을 기반으로 Container를 생성하고 실행
- **의존성 관리**: Container 간 의존 관계에 따라 자동으로 실행 순서 관리
- **모니터링과 로깅**: Container 상태와 로그 모니터링이 가능
- **확장성**: 여러 Container를 그룹으로 관리
- **네트워크 연결**: `docker-compose.yaml`에 정의된 애플리케이션은 같은 네트워크에서 쉽게 통신 가능

---

### Docker Compose를 사용하는 곳
**개발 환경**  
`docker compose up` 명령으로 모든 필요한 서비스를 한 번에 시작할 수 있다.

---

**자동화된 테스트 환경**  
Compose 파일로 테스트 환경을 정의해 쉽게 생성 및 제거 가능
```bash
docker compose up -d
./run_tests
docker compose down
```

---

**단일 호스트 배포**  
`Docker Compose`는 주로 개발과 테스트에 사용되지만, 운영 환경에도 사용할 수 있다.

---

### Yaml file
사람이 읽기 쉬운 설정 파일 형식으로 `Docker Compose`에서 여러 Container 설정을 한 곳에 모아 관리하는 데 유용하다.

---

## Docker 모니터링 & 로깅
### Docker 모니터링
Docker에서 모니터링은 Container가 어떻게 돌아가고 있는지 지켜보는 과정이다. 
Container의 성능, 사용 중인 자원(예: CPU나 메모리), 네트워크 사용량 같은 것들을 확인할 수 있다.
자원 사용량을 통해 Container의 성능 문제를 발견하고 해결할 수 있다. 

---

**docker stats**  
Container 모니터링의 시작점
`docker stats`는 Docker에서 제공하는 간단한 모니터링 도구로, CPU, 메모리 사용량 등을 실시간으로 볼 수 있다.

---

**htop**  
`htop`는 리눅스 시스템을 모니터링하는데 사용되는 강려한 도구이다. 
CPU, 메모리 사용량 같은 정보를 실시간으로 볼 수 있다. 
프로세스를 쉽게 확인하고 종료할 수있다. 그래픽과 간단한 조작으로 쉽게 사용할 수 있다.

```bash
docker run --name test-tools -ti -d ubuntu:22.04

docker exec -ti test-tools /bin/bash
apt update; apt upgrade -y; apt install htop -y;
htop
exit

# 디스크 사용량 확인
docker exec -ti test-tools /bin/bash 
df -h # 전체 디렉토리
du -sh # 현재 디렉토리
du -h --max-depth=1 # 한 단계 아래 디렉토리

exit
```

---

### Container 로깅
Docker는 모든 Container 로그를 표준 출력(stdout) 또는 표준 에러(stderr)로 캡처하여 JSON 형식으로 파일에 기록한다.
Ubuntu에서는 `/var/lib/docker/containers/[ContainerID]/[ContainerID]-json.log`에 로그가 기록된다.


```bash
docker run --name logs-test --rm -d ubuntu:22.04 /bin/bash -c 'while true; do date; sleep 1; done'

# logs-test Container의 로그를 전체 출력하기
docker logs logs-test

# logs-test Container의 로그를 tailing하기
docker logs -f logs-test

# 마지막 10줄부터 로그를 계속 보기
docker logs -f --tail 10 logs-test

# 로그 파일 설정 확인하기
docker inspect logs-test --format "{{.LogPath}}"
```
