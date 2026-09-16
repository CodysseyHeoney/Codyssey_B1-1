# 1단계 개인 학습 정리: 웹페이지 구조 이해하기

> 제출용이 아닌 개인 학습용 문서입니다.
> 이번 단계에서 배운 내용을 잊었을 때 다시 확인하기 위한 기본 정리입니다.

## 1. 웹페이지를 구성하는 세 가지 역할

```text
index.html       → 내용과 구조
css/style.css    → 화면 디자인
js/main.js       → 사용자 행동에 따른 동작
```

브라우저는 먼저 HTML을 읽어 페이지의 구조를 만들고, 연결된 CSS를 적용해 화면을 꾸밉니다. 그 다음 JavaScript가 버튼 클릭, 입력, API 호출 등의 동작을 처리합니다.

## 2. 용어 정리

| 용어 | 의미 |
|---|---|
| HTML | 웹페이지의 내용과 구조를 작성하는 언어 |
| CSS | HTML 요소의 색상, 크기, 간격, 배치를 정하는 언어 |
| JavaScript | 웹페이지가 사용자 행동에 반응하도록 만드는 언어 |
| `index.html` | 웹사이트에 접속했을 때 기본으로 열리는 시작 페이지 |
| `style.css` | CSS 규칙을 모아두는 스타일 파일 |
| `main.js` | 주요 JavaScript 동작을 작성하는 파일 |
| 태그 | HTML에서 요소의 종류와 구조를 표시하는 문법 |
| 속성 | 태그에 추가 정보를 지정하는 값. 예: `id`, `class`, `alt` |
| `div` | 특별한 의미 없이 여러 요소를 묶는 일반적인 상자 |
| 시맨틱 HTML | 영역의 역할이 드러나는 의미 있는 HTML 태그를 사용하는 방식 |
| 앵커 링크 | 같은 페이지의 특정 `id` 영역으로 이동하는 링크 |
| 프로젝트 카드 | 프로젝트 하나의 이름, 설명, 기술, 링크 등을 묶어 보여주는 작은 UI 영역 |

## 3. 시맨틱 태그의 역할

```text
header  → 페이지 또는 영역의 머리말
nav     → 주요 이동 메뉴
main    → 페이지의 핵심 내용
section → 하나의 주제로 묶인 영역
article → 독립적으로 의미를 가지는 콘텐츠 하나
footer  → 페이지 하단 정보와 링크
```

시맨틱 태그를 사용하면 태그 이름만으로도 문서 구조와 영역의 역할을 이해할 수 있습니다. 검색엔진, 스크린 리더, 다른 개발자가 페이지를 해석하기도 쉬워집니다.

## 4. 이 포트폴리오의 기본 구조

```text
header
└─ nav: 메뉴 링크

main
├─ section#hero: 첫 인사말과 CTA 버튼
├─ section#about: 자기소개와 프로필 이미지
├─ section#skills: 기술 목록
├─ section#projects: 프로젝트 카드 목록
└─ section#contact: 문의 폼

footer: 저작권과 소셜 링크
```

각 `section`에 `id`를 붙이면 네비게이션에서 앵커 링크로 이동할 수 있습니다. 예를 들어 `href="#about"`은 `id="about"`인 영역으로 이동합니다.

## 5. 프로젝트 카드 이해하기

GitHub API에서 저장소 여러 개를 가져오면 저장소 하나마다 프로젝트 카드 하나를 생성합니다.

```text
GitHub 저장소 1 → 프로젝트 카드 1
GitHub 저장소 2 → 프로젝트 카드 2
GitHub 저장소 3 → 프로젝트 카드 3
```

카드 하나는 독립적인 프로젝트 정보를 담으므로 HTML에서는 `article`로 표현할 수 있습니다. 실제 카드의 동적 생성은 API 연동 단계에서 진행합니다.

## 6. 이번 단계에서 만들지 않는 것

- CSS 디자인과 반응형 레이아웃
- 다크 모드와 햄버거 메뉴 동작
- 폼 유효성 검사
- GitHub API 호출
- 프로젝트 카드의 동적 생성

이 단계에서는 위 기능을 위한 HTML 구조와 파일 연결만 준비합니다.

## 7. `head`와 `body`의 순서

