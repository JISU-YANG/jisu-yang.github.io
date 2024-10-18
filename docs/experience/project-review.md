---
layout: default
title: 프로젝트 회고록
parent: Experience
nav_order: 2
has_children: true
has_toc: false

project_list:
  1:
    years: 2018
    title: "History"
    summary: "약속 관리 노트"
  2:
    years: 2019
    title: "CoinBank"
    summary: "모의 가상화폐 거래소"
  3:
    years: 2019
    title: "AirBooks"
    summary: "도서 관리 프로그램"
  4:
    years: 2019
    title: "Nawa"
    summary: "소모임 중개 서비스"
  5:
    years: 2020
    title: "Hyper"
    summary: "스마트 북마크 서비스"
  6:
    years: 2020
    title: "Blank"
    summary: "자료 수집 챗봇"
  7:
    years: 2020
    title: "Gola"
    summary: "인원 선별 서비스"
  8:
    years: 2021
    title: "Aloha Coupon"
    summary: "커플 쿠폰 앱"
  9:
    years: 2021
    title: "EGO SPACE"
    summary: "프로젝트 관리 서비스"
  10:
    years: 2021
    title: "Darling"
    summary: "커플 다이어리 앱"
  11:
    years: 2022
    title: "NP-Today"
    summary: "스마트 대시보드"
  12:
    years: 2023
    title: "NP-Launcher"
    summary: "북마크 런처 프로그램"
  13:
    years: 2024
    title: "NP-Launcher"
    summary: "북마크 런처 프로그램 v1.1"
---

{% for project in page.project_list reversed %}
{% if tempYear != project[1].years %}
<hr>
<h2 id="{{ project[1].years }}">
{{ project[1].years }}
</h2>
{% endif %}
{%- assign tempYear = project[1].years -%}

<div markdown="1">
- ### [{{ project[1].title }}](./project-review/{{ project[1].years }}-{{ project[1].title | downcase | replace: " ", "-" }})
  {{ project[1].summary }}
</div>
{% endfor %}