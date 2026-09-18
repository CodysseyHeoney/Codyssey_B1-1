# B1-1 평가 대비 답안지

## 항목 1. 기능 동작

### 1-1. 브라우저 창을 줄였을 때 모바일에 맞게 변경되는가?

#### 코드 위치

- `index.html:5` — 모바일 화면 기준 설정
- `css/style.css:379-387`
- `css/style.css:469-498`

#### 평가 때 답변

`index.html`의 viewport 설정으로 기기의 실제 화면 너비에 맞춰 페이지가 보이게 했습니다. CSS에서는 `@media`를 사용해 767px 이하에서는 일반 메뉴를 숨기고 햄버거 버튼을 보여주며, 768px 이상에서는 큰 화면용 레이아웃을 적용합니다. 프로젝트 카드는 Grid의 `auto-fit`과 `minmax()`를 사용해서 화면이 좁아지면 카드 수가 자동으로 줄고 다음 줄로 내려가게 했습니다.

#### 용어

- `@media`: 화면 크기 같은 조건에 따라 다른 CSS를 적용하는 기능
- `max-width`: 이 값 이하일 때 적용
- `min-width`: 이 값 이상일 때 적용
- `display: none`: 숨기기
- `display: block` 또는 `display: flex`: 화면에 보이게 하기

### 1-2. 테마 토글과 새로고침 후 유지

#### 코드 위치

- `index.html:20` — 테마 버튼
- `js/main.js:6-12` — 테마 상태와 저장된 값 불러오기
- `js/main.js:108-122` — 테마를 실제 화면에 적용
- `js/main.js:124-128` — 테마를 바꾸고 저장
- `js/main.js:130-131` — 클릭 이벤트 연결과 처음 적용
- `css/style.css:4-18` — 라이트 모드 변수
- `css/style.css:21-29` — 다크 모드 변수

#### 평가 때 답변

테마 버튼을 클릭하면 `toggleTheme` 함수가 실행됩니다. 현재 테마가 다크면 라이트로, 라이트면 다크로 바꾸고 `localStorage`에 저장합니다. `applyTheme` 함수가 `body`에 `data-theme="dark"`를 붙이거나 제거하면 CSS가 다크 모드용 변수 또는 기본 변수를 사용합니다. 새로고침하면 `state`를 만들 때 `localStorage`에서 이전 테마를 다시 읽기 때문에 선택한 테마가 유지됩니다.

#### 흐름

`버튼 클릭` → `state.theme 변경` → `localStorage 저장` → `body의 data-theme 변경` → `CSS 변수 변경` → `화면 색상과 아이콘 변경`

### 1-3. 햄버거 메뉴, 스크롤 애니메이션, 맨 위로 가기

#### 코드 위치

- `index.html:24-31` — 메뉴 목록과 햄버거 버튼
- `index.html:50`, `index.html:63`, `index.html:74`, `index.html:99` — 등장 애니메이션 대상 section
- `index.html:128-130` — 맨 위로 가기 버튼
- `js/main.js:247-255` — 메뉴 열림 상태 변경
- `js/main.js:257-259` — 햄버거 클릭 이벤트
- `js/main.js:211-225` — `IntersectionObserver` 등장 애니메이션
- `js/main.js:227-240` — 스크롤 위치 감지
- `js/main.js:242-244` — 맨 위로 부드럽게 이동
- `js/main.js:45-55` — 등장 전후 CSS 상태
- `css/style.css:469-497` — 모바일 메뉴 표시 상태
- `css/style.css:511-527` — 맨 위로 가기 버튼 표시 상태

#### 평가 때 답변

햄버거 버튼을 누르면 `state.menuOpen` 값을 반대로 바꾸고, `is-open` 클래스를 메뉴에 추가하거나 제거합니다. CSS는 이 클래스가 있을 때 메뉴를 보여줍니다. 스크롤하면 `window.scrollY`로 현재 위치를 확인하고, section이 화면에 들어오면 `IntersectionObserver`가 `is-visible` 클래스를 추가해서 투명도와 위치를 바꿉니다. 300px 이상 내려가면 맨 위로 가기 버튼을 보여주고, 버튼을 누르면 `window.scrollTo`의 `smooth` 옵션으로 부드럽게 맨 위로 이동합니다.

### 1-4. GitHub API 데이터와 로딩·에러·빈 상태

#### 코드 위치

- `js/main.js:16-17` — GitHub API 주소
- `js/main.js:20-44` — API 요청과 성공·실패 처리
- `js/main.js:46-50` — API 다시 시도
- `js/main.js:52-75` — 로딩·에러·빈 상태 화면
- `js/main.js:76-106` — 성공한 프로젝트 카드 생성
- `js/main.js:276-279` — 로딩 표시 후 API 요청과 렌더링 시작
- `index.html:77` — 프로젝트가 표시될 영역

