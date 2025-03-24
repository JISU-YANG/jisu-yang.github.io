---
layout: default
title: Who I am
parent: Introduce
nav_order: 1
---

---

<div class="flex-justify-between mt-2 mb-4" style="display: inline-flex; width:100%">
    <div>
        <img id="profile-image" width="260" />
        <script>
            ImageDeliver
                .id('profile-image')
                .category(PathResource.PROFILE)
                .file('profile_resume.png')
                .delivery();
        </script>
    </div>
    <div style="text-align: right; min-width: 320px">
        <h2>사색하는 개발자, 양지수 입니다.</h2>
        <h3>주니어 백엔드 개발자</h3>
        <h4 class="text-grey-dk-000" style="padding-top: 80px">Last updated: 2025.02.24</h4>
    </div>
</div>

## Contact

<table>
    <tr>
        <td class="fw-500">
            Mail
        </td>
        <td>
            <a href="">jisuyang@kakao.com</a>
        </td>
    </tr>
    <tr>
        <td class="fw-500">
            Blog
        </td>
        <td>
            <a href="https://jisulog.com">https://jisulog.com</a>
        </td>
    </tr>
    <tr>
        <td class="fw-500">
            GitHub
        </td>
        <td>
            <a href="https://github.com/JISU-YANG ">https://github.com/JISU-YANG </a>
        </td>
    </tr>
</table>

---

# Skill.
<table>
    <tr>
        <td class="fw-500">Back-End</td>
        <td style="color:#27262b;">
            <ul>
                <li>Java, Swift</li>
                <li>Spring Boot, Spring MVC, Spring Security, Electron</li>
                <li>Spring Cloud (Eureka, Gateway, OpenFeign, Config, Circuit Breaker)</li>
                <li>Spring Data JPA, Querydsl, Hibernate, MyBatis</li>
                <li>PostgreSQL, MySQL, MariaDB, Oracle, Redis</li>
                <li>Apache Kafka</li>
                <li>Gradle, Maven</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td class="fw-500">DevOps</td>
        <td style="color:#27262b;">
            <ul>
                <li>AWS Route53, S3, EC2, ECS, ECR, RDS</li>
                <li>Docker Compose</li>
                <li>GitHub Actions</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td class="fw-500">Front-End</td>
        <td style="color:#27262b;">
            <ul>
                <li>Javascript</li>
                <li>SwiftUI, HTML/CSS</li>
            </ul>
        </td>
    </tr>
</table>

---

# Introduce.
### 분석적 사고와 체계적인 업무 관리를 추구하는 개발자입니다.

- 최근 부트캠프 팀 프로젝트에서는 짧은 개발 기간 내에 업무를 **세분화**하고, 기간별로 작업을 **배분**하여 목표를 효과적으로 달성했습니다.
- 철저한 **문서화**를 통해 기억력의 약점을 보완함과 동시에 팀 내 불필요한 **소통 오류**와 **의견 충돌**을 줄여, 보다 **유의미한 논의**가 이루어질 수 있도록 기여했습니다.

- 다양한 시각에서 문제에 접근하여 **잠재적 리스크**와 **변수**를 사전에 충분히 고려함으로써, 협업 과정에서 발생한 문제를 **신속하게 진단**하고 **개선 방향**을 제시할 수 있었습니다.

<br>

앞으로도 **기술적 역량**과 **도메인 경험**을 쌓아 사용자에게 **실질적인 가치**를 제공하는 서비스를 개발하며 꾸준히 발전해 나갈 것입니다.

--- 

# Project Experience.
## 레스토랑 예약 및 웨이팅 서비스
{: .d-inline-block }

\: BobJool
{: .text-grey-dk-000 .fs-3 .fw-500 .d-inline-block }