HTML 문서는 일반적으로 다음 순서로 작성합니다.

```text
html
├─ head: 문서 설정과 외부 파일 연결
└─ body: 브라우저 화면에 표시할 실제 내용
```

`head`에는 문자 인코딩, 모바일 화면 설정, 브라우저 탭 제목, CSS 파일 연결, JavaScript 파일 연결 등을 작성합니다. 이 영역의 내용은 대부분 웹페이지 화면에 직접 표시되지 않습니다.

`body`에는 사용자가 실제로 보는 제목, 문장, 메뉴, 이미지, 버튼, 폼 같은 화면 콘텐츠를 작성합니다.

```html
<head>
  <title>My Portfolio</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/main.js" defer></script>
</head>

<body>
  <header>화면에 보이는 페이지 상단</header>
  <main>화면에 보이는 핵심 내용</main>
</body>
```

따라서 이번 프로젝트의 기본 흐름은 `head`에서 화면을 표시하기 위한 환경을 설정한 뒤, `body`에 실제 포트폴리오 내용을 작성하는 것입니다. `defer`가 적용된 JavaScript는 HTML 문서를 읽는 것을 방해하지 않고, 문서 해석이 끝난 뒤 실행됩니다.

## 8. `header`, `nav`, `main`, `section#hero`의 관계

현재 페이지 구조는 다음과 같습니다.

```text
body
├─ header
│  └─ nav
│     ├─ MY PORTFOLIO 링크
│     └─ About / Skills / Projects / Contact 링크
│
└─ main
   └─ section#hero
      ├─ 인사말
      ├─ 이름
      ├─ 자기소개
      └─ 프로젝트·연락처 이동 링크
```

`header`와 `main`은 서로 안에 들어가는 관계가 아니라 `body` 바로 아래에 나란히 있는 영역입니다. `nav`는 `header` 안에 들어가 페이지 이동 메뉴를 담당하고, `section#hero`는 `main` 안에 들어가 첫 화면의 실제 콘텐츠를 담당합니다.

메뉴 링크는 내용을 직접 담는 것이 아니라, `href`에 지정한 `id`가 있는 영역으로 이동시킵니다.

```html
<nav>
  <a href="#hero">MY PORTFOLIO</a>
</nav>

<main>
  <section id="hero">
    <h1>Your Name</h1>
  </section>
</main>
```

여기서 `href="#hero"`와 `id="hero"`가 서로 연결됩니다. 따라서 메뉴 링크와 Hero 내용은 같은 위치에 작성되는 것이 아니라, 메뉴는 `header`의 `nav`에 작성하고 실제 Hero 내용은 `main`의 `section`에 작성합니다.

`Hero`는 HTML 태그 이름이 아니라 첫 화면의 대표 소개 영역을 부르는 이름입니다. 이 영역에는 인사말, 이름, 자기소개, 프로젝트나 연락처로 이동하는 CTA 링크가 들어갑니다.

## 9. 이미지의 `alt` 속성

`alt`는 `alternative text`의 줄임말로, 이미지가 무엇인지 설명하는 대체 텍스트입니다.

```html
<img src="images/Cookie.png" alt="Cookie 프로필 이미지">
```

- `src`: 이미지 파일의 위치
- `alt`: 이미지의 의미를 설명하는 문장

`alt`가 필요한 이유는 다음과 같습니다.

1. 이미지가 로드되지 않을 때 대체 설명을 보여줄 수 있습니다.
2. 스크린 리더가 이미지의 내용을 사용자에게 읽어줄 수 있습니다.
3. 이미지가 페이지에서 어떤 의미를 갖는지 전달할 수 있습니다.

프로필 이미지처럼 의미가 있는 이미지는 `alt`에 구체적인 설명을 작성합니다. 단순한 장식 이미지처럼 의미가 없는 이미지라면 `alt=""`로 둘 수 있습니다.

이 과제에서는 모든 이미지에 의미 있는 `alt`를 작성해야 하므로, Cookie 이미지도 `alt="Cookie 프로필 이미지"`처럼 작성합니다. `alt`는 현재 `requirement.md`의 직접적인 질문보다는 미션 PDF의 이미지 필수 요구사항 및 최종 기능 점검과 연결됩니다.

## 10. Skills 목록과 `ul`·`li`

