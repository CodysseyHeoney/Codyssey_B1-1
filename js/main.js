// 3단계-1: 테마 전환

const themeToggle = document.querySelector("#theme-toggle");

// 평가: 테마·메뉴·프로젝트 상태를 하나의 state 객체에서 관리
const state = {
  theme: localStorage.getItem("theme") || "light",
  menuOpen: false,
  projects: [],
  projectsStatus: "idle",
  projectsError: ""
};

// 평가: GitHub API에서 프로젝트 JSON 데이터를 가져와 화면에 표시
// 3단계-4: GitHub API 프로젝트 데이터
const githubApiUrl =
  "https://api.github.com/users/CodysseyHeoney/repos?per_page=100";

const projectsContainer = document.querySelector("#projects-container");
async function loadProjects() {
  // 평가: async/await와 try/catch로 API 성공·실패를 분기
  try {
    state.projectsStatus = "loading";
    const response = await fetch(githubApiUrl);
    if (!response.ok) {
      throw new Error("GitHub 데이터를 불러오지 못했습니다.");
    }

    const repositories = await response.json();
    // 평가: filter로 필요한 저장소만 선택
    const targetRepositories = repositories.filter(
      (repository) =>
        repository.name === "codyssey-mission1" ||
        repository.name === "codyssey-mission2"
    );
    state.projects = targetRepositories;
    state.projectsStatus =
      targetRepositories.length > 0 ? "success" : "empty";

  } catch (error) {
    state.projectsStatus = "error";
    state.projectsError = error.message;
  }
}

function retryProjects() {
  state.projectsStatus = "loading";
  renderProjects();
  loadProjects().then(renderProjects);
}

function renderProjects() {
  // 평가: loading·error·empty·success 상태에 따라 화면 업데이트
  if (state.projectsStatus === "loading") {
    projectsContainer.textContent = "프로젝트를 불러오는 중 ...";
    return;
  }
  if (state.projectsStatus === "error") {
    projectsContainer.innerHTML = `
      <p>프로젝트를 불러오지 못했습니다.</p>
      <button id="projects-retry" type="button">
        다시 시도
      </button>
    `;

    const retryButton = document.querySelector("#projects-retry");
    retryButton.addEventListener("click", retryProjects);

    return;
  }
  if (state.projectsStatus === "empty") {
    projectsContainer.textContent =
      "표시할 프로젝트가 없습니다.";
    return;
  }
  // 평가: map으로 저장소 데이터를 카드 HTML로 변환
  const projectCards = state.projects.map((repository) => {
    const isMission1 = repository.name === "codyssey-mission1";

    const imagePath = isMission1
      ? "images/whale.png"
      : "images/shortcake.png";

    const imageAlt = isMission1
      ? "작업실 꾸미기 프로젝트 이미지"
      : "나만의 퀴즈게임 프로젝트 이미지";

    const imageClass = isMission1
      ? "project-image"
      : "project-image project-image--shortcake";

    return `
      <article class="project-card">
        <img class="${imageClass}" src="${imagePath}" alt="${imageAlt}">
        <h3>${repository.name}</h3>
        <p class="project-stars" aria-label="Stars ${repository.stargazers_count}개">
          ${repository.stargazers_count > 0 ? "★" : "☆"}
        </p>
        <a href="${repository.html_url}">View on GitHub</a>
      </article>
    `;
  });

  // 평가: join과 innerHTML로 카드 배열을 Projects 영역에 표시
  projectsContainer.innerHTML = projectCards.join("");
}

function applyTheme() {
  const isDark = state.theme === "dark";

  if (isDark) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.removeAttribute("data-theme");
  }

  themeToggle.textContent = isDark ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "라이트 모드로 전환" : "다크 모드로 전환"
  );
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", state.theme);
  applyTheme();
}

themeToggle.addEventListener("click", toggleTheme);
applyTheme();

// 3단계-2: Contact 폼 이벤트 연결