#### 평가 때 답변

처음에는 `projectsStatus`를 `loading`으로 바꾸고 “불러오는 중”이라는 문구를 보여줍니다. API 응답이 정상적이면 저장소 데이터를 받아 필요한 프로젝트만 골라 `success` 상태로 바꿉니다. 필요한 프로젝트가 하나도 없으면 `empty` 상태가 됩니다. 요청 중 오류가 나거나 응답이 정상 상태가 아니면 `error` 상태가 되고, 에러 안내와 다시 시도 버튼을 표시합니다. 따라서 로딩, 성공, 빈 결과, 오류를 서로 다른 화면으로 구분합니다.

### 1-5. 필수 입력값과 이메일 오류의 즉각적인 피드백

#### 코드 위치

- `index.html:102-123` — 폼과 입력 요소
- `index.html:104-118` — label, 입력칸, 오류 메시지 공간
- `js/main.js:146-174` — 입력값 검사
- `js/main.js:176-184` — 제출 처리
- `js/main.js:186-197` — 입력 중 즉시 검사

#### 평가 때 답변

이름과 메시지는 빈칸인지 확인하고, 이메일은 정규식으로 형식이 맞는지 확인합니다. 입력칸에서 글자를 입력할 때마다 `input` 이벤트가 발생하여 `validateContactForm`이 실행되므로 제출하기 전에도 오류 문구가 바로 바뀝니다. 제출할 때 모든 조건이 맞으면 완료 문구를 표시하고, 맞지 않으면 각 입력칸 아래에 구체적인 안내를 표시합니다.

## 항목 2. HTML·CSS·JavaScript 구조와 기본 문법

### 2-1. HTML, CSS, JavaScript 파일을 분리한 이유

#### 코드 위치

- `index.html:1-12` — HTML 문서와 외부 파일 연결
- `index.html:11` — CSS 연결
- `index.html:12` — JavaScript 연결
- `css/style.css:1` — CSS 파일
- `js/main.js:1` — JavaScript 파일

#### 평가 때 답변

HTML은 페이지의 뼈대와 내용을 담당하고, CSS는 색상·크기·배치를 담당하며, JavaScript는 클릭·스크롤·API 같은 동작을 담당합니다. 역할이 다른 내용을 파일별로 나누면 코드가 읽기 쉽고, 디자인이나 기능을 수정할 때 해당 파일만 찾으면 됩니다. 또한 HTML에 동작 코드를 섞지 않아 재사용과 유지보수가 쉽습니다. `script`의 `defer`는 HTML을 먼저 읽은 뒤 JavaScript를 실행하도록 하는 옵션입니다.

### 2-2. 시맨틱 태그를 어떤 기준으로 선택했는가?

#### 코드 위치

- `index.html:16-33` — `header`, `nav`
- `index.html:36-125` — `main`과 주요 `section`
- `index.html:37-48` — 첫 화면 `hero` section
- `index.html:50-61` — 소개 section
- `index.html:63-71` — 기술 목록 section
- `index.html:74-96` — 프로젝트 section
- `index.html:99-124` — 문의 section
- `index.html:133-136` — `footer`
- `index.html:78-85` — 독립적인 프로젝트 하나를 나타내는 `article`

#### 평가 때 답변

태그 이름만 보고도 그 영역의 역할을 알 수 있도록 시맨틱 태그를 선택했습니다. `header`는 페이지 상단, `nav`는 이동 메뉴, `main`은 핵심 내용, `section`은 주제별 영역, `footer`는 하단 정보를 의미합니다. 프로젝트 카드 하나는 다른 내용과 분리해도 의미가 통하는 독립 콘텐츠이므로 `article`을 사용했습니다. 기술 목록은 순서가 중요하지 않은 목록이라 `ul` 안에 각각의 항목을 `li`로 작성했습니다.

### 2-3. CSS 변수와 사용 이유

#### 코드 위치

- `css/style.css:4-18` — 색상·폰트·간격 변수 정의
- `css/style.css:21-29` — 다크 모드용 변수 재정의
- `css/style.css:37-42` — `var(...)`로 변수 사용
- `css/style.css:87-94` — 배경과 그림자에 변수 사용

#### 평가 때 답변

`:root`에 배경색, 글자색, 강조색, 글꼴, 간격처럼 여러 곳에서 반복해서 사용할 값을 변수로 저장했습니다. 사용할 때는 `var(--color-text)`처럼 변수 이름을 적습니다. 이렇게 하면 색상 하나를 바꿀 때 여러 CSS를 일일이 찾지 않고 변수 한 곳만 바꾸면 됩니다. 다크 모드도 같은 변수 이름에 어두운 값을 다시 지정하는 방식이라 전체 디자인을 쉽게 전환할 수 있습니다.