회고
{: .float-right .fs-2 .fw-500 .d-inline-block .mt-8 }
[GitHub](https://github.com/BobJool/Waiting-Reservation-Service)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-8 }
[PPT](https://drive.google.com/file/d/1UnhHUygde0uYlVdyReOCU0HfaCmqfcyC/view?usp=sharing)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-8 }
[브로셔](https://www.notion.so/teamsparta/13-BOBJOOL-c5101bc715c24a7a91a6e881b381f51e)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-8 }

<table style="color:#27262b;">
    <tr>
        <td class="fw-500">
            소개
        </td>
        <td>
            레스토랑 예약 및 웨이팅을 위한 온라인 서비스
        </td>
    </tr>
    <tr>
        <td class="fw-500">
            인원
        </td>
        <td>
            백엔드 개발자 5명(부팀장)
        </td>
    </tr>
    <tr>
        <td class="fw-500">
            사용기술
        </td>
        <td>
            <ul>
              <li>Java, Spring Boot</li>
              <li>Spring Security, JWT</li>
              <li>Spring Cloud (Eureka, Gateway, OpenFeign, Config, Circuit Breaker)</li>
              <li>JPA, QueryDSL, PostgreSQL, Redis</li>
              <li>Apache Kafka, Redis Streams</li>
              <li>Docker Compose, GitHub Actions</li>
              <li>AWS (ECR, EC2, RDS)</li>
              <li>Prometheus, Grafana, Redis-exporter, Zipkin</li>
              <li>Junit5, JMeter</li>
            </ul>
        </td>
    </tr>
</table>

### 주요 역할
- 핵심 서비스인 예약과 웨이팅에서 처리되는 작업과 연결되는 알림 도메인을 구축하여, 사용자에게 핀리하게 진행 상황을 전달
- 발송 내역을 저장하고 QueryDSL 기반의 동적 검색 기능을 도입하여, 운영 시 원하는 알림 내역에 신속하게 접근 가능
- OpenFeign을 활용한 마이크로서비스 통신 구현으로, 개발 기간 단축과 유지보수성을 향상
- 발송 시점과 데이터 최신화 간격을 줄이는 작업을 통해, 오발송 문제를 최소화하였습니다.
- Slack 장애 발생 시 이메일 자동 fallback 처리를 적용하여, 미발송 문제를 완전히 해소하였습니다.

<br>

### 트러블 슈팅 및 고민
<details class="mb-2">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
알림 메시지 템플릿 고도화
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

- **문제**  
  메시지 템플릿이 코드에 하드코딩되어 메시지 수정 시마다 코드 변경과 재배포가 필요해 운영 효율성이 저하되었습니다.
- **해결**  
  데이터베이스 고도화를 통해 템플릿과 데이터를 별도로 분리하여 관리하고, 설정 파일을 활용해 템플릿 ID 매핑 정보를 config 서버에서 외부로 관리함으로써, 코드 변경 없이도 메시지 템플릿의 수정이 가능하고 알림 종류 추가 시에도 용이하도록 개선하였습니다.

</div>
</details>

<details class="mb-2">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
통합 API 도입을 통한 RESTful 설계 준수 및 알림 발송 프로세스 효율성 극대화
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

- **문제**  
  동일 기능을 수행하는 약 10개의 중복 API로 인해 RESTful하지 않은 설계가 발생했고, 각 역할을 별도의 API로 구현하면서 서비스 간 의존성과 중복 로직이 증가하여 코드 복잡성과 네트워크/인프라 비용이 심화되었습니다.
- **해결**  
  단일 통합 API를 도입해 알림 발송 목적과 메시지 데이터를 HTTP Body로 전달받고 내부적으로 각 역할을 모듈화함으로써 RESTful 규약을 준수하며 API 관리 효율성, 코드 재사용성, 유지보수성을 개선하여 전체 알림 발송 프로세스의 효율성과 안정성을 극대화하였습니다.

</div>
</details>

<details class="mb-2">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
대규모 트래픽 처리 개선
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

- **문제**  
  단일 통합 API는 동기식 HTTP 요청에 의존하여 트래픽 급증 시 병목 현상과 알림 발송 실패, 데이터 누락 문제를 야기했습니다.
- **해결**  
  Kafka 기반의 비동기 메시지 처리 시스템을 도입하여 알림 발송 작업을 메시지 큐로 분산시키고, 이를 통해 대규모 트래픽 상황에서도 안정적이고 일관된 처리를 달성하였습니다.

</div>
</details>

<details class="mb-2">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
OpenFeign 인코딩 이슈 해결
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

- **문제**  
  Slack API를 사용해 이메일로 유저 정보를 조회하려 했지만, {"ok":false,"error":"invalid_auth"} 오류가 발생했습니다. OpenFeign을 이용한 HTTP 통신은 IntelliJ .http 테스트에서는 정상적으로 동작했으나, 실제 환경에서는 동일한 문제가 재현되었습니다.
- **해결**  
  HTTP Body를 통해 데이터를 전달하도록 수정하고, Feign Client 설정에서 기본적으로 지원되지 않는 `application/x-www-form-urlencoded` 인코딩을 위해 Spring Form Encoder를 Bean으로 등록하였습니다. 또한, DTO 대신 `Map<String, String>`을 사용하여 직렬화 문제를 해결한 결과, Slack API에서 정상적으로 Slack ID를 응답받을 수 있었습니다.

</div>
</details>

<details class="mb-2">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
Kafka 메시지 미수신 이슈 해결
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

- **문제**  
  Kafka 토픽에 메시지를 추가했음에도 불구하고, 알림 서버에서 JSON 메시지의 Map 바인딩 과정에서 문자열-숫자 타입 매핑 에러와, 전송된 JSON 문자열과 수신 시 이스케이프 문자가 포함된 문자열 간 불일치로 인한 역직렬화 실패가 발생하여 알림 누락 및 데이터 불일치 현상이 나타났습니다.
- **해결**  
  Kafka 메시지를 `NotificationDetailsFactory`에서 전처리하여 양 끝의 따옴표와 이스케이프 문자를 제거한 후, 이를 JSON으로 역직렬화하여 모든 값을 문자열로 변환한 `Map`으로 재구성하였습니다. 이 메타데이터를 `NotificationDetails` 객체로 생성해 활용함으로써 문제를 해결하였습니다.

</div>
</details>

<details class="mb-2">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
Resilience4j 및 서킷브레이커 예외 미감지 해결
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

- **문제**  
  Kafka 에러 핸들러가 예외를 가로채 서킷브레이커까지 예외가 전달되지 않아, AOP 기반 서킷브레이커가 정상적으로 작동하지 않았습니다.
- **해결**  
  Kafka 리스너 컨테이너를 제어하는 `KafkaManager`를 도입하여, 서킷브레이커 상태 전환 시 컨테이너를 일시 중단하거나 재개하도록 처리했고, Slack 메시지 발송 시 실패하면 fallback으로 이메일 발송 로직을 직접 호출하여 안정적인 장애 대응을 구현하였습니다.

</div>
</details>

<br>

## 물류 관리 및 배송 서비스
{: .d-inline-block }

\: FlowMesh
{: .text-grey-dk-000 .fs-3 .fw-500 .d-inline-block }

회고
{: .float-right .fs-2 .fw-500 .d-inline-block .mt-8 }
[GitHub](https://github.com/jv-cc/FlowMesh)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-8 }
[PPT](hhttps://docs.google.com/presentation/d/1SvdKaZVTjNrCk-jVp2XCBDGZxlVnDcele5T0koEzHT0/edit#slide=id.g31ffa8c8750_0_143)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-8 }


<table style="color:#27262b;">
    <tr>
        <td class="fw-500">
            소개
        </td>
        <td>
            B2B 물류의 효율적 운영을 위한 허브 중심 배송 관리 서비스
        </td>
    </tr>
    <tr>
        <td class="fw-500">
            인원
        </td>
        <td>
            백엔드 개발자 3명
        </td>
    </tr>
    <tr>
        <td class="fw-500">
            사용기술
        </td>
        <td>
            <ul>
              <li>Java, Spring Boot</li>
              <li>Spring Security, JWT</li>
              <li>Spring Cloud (Eureka, Gateway, OpenFeign, Config, Circuit Breaker)</li>
              <li>JPA, PostgreSQL</li>
              <li>Swagger</li>
            </ul>
        </td>
    </tr>
</table>

### 주요 역할
- 사용자와 토큰 관련 API 구현
- MSA 환경의 사용자 인증/인가 프로세스 개발
- DDD 패키지 구조와 레이어를 반영해 의존성을 관리하여 코드의 유지보수성과 확장성 향상
- AWS 기반 인프라 설계와 설계도를 작성하여, 클라우드 인프라의 가시성 증가

<br>

### 트러블 슈팅 및 고민

<details class="mb-2">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
Swagger를 도입하여 API 문서 작성
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

- **문제**  
  기존 API 개발에서는 문서화가 미흡해, 클라이언트와 서버 간의 응답 구조에 대한 오해가 발생하고, 디버깅 및 유지보수 시 혼란이 있었습니다.
- **해결**  
  Swagger를 활용하여 @ApiResponse, @ExampleObject 등의 어노테이션으로 구체적인 예시와 샘플 값을 제공함으로써, 각 API의 응답 구조(상태 코드 및 커스텀 에러 코드, 메시지, 데이터 형식 등)를 명확하게 정의하였습니다. 추가로 인터페이스를 별도로 분리하여, 실질적인 컨트롤러 코드와 구분함으로써 코드의 가독성과 유지보수성을 향상시켰습니다.

</div>
</details>


<details class="mb-2">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
Gateway 패턴과 JWT Security 인증/인가 도입
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

- **문제**  
  MSA 환경에서 여러 서비스로 분산된 API 호출을 중앙에서 관리하는 것이 어려웠고, 보안 측면에서도 각 서비스에 대해 개별 인증/인가를 처리하는 방식은 비효율적이었습니다. 또한, 엑세스 토큰의 짧은 유효기간과 보안 취약점으로 인해 토큰 탈취 문제가 우려되었습니다.
- **해결**  
  게이트웨이 패턴을 단일 진입점으로 도입하여 모든 요청을 중앙에서 관리하고, JWT 기반의 Security 인증/인가를 적용했습니다. 토큰을 분석하여 사용자 ID와 역할 정보를 커스텀 헤더에 담아 각 서비스에 전달함으로써, 인증 정보를 손쉽게 공유할 수 있도록 했습니다. 또한, 엑세스 토큰과 별개로 리프레시 토큰을 도입하고, 리프레시 토큰 로테이션을 적용하여 보안을 강화하고 토큰 탈취에 따른 피해를 최소화했습니다.

</div>
</details>

---

# Other Experience.
## Leadership.
### 크루 운영
- 아이디어를 실현하는 프로젝트 네트워크, [EGO CREW](https://ego.so/) 를 2009년부터 리드하고 있습니다.
- 총 19명의 크루원과 다양한 주제로 30번의 프로젝트 및 스터디 활동을 진행하였습니다. 
- 그 중, 8개 프로젝트에서 개발을 담당하였으며, 5개의 서비스는 웹과 앱스토어에 출시할 수 있었습니다.

---

## ETC.
### 애플 공인 스토어
{: .d-inline-block }
\: 제품 판매 및 고객 경험 향상 
{: .d-inline-block .text-grey-dk-000 .fs-2 .fw-500 }
2017.07. ~ 2018.02.
{: .float-right .d-inline-block .text-grey-dk-000 .fs-2 .mt-6 .mb-0 }

- 몇 가지 호기심을 실제로 근무하며 현장에서 데이터를 통해 답을 얻었습니다.
- 앱과 액세서리를 활용하는 다양한 고객 관심사별 제품 사용의 최고의 경험을 꾸준히 고민함으로써, **고객 만족도가 향상**했고 재방문 또는 지인 소개로 이어진 적이 있습니다.
- 체계적인 응대 프로세스를 적용하여 20개의 매장 중 **하루 매출 최고 기록**(5,000만 원, 개인 비중 60%)를 달성해보았습니다.

### 프리랜서 디자이너
{: .d-inline-block }
\: 편집 및 웹 디자인
{: .d-inline-block .text-grey-dk-000 .fs-2 .fw-500 }
2015.12. ~ 2016.12.
{: .float-right .d-inline-block .text-grey-dk-000 .fs-2 .mt-6 .mb-0 }

- 머리 속 아이디어를 시각화해보는 첫 경험이었습니다.
- 브랜딩을 강조하는 디자인으로 **다양한 분야**의 클라이언트와 작업해볼 수 있었습니다.
- 300개 이상의 카테고리에 대한 분류 및 UI를 새롭게 설계하여, 상세 페이지 **도달 시간을 60% 이상 단축**한 디자인으로 공기업 웹디자인 외주를 수주할 수 있었습니다.

---

# Education.
### AI를 활용한 백엔드 아키텍처 심화 과정
<details class="mb-8">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
MSA 아키텍처 대규모 시스템 구축
<div class="float-right d-inline-block text-grey-dk-000 fs-2">팀스파르타 · 2024.10. ~ 2025.01.</div>
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

**K-디지털 트레이닝 단기 심화 과정 수료**  
Java, Spring, JPA, QueryDSL, JWT 등으로 백엔드 개발 및 AI 프로젝트 진행
- MSA (Spring Cloud, Eureka), Redis 캐싱, Apache Kafka 스트림 처리 등 대규모 시스템 구축 경험
- 모니터링 및 보안 코딩, 장애 대응 및 1억건 부하 테스트 실서비스 론칭 프로젝트 수행

</div>
</details>

### 전자정부 표준프레임워크 및 공통컴포넌트 개발자
<details class="mb-8">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
전자정부 프레임워크 교육
<div class="float-right d-inline-block text-grey-dk-000 fs-2">한국정보화진흥원 · 2019.12. ~ 2019.12.</div>
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

**오프라인 교육 이수**  
표준프레임워크 아키텍처, 공통기반 및 데이터처리 환경 구성 경험, 모바일 표준프레임워크 개발 및 실행환경 이해

</div>
</details>

### 응용 프로그램 개발 및 빅데이터 분석 전문가양성 과정
<details class="mb-8">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
웹 애플리케이션 개발
<div class="float-right d-inline-block text-grey-dk-000 fs-2">Korea IT Academy · 2019.06. ~ 2019.12.</div>
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

**국가기간·전략산업 직종훈련 응용SW엔지니어링(NCS) 수료**
- jQuery/JavaScript, JSP/Servlet, Java, Spring Framework, DB 모델링 및 ORM(MyBatis) 활용한 OOP, MVC, IoC/AOP 기반 개발 수행

---

- 정규과정 이외의 시간에 야간과 주말 자율학습을 주도하며 교육을 통해 다른 훈련생들의 학습 발전에 기여하여 선행상 수여받았습니다.

</div>
</details>

### JAVA 단과 교육
<details class="mb-8">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
Java 기초, 실무 활용 기술 교육
<div class="float-right d-inline-block text-grey-dk-000 fs-2">Korea IT Academy · 2019.03. ~ 2019.05.</div>
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

- **기본 개념**  
  JVM, JRE, JDK 이해 및 변수, 형변환, 비트연산을 통한 암호화, 연산자, 제어문, 배열, 메서드, 클래스, 오버로딩, 제어자, 오버라이딩, 상속, 다형성 등 기초 문법 숙지
- **심화 내용**  
  인터페이스, 추상클래스, 마커인터페이스, 예외처리, 내부/익명 클래스, API 활용, JAVA DOC, 제네릭, 컬렉션프레임워크, 소프트웨어 디자인패턴, 쓰레드, 동기화, GUI 및 파일 입출력 등 고급 기능 적용 능력 보유

</div>
</details>

### 컴퓨터 정보과
<details class="mb-8">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
전반 IT 기술 교육
<div class="float-right d-inline-block text-grey-dk-000 fs-2">종로산업정보학교 · 2013.03. ~ 2014.02.</div>
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

**프로그래밍(C), 웹컨텐츠개발(HTML/CSS), 컴퓨터그래픽(PSD, AI), 사무관리실무(데이터베이스) 과목**  
- 창업대회 동상: 스마트폰 배터리 관리를 위한 자동 취침모드/기상모드 전환, 수면유도 App 기획
- 창의아이디어 경진대회 동상: 위치기반 사물추적을 이용한 개인의 소지품 관리를 도와주는 App 기획
- 실기경진대회 우수상

---

- 기능상: 실습시간 조교로 학우들의 실습과 설명을 보조
- 성적우수상: 1년동안 전과목 과내 5등 이상

</div>
</details>

### 과학중점과정

<details class="mb-8">
<summary style="color: #7253ed; text-decoration: underline; text-decoration-color: #eeebee; text-underline-offset: 4px;">
과학, 수학 심화 교육 및 창의 융합 활동
<div class="float-right d-inline-block text-grey-dk-000 fs-2">방산고등학교 · 2011.03. ~ 2014.02.</div>
</summary>
<div markdown="1" class="highlight p-5 mt-5 mb-5" style="border-radius: 6px">

**3년간 과학, 수학 교과에서 총 교과 이수단위의 45%이상 이수**
- 과학 8과목중 7과목 이상( 물리학Ⅰ/Ⅱ, 화학Ⅰ/Ⅱ, 생명과학Ⅰ/Ⅱ, 지구과학Ⅰ/Ⅱ )
- 수학 5과목중 4과목 이상( 수학Ⅰ / 수학Ⅱ / 확률과 통계 / 미적분 / 기하 )

---

- 연간 50시간 이상의 과학체험활동을 창의적 체험활동과 연계
- 과학융합 1과목, 과학교과 심화과목 2과목
- 학교별 특화연구 실시

</div>
</details>
