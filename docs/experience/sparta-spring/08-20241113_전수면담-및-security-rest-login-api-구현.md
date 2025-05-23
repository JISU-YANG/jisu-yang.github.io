---
layout: note_series
parent: SPARTA 일일 회고
chapter: 8
title: 20241113_전수면담 및 Security Rest Login Api 구현
toc: true
nav_exclude: true
---

## 전수면담
튜터님과 1:1 전수면담을 가졌다. 사전에 작성한 문서를 토대로 질문과 답변을 이어나갔다. 용기를 많이 얻을 수 있게 된 것 같다.

### QnA
**Q1.** 개발자는 다른 직업에 비해 새로운 기술을 계속해서 배워야 하고,
코어 언어나 개발론 같은 심도있는 지식도 필요한데,
양과 질 적인 부분을 모두 챙겨야하는 부담은 어떻게 관리하시나요?

**A1-1.** 디테일을 중요하게 생각하는 개발자도 필요하고, 기술 습득을 중시하는 개발자도 필요합니다. 
다양한 커리어 패스가 있으니, 취업 후 주변의 개발자분들을 참고하여 자신에게 맞는 커리어 패스를 정하시면 좋겠습니다.

**A1-2.** 머리가 맑아야 하므로 수면을 잘 취하고 운동을 하는 것이 도움이 됩니다. 
특히 자세를 유지하는 데 좋은 운동은 장기적으로 도움이 되기 때문에 추천드립니다.

---

**Q2.** 무례한 면접관에 대한 멘탈 관리는 어떻게 하셨나요?

**A2-1.** 급하게 대답하려 하지 말고, 생각할 시간을 충분히 가지는 것이 좋습니다. 
여유롭게 텀을 두고 대답해도 괜찮고, 시간이 더 필요할 것 같으면 “고민해보고 답변드려도 될까요?”라고 말하는 것도 방법입니다. 
면접관의 태도를 보며 이 회사에서 일할지 결정하는 것도 나쁘지 않습니다. 어차피 합격하면 같이 일하게 될 사람입니다.

**A2-2.** 면접을 학습의 장으로 생각해 보는 것도 좋습니다. 
무례한 면접관에게도 배울 점이 있을 수 있으며, 면접 연습을 하듯 다양한 회사를 지원하며 경험을 쌓는 것도 방법입니다. 
원하는 수준의 회사에 지원하기 전에 조금 낮은 수준의 회사부터 지원하여 연습해 보는 것도 좋은 전략입니다. 
그러다보면 좋은 회사를 만날 수도 있으니까요.

---

**Q3.** 더 훌륭한 개발자와 협업할때 조급해지지 않으려면 어떻게 해야 할까요?

**A3.** 회사나 개인 프로젝트를 진행할 때, 완전히 동일한 기술 스택과 같은 수준의 사람을 만나는 경우는 드뭅니다. 
오히려 그들에게서 배울 수 있는 기회로 생각하고 이용하는 것이 좋습니다.

---

### 회사 선택 시 고려할 점
신입으로 입사하면 모든 것이 새롭고 배워야 할 것이 많기 때문에 회사 규모와 관계없이 적응이 어려울 수 있습니다. 
경험의 폭을 넓히기 위해 스타트업에서 일해 보는 것도 좋은 선택입니다.

연봉 수준이 높지 않다면 신입 교육이 잘 되어 있고 개발 문화가 잘 갖춰진 회사를 선택하는 것도 중요합니다. 
첫 직장에서 형성된 습관이 오랫동안 영향을 미칠 수 있기 때문입니다. 
사수의 유무, 의견을 표현하기 어려운 수직적인 문화인지 등을 따져보는 것도 좋은 방법입니다.

---

## 팀 회의 안건

1. 1차 필수 기능 완료 기한 변경
2. PR에 대한 코드리뷰 고정 시간
    1. 스크럼 끝나고
    2. 퇴실시간기준
    3. 10:00 ~ 10:30
3. 과반수 이상 approved, merge 진행
4. 1PR n커밋 규칙으로 변경

---

## Security를 사용한 로그인 API 구현
Security와 JWT를 적용해 로그인 API를 만드는 과정에서, 
공부했던 사전강의와 다르게 API 서버 환경에서 Security를 어떻게 적용해야 할지 감이 오지 않았다. 
특히 인증과 인가 처리에서 컨트롤러와 필터의 역할을 혼동하여 어려움을 겪었다.