### 2-4. `onclick` 대신 `addEventListener`를 사용한 이유

#### 코드 위치

- `index.html:20` — HTML에는 버튼 구조만 있음
- `index.html:31` — 햄버거 버튼 구조
- `js/main.js:130` — 테마 클릭 이벤트
- `js/main.js:194-197` — 폼 이벤트
- `js/main.js:257-259` — 햄버거 클릭 이벤트

#### 평가 때 답변

`onclick`은 HTML 태그 안에 클릭할 때 실행할 JavaScript를 직접 적는 방식입니다. 간단하지만 HTML에 구조와 동작이 섞입니다. `addEventListener`는 HTML에는 버튼과 입력칸만 작성하고 JavaScript 파일에서 이벤트와 함수를 연결하는 방식입니다. 그래서 역할을 분리할 수 있고, 하나의 요소에 여러 이벤트를 추가하기도 쉽습니다. 이 프로젝트는 유지보수하기 위해 `addEventListener`를 사용했습니다.

## 항목 3. JavaScript 흐름과 레이아웃 방식

### 3-1. 이벤트 → 상태 변경 → 화면 업데이트

#### 예시: 다크 모드

#### 코드 위치

- `js/main.js:6-12` — `state.theme` 상태
- `js/main.js:124-128` — 클릭 후 상태 변경
- `js/main.js:108-122` — 상태를 화면에 적용
- `js/main.js:130` — 클릭 이벤트 연결
- `css/style.css:21-29` — 다크 모드 화면 스타일

#### 평가 때 답변

테마 버튼을 클릭하는 것이 이벤트입니다. `toggleTheme`이 실행되면서 `state.theme`을 `dark` 또는 `light`로 바꾸는 것이 상태 변경입니다. 그다음 `applyTheme`이 `body`의 `data-theme` 속성을 바꾸고, CSS가 다크 모드 변수를 적용하는 것이 화면 업데이트입니다. 즉 버튼 클릭이 상태를 바꾸고, 바뀐 상태가 CSS와 아이콘에 반영되는 흐름입니다.

`이벤트`: 사용자의 클릭이나 입력

`상태`: 현재 다크 모드인지, 메뉴가 열렸는지처럼 기억해야 하는 값

`화면 업데이트`: 글자, 색상, 메뉴 표시처럼 실제 화면을 바꾸는 것

### 3-2. `async/await`와 `try/catch` API 처리

#### 코드 위치

- `js/main.js:20` — `async` 함수
- `js/main.js:22-43` — `try/catch` 성공·실패 분기
- `js/main.js:24` — `await fetch()`로 응답 대기
- `js/main.js:25-27` — 응답 오류 확인
- `js/main.js:29` — JSON 데이터로 변환
- `js/main.js:40-43` — 오류 상태 저장

#### 평가 때 답변

`loadProjects` 앞의 `async`는 이 함수 안에서 시간이 걸리는 작업을 기다릴 수 있게 합니다. `await fetch`는 GitHub의 응답이 올 때까지 기다린 뒤 다음 줄로 이동합니다. 응답이 정상인지 `response.ok`로 확인하고, 정상적이지 않으면 직접 오류를 발생시킵니다. 정상이라면 `response.json()`으로 데이터를 읽고 성공 처리를 합니다. 통신 오류나 데이터 처리 오류가 생기면 `catch`가 실행되어 상태를 `error`로 바꾸고 오류 메시지를 저장합니다.

### 3-3. `filter`, `map`으로 GitHub 데이터를 카드로 변환

#### 코드 위치

- `js/main.js:29` — GitHub 응답 데이터
- `js/main.js:31-35` — `filter`로 필요한 저장소 선택
- `js/main.js:36-38` — 선택 결과와 상태 저장
- `js/main.js:77-102` — `map`으로 카드 HTML 생성
- `js/main.js:104-105` — `join`과 `innerHTML`로 화면 표시

#### 평가 때 답변

첫째, GitHub API에서 여러 저장소가 들어 있는 배열을 받습니다. 둘째, `filter`를 사용해 이름이 `codyssey-mission1` 또는 `codyssey-mission2`인 저장소만 남깁니다. 셋째, `map`을 사용해 저장소 하나마다 카드 HTML 문자열 하나를 만듭니다. 프로젝트 이름은 제목으로 넣고, 별 개수와 GitHub 주소도 데이터에서 가져옵니다. 넷째, `join("")`으로 카드 문자열들을 하나로 합친 뒤 `innerHTML`로 프로젝트 영역에 넣습니다.

#### 용어