Skills 섹션은 배우고 있거나 사용할 수 있는 기술을 목록으로 보여주는 영역입니다.

```html
<section id="skills">
  <h2>Skills</h2>

  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</section>
```

- `section`: Skills라는 하나의 주제 영역
- `h2`: 페이지 안에서 두 번째 수준의 섹션 제목
- `ul`: `unordered list`의 줄임말로, 순서가 중요하지 않은 목록
- `li`: `list item`의 줄임말로, 목록 안의 항목 하나

기술의 순위나 진행 순서가 중요하지 않으므로 `ol`이 아니라 `ul`을 사용합니다. 각 기술은 목록의 독립적인 항목이므로 `li`로 감쌉니다.

## 11. Skills에 작성한 세 가지 언어

### HTML

웹페이지의 내용과 구조를 작성하는 언어입니다. 제목, 문장, 이미지, 메뉴, 폼 같은 요소를 HTML 태그로 표현합니다.

### CSS

HTML로 만든 구조의 화면 디자인을 정하는 언어입니다. 색상, 글자 크기, 간격, 배치, 반응형 레이아웃 등을 담당합니다.

### JavaScript

사용자의 행동에 따라 웹페이지가 동작하도록 만드는 언어입니다. 버튼 클릭, 입력 검사, 스크롤 반응, GitHub API 호출 등을 처리합니다.

세 언어의 관계는 다음과 같습니다.

```text
HTML       → 무엇을 보여줄지와 구조
CSS        → 어떻게 보일지
JavaScript → 어떻게 동작할지
```

## 12. `id`와 `class`

`id`는 HTML 요소 하나에 붙이는 고유한 이름표입니다.

```html
<section id="about">
  <h2>About Me</h2>
</section>
```

`id`는 페이지 안의 특정 영역으로 이동하거나 JavaScript에서 해당 요소를 찾을 때 사용합니다.

```html
<a href="#about">About으로 이동</a>
```

```js
const aboutSection = document.querySelector('#about');
```

`class`는 여러 요소를 같은 그룹으로 묶을 때 사용하는 이름입니다.

```html
<section id="about" class="content-section"></section>
<section id="skills" class="content-section"></section>
```

```text
id    = 요소 하나를 구분하는 고유 이름
class = 여러 요소에 반복해서 붙이는 그룹 이름
```

## 13. `article`과 독립적인 콘텐츠

`article`은 하나만 떼어내도 그 자체로 이해할 수 있는 독립적인 콘텐츠를 나타냅니다. 블로그 글, 뉴스 기사, 댓글, 프로젝트 카드 등이 예가 될 수 있습니다.

```html
<section id="projects">
  <h2>Projects</h2>

  <article class="project-card">
    <h3>Project Preview</h3>
    <p>프로젝트 설명</p>
  </article>
</section>
```

```text
section#projects = 프로젝트 전체를 묶는 주제 영역
article          = 프로젝트 하나의 독립적인 콘텐츠
div              = 특별한 의미 없이 요소를 묶는 일반 상자
```

`article`을 사용한다고 화면이 자동으로 달라지는 것은 아닙니다. 콘텐츠의 의미와 문서 구조를 HTML에 분명하게 표현하는 효과가 있습니다.

## 14. JavaScript의 `const`

`const`는 JavaScript에서 값을 저장할 이름을 선언하는 문법입니다.

```js
const projectsContainer = document.querySelector('#projects-container');
```

위 코드는 `projectsContainer`라는 이름으로 특정 DOM 요소를 기억해두는 뜻입니다. `const`로 선언한 변수는 다른 값으로 다시 대입할 수 없습니다.

```js
const name = 'Cookie';
// name = 'Other'; // 다시 대입할 수 없음
```

값이 나중에 바뀌어야 하는 경우에는 `let`을 사용합니다.

```js
let currentTheme = 'light';
currentTheme = 'dark';
```

이 과제에서는 오래된 `var` 대신 `const`와 `let`만 사용합니다.

## 15. 스크린 리더 사용자와 접근성

스크린 리더는 화면의 글자와 HTML 구조를 음성 또는 점자로 전달하는 프로그램입니다. 시각장애인이나 화면을 직접 보기 어려운 사용자가 주로 사용합니다.