기존에 학습했던 내용은 화면단이 있는 경우를 기준으로 구성되어 있어, 
API 서버에 맞게 Security를 커스터마이징하는 부분에서 헷갈리는 지점이 많았다. 
Security의 필터 단계를 통해 JWT 토큰을 생성하고 헤더에 담아 인증을 처리하는 방식까지는 이해했지만, 
그 다음 단계를 어떻게 분리하고 구현할지 명확하지 않았다. 여러가지 시도를 하느라 시간을 너무 많이 소요해 튜터님을 찾아갔다.
그리고 튜터님께 조언을 구하면서 전달이 잘 되지 않는 것으로 보아 내가 문제를 잘못 정의하고 있다는 것을 깨닫게 되었다.

---

### 튜터님 피드백
튜터님께서 Security 기반 로그인 API 플로우를 다시 설명해 주셨다.

1. 지정한 엔드포인트에서 사용자가 id, pw를 통해 인증을 요청하면, 성공 시 JWT 토큰을 응답으로 전달한다.
2. 이후 클라이언트는 API 호출 시 헤더에 JWT 토큰을 담아 인증 요청을 보내며, 서버에서는 토큰 기반으로 사용자에 대한 검증을 수행한다.
3. 이렇게 검증된 사용자 정보로 API 기능에 접근할 수 있게 된다.

그리고 Security 도입의 목적은 인증, 인가에 있어서 설정해야할 것들이 너무 많아서 보안에 대한 엔드포인트를 제한해야할 때 사용한다.

---

### 참고 자료와 구현 방법
우연히 [Security를 사용한 REST API LOGIN 구현](https://padosol.tistory.com/69) 포스팅을 발견해, 
레퍼런스를 참고하여 커스텀 구현체를 사용해보았다. 구현을 마치고 사용되지 않게된 레거시 코드를 정리하려다가, 
기존에 구현하려 해놓았던 `UsernamePasswordAuthenticationFilter에서` 대부분 지원된다는 사실을 알게 되었다.

- AccessDeniedHandler
- AuthenticationFailureHandler
- AbstractAuthenticationProcessingFilter
- AuthenticationProvider
- AuthenticationSuccessHandler
- AbstractAuthenticationToken

그래서 UsernamePasswordAuthenticationFilter는 이미 인증을 위한 필터와 관련된 로직이 구현되어 있었다. 
이 필터가 로그인 API의 주요 역할을 수행하고 있었기 때문에, API라고 해서 컨트롤러에서 모든 로직을 처리해야 한다는 고정관념을 버릴 필요가 있었다.

---

### API 완성
Security의 UsernamePasswordAuthenticationFilter가 인증과 로그인을 위한 필터 역할을 완전히 수행한다는 점을 깨달으면서, 
successfulAuthentication과 unsuccessfulAuthentication 메서드를 오버라이드하여 응답 객체의 핸들링을 추가적으로 구현했다. 
덕분에 로그인 기능이 정상 작동하였고, 필요했던 API를 완성할 수 있었다.

---

### 회원가입 API가 403 Forbidden 처리되는 이슈 해결
회원가입 API에서 `403 Forbidden` 오류가 발생하는 문제를 겪었다. 원인은 Security Config에서 **허용 순서** 때문이었다.

**원인분석**  

```java
// 모든 요청은 인증이 필요하도록 설정
authorizeHttpRequests.requestMatchers("/api/**").authenticated();
```
```java
// 회원가입과 로그인 API에 대해서는 인증 없이 접근할 수 있도록 설정
authorizeHttpRequests.requestMatchers("/api/auth/**").permitAll();
```

분명히 필요한 설정이 다 추가되어있다. 하지만 `403 Forbidden`이 발생한다.

**해결 방법**

```java
// 회원가입과 로그인 API에 대해서는 인증 없이 접근할 수 있도록 설정
authorizeHttpRequests.requestMatchers("/api/auth/**").permitAll();

// 그 외 모든 요청은 인증이 필요하도록 설정
authorizeHttpRequests.requestMatchers("/api/**").authenticated();
```

순서를 바꿔 허용할 경로를 먼저 설정한 후 인증이 필요한 경로를 정의했더니 문제가 해결되었다.
특히나 설정과 같은 부분에서는 순서가 중요하다는 것을 다시 한번 깨달았다.