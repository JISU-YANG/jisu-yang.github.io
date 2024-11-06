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
                .file('profile_resume.JPG')
                .delivery();
        </script>
    </div>
    <div style="text-align: right; min-width: 320px">
        <h2>사색하는 개발자, 양지수 입니다.</h2>
        <h3>주니어 백엔드 개발자</h3>
        <h4 class="text-grey-dk-000" style="padding-top: 80px">Last updated: 2024.05.29</h4>
    </div>
</div>

<table>
    <tr>
        <td>
            <strong>Contact</strong>
        </td>
        <td>
            <a href="">jisuyang@kakao.com</a>
        </td>
    </tr>
    <tr>
        <td>
            <strong>Blog</strong>
        </td>
        <td>
            <a href="https://jisulog.com">https://jisulog.com</a>
        </td>
    </tr>
    <tr>
        <td>
            <strong>GitHub</strong>
        </td>
        <td>
            <a href="https://github.com/JISU-YANG ">https://github.com/JISU-YANG </a>
        </td>
    </tr>
</table>

---

# Introduce.
머리 속에 있는 것을 눈 앞에 실현하는 것만큼 가슴 설레는 일은 없는 것 같습니다.
만약 그것이 단순히 보이는 것을 넘어 어떠한 기능까지 할 수 있다면 저의 가치로부터 많은 사람들의 라이프 스타일을 향상시킬 수 있다고 생각합니다.

<br>

### 영향력있는 개발자로 성장하기 위한 여정에 있습니다.
- 코드 간의 인과관계를 논리적으로 살펴볼 수 있도록, <u>상황을 분리해 사고</u>합니다.
- 반복 작업은 줄이고 편의성을 높이는 서비스를 개발하는 <u>프로젝트의 경험을 많이 쌓고</u> 있습니다.
- 좋지 않은 기억력 대신, <u>문서화하고 기록된 데이터를 활용</u>하는 것에 익숙해지고 있습니다.
- 사고실험을 통해 다양한 시나리오를 예측하고, 가능한 <u>변수와 리스크를 사전에 최소하도록 고민</u>합니다.


--- 

# Project Experience.
## Server.
### 프로젝트 관리 서비스
{: .d-inline-block }

\: SPACE
{: .text-grey-dk-000 .fs-2 .fw-500 .d-inline-block }