스크린 리더는 시맨틱 태그와 접근성 속성을 바탕으로 페이지를 다음처럼 해석할 수 있습니다.

```text
헤더
내비게이션
링크 About
메인
섹션 About Me
Cookie 프로필 이미지
```

그래서 다음 요소들이 중요합니다.

- `header`, `nav`, `main`, `section`: 영역의 역할 전달
- `h1`, `h2`: 제목 구조 전달
- `alt`: 이미지 설명 전달
- `label`: 입력창의 의미 전달
- `aria-live`: 동적으로 바뀐 내용 전달

## 16. Contact 폼의 HTML 구조

Contact 섹션은 방문자가 이름, 이메일, 메시지를 입력할 수 있는 문의 영역입니다.

```html
<section id="contact">
  <h2>Contact</h2>

  <form id="contact-form">
    <div>
      <label for="name">Name</label>
      <input id="name" name="name" type="text" required>
      <small id="name-error"></small>
    </div>

    <div>
      <label for="email">Email</label>
      <input id="email" name="email" type="email" required>
      <small id="email-error"></small>
    </div>

    <div>
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <small id="message-error"></small>
    </div>

    <button type="submit">Send Message</button>
    <p id="form-status" aria-live="polite"></p>
  </form>
</section>
```

### 주요 요소의 역할

- `form`: 여러 입력 요소를 하나의 문의 양식으로 묶습니다.
- `input`: 한 줄짜리 값을 입력받습니다.
- `textarea`: 여러 줄의 메시지를 입력받습니다.
- `button type="submit"`: 폼 제출을 실행합니다.
- `label`: 입력창의 의미를 설명합니다.
- `small`: 각 입력창 가까이에 오류 메시지를 표시할 공간입니다.
- `form-status`: 제출 성공 또는 상태 안내를 표시할 공간입니다.

### `label`과 `for`·`id` 연결

```html
<label for="email">Email</label>
<input id="email" name="email" type="email">
```

`label`의 `for` 값과 입력 요소의 `id` 값이 같아야 서로 연결됩니다. 사용자가 라벨을 클릭해도 입력창이 선택되고, 스크린 리더도 이 입력창이 이메일 입력란임을 알 수 있습니다.

### `required`와 입력 타입

- `required`: 값을 비워둔 채 제출할 수 없도록 하는 필수 입력 설정
- `type="email"`: 이메일 입력에 적합한 입력 타입

이 설정들은 HTML 단계의 기본 안내 역할을 합니다. 과제에서 요구하는 즉각적인 오류 메시지, `input` 이벤트 처리, `submit` 이벤트 처리는 이후 JavaScript 단계에서 구현합니다.

## 17. Footer와 외부 링크

`footer`는 페이지 전체 또는 특정 영역의 하단 정보를 담는 시맨틱 태그입니다. 이 포트폴리오에서는 `main`이 끝난 뒤 페이지 전체의 Footer를 배치합니다.

```html
<footer>
  <p>&copy; 2026 Your Name</p>
  <a href="https://github.com/your-username">GitHub</a>
</footer>
```

- `footer`: 저작권, 작성자 정보, 관련 링크 같은 하단 정보 영역
- `&copy;`: HTML에서 저작권 기호 `©`를 표시하는 문자 표현
- `a`: 다른 페이지나 외부 사이트로 이동하는 링크
- `href`: 링크가 이동할 주소

현재 GitHub 주소는 임시값인 `your-username`을 사용합니다. 나중에 실제 GitHub 사용자명으로 교체합니다.

Footer는 페이지의 핵심 본문인 `main`과 구분되는 공통 하단 영역이므로 `main` 안에 넣지 않고 `body` 아래에 배치합니다.

## 18. 전체 HTML 구조 지도

세부 태그를 보기 전에 페이지 전체가 어떤 큰 영역으로 나뉘는지 먼저 파악합니다.

```text
HTML 문서
├─ head
│  ├─ 문서 설정
│  ├─ CSS 파일 연결
│  └─ JavaScript 파일 연결
│
└─ body
   ├─ header
   │  └─ nav: 로고와 페이지 이동 메뉴
   │
   ├─ main
   │  ├─ section#hero: 첫 화면 소개
   │  ├─ section#about: 자기소개와 프로필 이미지
   │  ├─ section#skills: 기술 목록
   │  ├─ section#projects: 프로젝트 카드 영역
   │  └─ section#contact: 문의 폼
   │
   └─ footer: 저작권과 GitHub 링크
```