- 배열: 여러 값을 줄 세워 담은 목록
- `filter`: 조건에 맞는 값만 골라내기
- `map`: 목록의 각 값을 다른 형태로 바꾸기
- `join`: 여러 문자열을 하나로 합치기
- `innerHTML`: HTML 요소 안의 내용을 바꾸기

### 3-4. Flexbox와 Grid를 어디에 적용했고 왜 선택했는가?

#### 코드 위치

- `css/style.css:110-115` — header와 nav Flexbox
- `css/style.css:345-353` — Skills 목록 Flexbox
- `css/style.css:379-387` — Projects 목록 Grid
- `css/style.css:389-402` — Project 카드 내부 Grid

#### 평가 때 답변

Flexbox는 한 방향으로 요소를 정렬할 때 적합합니다. 그래서 header와 nav에서는 로고와 메뉴를 가로로 양쪽에 배치했고, Skills 목록에서는 기술 항목을 가로로 놓다가 공간이 부족하면 줄바꿈하도록 사용했습니다. Grid는 행과 열을 함께 관리할 때 적합합니다. Projects 목록은 화면 너비에 따라 카드 열 수를 조절해야 하므로 `auto-fit`과 `minmax()`를 사용한 Grid를 적용했습니다. 카드 내부도 이미지, 제목, 별, 링크를 정해진 행으로 정리해야 해서 Grid를 사용했습니다.

## 항목 4. 상태 관리와 모바일 퍼스트

### 4-1. `state` 객체를 따로 만든 이유

#### 코드 위치

- `js/main.js:5-12` — 상태 객체 정의
- `js/main.js:7` — 테마 상태
- `js/main.js:8` — 메뉴 상태
- `js/main.js:9-11` — 프로젝트 데이터와 API 상태
- `js/main.js:23`, `js/main.js:36-42` — API 상태 변경
- `js/main.js:248-254` — 메뉴 상태 변경과 화면 반영

#### 평가 때 답변

`state` 객체에 테마, 메뉴 열림 여부, 프로젝트 데이터, API 상태를 한곳에 모았습니다. 이렇게 하면 현재 페이지가 어떤 상태인지 찾기 쉽고, 여러 함수가 같은 값을 일관되게 사용할 수 있습니다. 예를 들어 메뉴를 여는 함수는 `state.menuOpen`을 바꾸고, 그 값을 기준으로 CSS 클래스와 접근성 속성을 함께 업데이트합니다. 각각을 따로 만든 변수로 처리해도 작동은 하지만 상태가 많아질수록 흩어져서 관리하기 어렵고, 같은 값을 잘못 다룰 가능성이 커집니다. 객체로 묶는 것은 관련된 상태를 한 묶음으로 관리하기 위한 선택입니다.

### 4-2. 모바일 퍼스트로 작성한 이유

#### 코드 위치

- `css/style.css:31-437` — 기본 스타일과 기본 레이아웃
- `css/style.css:449-464` — 768px 이상 큰 화면 확장
- `css/style.css:466-467` — 모바일 기본값을 먼저 작성했다는 설명
- `css/style.css:469-498` — 767px 이하 모바일 메뉴 규칙
- `index.html:5` — 기기 화면 너비에 맞추는 설정

#### 평가 때 답변

모바일은 화면이 좁고 조작 공간도 작기 때문에 먼저 작은 화면에서 내용이 잘 보이고 사용할 수 있도록 기본 스타일을 정했습니다. 그다음 768px 이상에서는 이미지 크기, 카드 너비, 간격을 키워 큰 화면에 맞게 확장했습니다. 모바일을 먼저 기준으로 잡으면 작은 화면에서 발생하는 가로 넘침을 초기에 확인할 수 있고, 데스크톱 스타일은 필요한 부분만 추가하면 되어 구조가 단순해집니다.

## 평가 직전 빠른 답변 순서

1. 화면 크기와 모바일 메뉴: `index.html:5`, `css/style.css:469`
2. 테마 유지: `js/main.js:124-131`, `css/style.css:21-29`
3. 스크롤 기능: `js/main.js:211-244`
4. GitHub API: `js/main.js:20-106`
5. 폼 검사: `js/main.js:146-197`
6. 파일 분리와 시맨틱 HTML: `index.html:11-12`, `index.html:16-136`
7. CSS 변수: `css/style.css:4-18`
8. 이벤트 리스너: `js/main.js:130`, `js/main.js:194-197`, `js/main.js:259`
9. 상태 흐름: `js/main.js:124-128`
10. 배열 메서드와 레이아웃: `js/main.js:31-105`, `css/style.css:345-402`
11. 상태 객체와 모바일 퍼스트: `js/main.js:6-12`, `css/style.css:449-498`
