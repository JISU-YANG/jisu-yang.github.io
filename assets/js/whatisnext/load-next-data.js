const dataPath = "/docs/profile/next_data.json";

// 데이터를 가져오는 함수
async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetching data failed:", error);
        return null;
    }
}

// HTML 요소 생성 함수
function createElement(tag, className = "", textContent = "", isHTML = false) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) {
        isHTML ? (element.innerHTML = textContent) : (element.textContent = textContent);
    }
    return element;
}

// 개별 작업 항목 생성
function createTaskItem(item) {
    const itemDiv = createElement("div", "next-item");

    const checkbox = createElement("input", "task-list-item-checkbox");
    checkbox.type = "checkbox";
    checkbox.checked = item.status === "완료";
    checkbox.disabled = true;

    const summaryDiv = createElement("div", "next-summary");

    // 링크가 있으면 a 태그로 감싸서 출력, 없으면 텍스트 그대로 출력
    const titleText = item.link
        ? `<a href="${item.link}">${item.title}</a>`
        : item.title;
    const titleDiv = createElement("div", "next-summary-title", titleText, true);
    if (item.status === "중단") {
        titleDiv.style.textDecoration = "line-through";
    }

    const estimatedDiv = createElement("div", "next-summary-item", item.estimated_duration);
    const plannedDateDiv = createElement("div", "next-summary-item", item.planned_date);
    const statusDiv = createElement("div", "next-summary-item", `<b>${item.status}</b>`, true);

    summaryDiv.append(checkbox, titleDiv, estimatedDiv, plannedDateDiv, statusDiv);
    itemDiv.append(summaryDiv);

    return itemDiv;
}

// 카테고리 컨테이너 생성 (활성 작업과 완료/중단 작업 분리, 개수 클릭 시 토글)
function createCategoryContainer(category, tasks) {
    const categoryDiv = createElement("div", "category");

    // h3 요소 생성: 제목과 개수를 별도 요소로 분리
    const h3 = createElement("h3");
    h3.appendChild(document.createTextNode(category + " "));
    const countSpan = createElement("span", "category-count", `(${tasks.length})`);
    h3.appendChild(countSpan);
    categoryDiv.appendChild(h3);

    const activeTasksContainer = createElement("div", "active-tasks");
    const completedTasksContainer = createElement("div", "completed-tasks");
    completedTasksContainer.style.display = "none"; // 기본 숨김

    tasks.forEach(task => {
        const taskItem = createTaskItem(task);
        // "진행" 또는 "예정"은 활성 작업, "완료"/"중단"은 완료 작업으로 분류
        if (task.status === "진행" || task.status === "예정") {
            activeTasksContainer.appendChild(taskItem);
        } else {
            completedTasksContainer.appendChild(taskItem);
        }
    });

    categoryDiv.appendChild(activeTasksContainer);

    // 완료/중단 작업이 있으면, countSpan을 토글 버튼처럼 활용
    if (completedTasksContainer.childElementCount > 0) {
        countSpan.style.cursor = "pointer";
        countSpan.addEventListener("click", () => {
            if (completedTasksContainer.style.display === "none") {
                completedTasksContainer.style.display = "block";
            } else {
                completedTasksContainer.style.display = "none";
            }
        });
        categoryDiv.appendChild(completedTasksContainer);
    }

    return categoryDiv;
}

// 데이터 전체를 통합하여 카테고리별로 렌더링 (년도/분기 헤더 제거)
function createUnifiedHtml(data) {
    const container = createElement("div", "unified-container");

    // 모든 엔트리의 카테고리별 아이템들을 하나로 모음
    const categoryMap = {};

    data.data.forEach(entry => {
        Object.entries(entry.categories).forEach(([category, tasks]) => {
            if (!categoryMap[category]) {
                categoryMap[category] = [];
            }
            categoryMap[category] = categoryMap[category].concat(tasks);
        });
    });

    // 각 카테고리에 대해 컨테이너 생성 후 추가
    Object.entries(categoryMap).forEach(([category, tasks]) => {
        const categoryDiv = createCategoryContainer(category, tasks);
        container.appendChild(categoryDiv);
    });

    return container;
}

// 데이터를 컨테이너에 렌더링
function renderData(container, data) {
    container.innerHTML = "";

    if (!data.data.length) {
        container.innerHTML = "<p>표시할 데이터가 없습니다.</p>";
        return;
    }

    const unifiedHtml = createUnifiedHtml(data);
    container.appendChild(unifiedHtml);
}

// 초기 실행
async function init() {
    const container = document.getElementById("data-container");
    if (!container) {
        console.error("Container not found");
        return;
    }

    const data = await getData(dataPath);
    if (data) {
        renderData(container, data);
    } else {
        container.innerHTML = "<p>데이터를 불러오는 데 실패했습니다.</p>";
    }
}

// 문서가 로드된 후 실행
document.addEventListener("DOMContentLoaded", init);