HTML을 작성할 때는 먼저 `header`, `main`, `footer` 같은 큰 영역을 나눈 다음, 각 영역 안에 필요한 제목·문장·이미지·링크·폼을 배치합니다. 현재 프로젝트의 `index.html`은 이 큰 구조를 먼저 완성한 상태입니다.

## 19. 전체 CSS 구조 지도

CSS도 속성을 무작정 작성하지 않고, 화면의 큰 영역과 공통 규칙부터 정한 뒤 세부 스타일로 내려갑니다.

```text
style.css
├─ 1. 기본 설정
│  ├─ CSS 변수(:root)
│  ├─ 기본 여백 초기화
│  └─ 공통 글꼴·색상·배경
│
├─ 2. 공통 레이아웃
│  ├─ 페이지 너비
│  ├─ section 공통 간격
│  └─ 제목·링크·버튼 기본 스타일
│
├─ 3. header와 nav
│  └─ Flexbox로 로고와 메뉴 배치
│
├─ 4. main 내부 영역
│  ├─ Hero 배치
│  ├─ About 이미지와 글 배치
│  ├─ Skills 목록 배치
│  ├─ Projects 카드 Grid
│  └─ Contact 폼 배치
│
├─ 5. footer
│  └─ 하단 정보 배치
│
├─ 6. 상태와 시각 효과
│  ├─ hover
│  ├─ transition
│  ├─ box-shadow
│  └─ 다크 모드 변수
│
└─ 7. 반응형 규칙
   ├─ 기본 모바일 스타일
   ├─ 768px 태블릿 스타일
   └─ 1024px 데스크톱 스타일
```

HTML이 “무엇이 있는가”를 정한다면 CSS는 그 HTML을 “어떻게 보이게 할 것인가”를 정합니다. 따라서 CSS를 작성할 때도 HTML의 큰 구조와 같은 순서로 접근하면 두 파일의 연결 관계를 이해하기 쉽습니다.

## 20. 앞으로의 학습 순서

각 기술을 다음 순서로 학습하고 구현합니다.

```text
전체 구조 파악
  ↓
큰 영역의 역할 이해
  ↓
해당 영역의 기본 스타일 구현
  ↓
세부 속성 설명과 적용
  ↓
화면 확인
  ↓
다음 영역과 연결
```

예를 들어 `header`를 다룰 때는 먼저 `header`와 `nav`의 역할 및 HTML·CSS에서의 위치를 확인합니다. 그 다음 Flexbox의 개념을 설명하고, 마지막으로 `display`, `justify-content`, `align-items` 같은 세부 속성을 적용합니다.

이 방식은 HTML과 CSS를 따로 만든 뒤 마지막에 합치는 방식이 아니라, 전체 구조를 유지한 채 같은 구조를 기준으로 두 파일을 함께 발전시키는 방식입니다.

## 21. 구조를 설명할 때 함께 확인할 위치

앞으로 새로운 구조를 배울 때는 요소의 의미만 설명하지 않고, 전체 구조 안에서 어디에 위치하는지도 함께 확인합니다.

```text
전체 위치
body
└─ main
   └─ section#projects
      └─ article.project-card
```

예를 들어 `article`을 설명할 때는 “독립적인 콘텐츠를 나타내는 태그”라고만 하지 않고, 이 프로젝트에서는 `body → main → section#projects` 안에 프로젝트 카드로 들어간다는 위치까지 함께 기록합니다.

이를 통해 다음 세 가지를 함께 파악합니다.

- 이 요소가 전체 문서에서 어느 영역에 속하는가?
- 이 요소 안에는 어떤 세부 요소가 들어가는가?
- 이 요소는 주변 요소와 어떤 부모·자식 관계를 가지는가?

앞으로 HTML 구조와 CSS 구조를 설명할 때마다 이 위치 정보를 기본으로 포함합니다.

## 22. `body` 기본 스타일 설정