// HTML에서 id가 contact-form인 form 요소를 선택합니다.
const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const messageInput = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const formStatus = document.querySelector("#form-status");

// 평가: 필수값과 이메일 형식을 검사해 오류 문구를 업데이트
function validateContactForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageValue = messageInput.value.trim();

  if (nameValue === "") {
    nameError.textContent = "이름을 입력해주세요.";
  } else {
    nameError.textContent = "";
  }
  if (emailValue === "") {
    emailError.textContent = "이메일을 입력해주세요.";
  } else if (!emailPattern.test(emailValue)) {
    emailError.textContent = "올바른 이메일 주소를 입력해주세요.";
  } else {
    emailError.textContent = "";
  }
  if (messageValue === "") {
    messageError.textContent = "메시지를 입력해주세요.";
  } else {
    messageError.textContent = "";
  }
  return (
    nameValue !== "" &&
    emailPattern.test(emailValue) &&
    messageValue !== ""
  );
}

// 폼 제출 이벤트가 발생했을 때 실행할 함수입니다.
function handleContactSubmit(event) {
  // 브라우저의 기본 제출 동작(페이지 새로고침)을 막습니다.
  event.preventDefault();

  if (validateContactForm()) {
    formStatus.textContent = "입력이 완료되었습니다.";
  }
}

// 평가: input 이벤트로 입력 중에도 폼 검증 결과를 즉시 업데이트
function handleContactInput() {
  validateContactForm();
  formStatus.textContent = "";
}

// 평가: onclick 대신 addEventListener로 이벤트와 동작을 분리
// contactForm에서 submit 이벤트를 감지하고 함수를 실행합니다.
contactForm.addEventListener("submit", handleContactSubmit);
[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener("input", handleContactInput);
});

// 3단계-3: 모바일 메뉴 이벤트 연결

// 햄버거 버튼과 모바일 메뉴 목록을 선택합니다.
const menuToggle = document.querySelector("#menu-toggle");
const mainMenu = document.querySelector("#main-menu");
const internalLinks = document.querySelectorAll("a[href^='#']");
const scrollTopButton = document.querySelector("#scroll-top");
// 평가: 스크롤 위치에 따라 헤더 스타일 상태를 변경
const header = document.querySelector("header");
// 평가: reveal 클래스를 가진 섹션들을 IntersectionObserver 대상으로 선택
const revealElements = document.querySelectorAll(".reveal");
// 평가: 섹션이 화면에 들어오면 is-visible 클래스를 추가
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener("scroll", () => {
  // 평가: 스크롤 상태에 따라 맨 위로 가기 버튼 화면 업데이트
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("is-visible");
  } else {
    scrollTopButton.classList.remove("is-visible");
  }

  if (window.scrollY > 60) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 메뉴 열림 상태를 바꾸고 화면과 접근성 속성을 업데이트합니다.
function toggleMenu() {
  state.menuOpen = !state.menuOpen;
  mainMenu.classList.toggle("is-open", state.menuOpen);
  menuToggle.setAttribute("aria-expanded", String(state.menuOpen));
  menuToggle.setAttribute(
    "aria-label",
    state.menuOpen ? "메뉴 닫기" : "메뉴 열기"
  );
}

// 평가: 햄버거 버튼 클릭 이벤트를 addEventListener로 연결
// 햄버거 버튼을 클릭하면 메뉴를 열거나 닫습니다.
menuToggle.addEventListener("click", toggleMenu);

// 평가: 내비게이션 클릭 시 상태 변경 후 smooth scroll 실행
// 열린 메뉴에서 항목을 클릭하면 메뉴를 닫습니다.
internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // HTML 링크에 적힌 href 값을 가져옵니다.
    const targetID = link.getAttribute("href");
    const targetSection = document.querySelector(targetID);
    if (state.menuOpen) {
      toggleMenu();
    }

    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
// 평가: 상태 변경 후 렌더링하고 API 요청을 시작
state.projectsStatus = "loading";
renderProjects();
loadProjects().then(renderProjects);