[회고](https://jisulog.com/docs/experience/project-review/2021-ego-space)
{: .float-right .fs-2 .fw-500 .d-inline-block .mt-6 .mb-0 }
[GitHub](https://github.com/egocrew/SPACE)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-6 }
[Demo](https://space.ego.so/)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-6 }



- Spring Boot와 JPA를 사용하여 API 서버를 구축했습니다. 엔티티 연관관계 매핑을 이해하는 중요한 계기가 되었습니다.
- Terminal만으로 AWS EC2 환경에 프로젝트 배포 과정을 진행해보았습니다.


### 스마트 북마크 서비스
{: .d-inline-block }

\: Hyper
{: .text-grey-dk-000 .fs-2 .fw-500 .d-inline-block }

[회고](https://jisulog.com/docs/experience/project-review/2020-hyper)
{: .float-right .fs-2 .fw-500 .d-inline-block .mt-6 .mb-0 }
[GitHub](https://github.com/JISU-YANG/2020_Hyper)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-6 }
[Demo](https://hyper.egoist.im/)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-6 }

- ASCII 코드 기반의 키 값 제한으로 사용자 경험을 개선하고, 키 중복 문제를 해결했습니다.
- 데이터 로직을 스크립트로 이동시키는 시도를 통해 서버 부하를 대폭 감소시켰습니다.


## App.
{: .mt-8 }
### 커플 다이어리 앱
{: .d-inline-block }

\: Darling
{: .text-grey-dk-000 .fs-2 .fw-500 .d-inline-block }

[회고](https://jisulog.com/docs/experience/project-review/2021-darling)
{: .float-right .fs-2 .fw-500 .d-inline-block .mt-6 .mb-0 }
[Demo](https://apps.apple.com/om/app/%EB%8B%AC%EB%A7%81/id1583530907)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-6 }

- 이미지 캐싱, 인터렉션의 아쉬움을 외부 라이브러리를 사용하여 개선했습니다.
- WidgetKit을 사용해 타임라인을 관리하며 위젯을 제작하였습니다.

### 커플 쿠폰 앱
{: .d-inline-block }

\: Aloha Coupon
{: .text-grey-dk-000 .fs-2 .fw-500 .d-inline-block }

[회고](https://jisulog.com/docs/experience/project-review/2021-aloha-coupon)
{: .float-right .fs-2 .fw-500 .d-inline-block .mt-6 .mb-0 }
[Demo](https://apps.apple.com/us/app/%EC%95%8C%EB%A1%9C%ED%95%98-%EC%BF%A0%ED%8F%B0/id1548121101)
{: .float-right .fs-2 .fw-500 .mr-2 .d-inline-block .mt-6 }

- Swift로 비동기 통신과 API를 사용하여 데이터를 관리해보았습니다.
- 3가지 소셜 로그인을 일관된 방식으로 관리할 수 있도록 통합 라이브러리를 만들어 사용하였습니다.

---

# Other Experience.
## Leadership.
### 크루 리더
- 아이디어를 실현하는 프로젝트 네트워크, [EGO CREW](https://ego.so/) 를 2009년부터 리드하고 있습니다.
- 총 19명의 크루원과 다양한 주제로 30번의 프로젝트 및 스터디 활동을 진행하였습니다. 
- 그 중, 8개 프로젝트에서 개발을 담당하였으며, 5개의 서비스는 웹과 앱스토어에 출시할 수 있었습니다.

### 교내 수상
  - **선행상**, 코리아 IT 아카데미, 2019  
    <div class="text-grey-dk-000 fs-2 fw-500 mb-4">
      정규과정 이외의 시간에 <u>야간과 주말 자율학습을 주도하며 교육</u>을 통해 다른 훈련생들의 학습 발전에 기여했습니다.
    </div>

  - **기능상**, 종로산업정보학교, 2013  
    <div class="text-grey-dk-000 fs-2 fw-500 mb-4">
      실습시간에 조교로서 동료 학생들의 <u>평가과 설명 업무를 보조</u>했습니다.
    </div>

  - **정보 통신상**, 가락초등학교, 2008  
    <div class="text-grey-dk-000 fs-2 fw-500 mb-4">
      정보수업 선생님의 지도 아래 <u>수업 환경 조성과 자료 준비</u>를 지원했습니다.
    </div>
---

## ETC.
### 애플 공인 스토어
{: .d-inline-block }
\: 제품 판매 및 고객 경험 향상
{: .d-inline-block .text-grey-dk-000 .fs-2 .fw-500 }
- 몇 가지 호기심을 실제로 근무하며 현장에서 데이터를 통해 답을 얻었습니다.
- 앱과 액세서리를 활용하는 다양한 고객 관심사별 제품 사용의 최고의 경험을 꾸준히 고민함으로써, <u>고객 만족도가 향상</u>했고 재방문 또는 지인 소개로 이어진 적이 있습니다.
- 체계적인 응대 프로세스를 적용하여 20개의 매장 중 <u>하루 매출 최고 기록</u>(5,000만 원, 개인 비중 60%)를 달성해보았습니다.

### 프리랜서 디자이너
{: .d-inline-block }
\: 편집 및 웹 디자인
{: .d-inline-block .text-grey-dk-000 .fs-2 .fw-500 }
- 머리 속 아이디어를 시각화해보는 첫 경험이었습니다.
- 브랜딩을 강조하는 디자인으로 <u>다양한 분야</u>의 클라이언트와 작업해볼 수 있었습니다.
- 300개 이상의 카테고리에 대한 분류 및 UI를 새롭게 설계하여, 상세 페이지 <u>도달 시간을 60% 이상 단축</u>한 디자인으로 공기업 웹디자인 외주를 수주할 수 있었습니다.

---

# Skill.
<table>
    <tr>
        <td><strong>Back-End</strong></td>
        <td>
            <ul>
                <li>Java, Swift</li>
                <li>Spring Boot, Spring MVC, Electron</li>
                <li>Spring Data JPA, Querydsl, Hibernate, MyBatis</li>
                <li>Gradle, Maven</li>
                <li>IntelliJ, Visual Studio Code, Xcode</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>DevOps</strong></td>
        <td>
            <ul>
                <li>MySQL, MariaDB, Oracle</li>
                <li>AWS Route53, S3, EC2</li>
                <li>Tomcat</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td><strong>Front-End</strong></td>
        <td>
            <ul>
                <li>Javascript</li>
                <li>SwiftUI, HTML/CSS</li>
            </ul>
        </td>
    </tr>
</table>

---

# Education.
{: .mb-6 }
- 전자정부 표준프레임워크 및 공통컴포넌트 개발자
  <div class="text-grey-dk-000 fs-2 fw-500 mb-4">19.12 ~ 19.12 · 한국정보화진흥원</div>
- 응용 프로그램 개발 및 빅데이터 분석 전문가양성
  <div class="text-grey-dk-000 fs-2 fw-500 mb-4">19.06 ~ 19.12 · Korea IT Academy</div>
- JAVA 단과 과정
  <div class="text-grey-dk-000 fs-2 fw-500 mb-4">19.03 ~ 19.05 · Korea IT Academy</div>  
- 컴퓨터정보과
  <div class="text-grey-dk-000 fs-2 fw-500 mb-4">13.03 ~ 14.02 · 종로산업정보학교</div>  
- 과학중점 과정
  <div class="text-grey-dk-000 fs-2 fw-500 mb-4">11.03 ~ 14.02 · 방산고등학교</div>