`body` 기본 스타일은 CSS의 전체 페이지 기본 설정 단계에서 작성합니다. `body`는 화면에 표시되는 모든 콘텐츠의 부모 요소이므로, 페이지 전체에 공통으로 적용할 속성을 설정하기에 적합합니다.

```css
body {
  margin: 0;
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-main);
  line-height: 1.5;
}
```

### 속성별 의미

- `margin: 0`: 브라우저가 기본으로 넣는 바깥 여백을 제거합니다.
- `background-color`: 페이지의 배경색을 지정합니다.
- `color`: 페이지의 기본 글자색을 지정합니다.
- `font-family`: 페이지의 기본 글꼴을 지정합니다.
- `line-height: 1.5`: 문장 줄 사이의 간격을 지정합니다.

색상과 글꼴은 `:root`에서 정의한 CSS 변수를 `var(...)`로 가져와 사용합니다.

```css
:root {
  --color-background: #f7f5f0;
  --color-text: #292929;
  --font-main: Arial, sans-serif;
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-main);
}
```

`body`에 지정한 글꼴과 글자색은 별도로 덮어쓰지 않는 자식 요소에게 기본값으로 전달됩니다.

```text
body의 기본 글꼴·글자색
  ↓
header, main, section, footer에 적용
```

이렇게 하면 페이지 전체의 공통 스타일을 한 곳에서 관리할 수 있습니다.

## 23. `header`와 `nav`의 Flexbox 배치

HTML 구조에서의 위치는 다음과 같습니다.

```text
body
└─ header
   └─ nav
      ├─ 로고 링크
      └─ ul
         └─ li 메뉴들
```

CSS에서는 `header > nav`를 선택해 `header`의 바로 아래에 있는 `nav`만 배치합니다.

```css
header > nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}
```

- `display: flex`: `nav`의 자식 요소를 Flexbox 방식으로 배치합니다.
- `align-items: center`: 자식 요소를 세로 방향 가운데에 맞춥니다.
- `justify-content: space-between`: 로고와 메뉴를 가로 양쪽 끝으로 벌립니다.
- `min-height: 72px`: 내비게이션의 최소 높이를 정합니다.

`header > nav`에서 `>`는 바로 아래 자식 요소만 선택한다는 뜻입니다. `header` 안에 더 깊게 들어간 모든 `nav`를 선택하는 것과 구분됩니다.

메뉴 목록에도 Flexbox를 적용합니다.

```css
header nav ul {
  display: flex;
  gap: var(--space-medium);
  margin: 0;
  padding: 0;
  list-style: none;
}
```

- `gap`: 메뉴 항목 사이의 간격
- `margin: 0`, `padding: 0`: 브라우저 기본 목록 여백 제거
- `list-style: none`: 목록 앞의 기본 점 제거

이번 단계에서는 Flexbox로 한 줄의 로고와 메뉴를 정렬했습니다. 나중에 Projects 카드에는 행과 열을 함께 다루기 위해 Grid를 적용하고, 두 방식의 차이를 비교합니다.

## 24. 역할별 글꼴 변수

과제에서는 CSS 변수(`:root`)로 폰트를 관리하므로, 글꼴도 역할별 변수로 나눌 수 있습니다.

```css
:root {
  --font-main: "Apple SD Gothic Neo", "Noto Sans KR", sans-serif;
  --font-logo: Baskerville, "Palatino Linotype", Georgia, serif;
  --font-heading: Georgia, serif;
}
```

- `--font-main`: 본문과 내비게이션에 사용하는 글꼴
- `--font-logo`: `HeoNey` 로고에 사용하는 글꼴
- `--font-heading`: 제목에 사용하는 글꼴

글꼴 이름을 쉼표로 여러 개 작성하면 브라우저가 앞의 글꼴부터 확인하고, 설치되어 있지 않으면 다음 글꼴을 사용합니다. 마지막의 `sans-serif`나 `serif`는 해당 계열의 기본 글꼴을 사용하라는 대체값입니다.

```css
body {
  font-family: var(--font-main);
}

header nav > a {
  font-family: var(--font-logo);
}

h1,
h2,
h3 {
  font-family: var(--font-heading);
}
```

이처럼 CSS 변수를 사용하면 역할별 글꼴을 한 곳에서 관리하고, 나중에 글꼴을 바꿀 때 여러 선택자를 각각 수정하지 않아도 됩니다.
