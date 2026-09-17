# 3단계 평가 대비: JavaScript 테마·API·인터랙션

> 이 문서는 JavaScript 단계에서 구현한 기능과 평가 항목을 연결해두는 기록입니다.
> 평가 질문에 대한 답변 연습은 미션 전체 구현 후 진행합니다.

## 관련 평가 항목

### `requirement.md` 항목 1 - 테마 토글과 유지

평가 질문:

> 테마 토글 버튼 클릭 시 다크/라이트 모드가 전환되고, 새로고침 후에도 유지되는가?

관련 코드:

- [테마 전환 버튼 구조](../index.html#L19-L20)
- [다크 모드 CSS 변수](../css/style.css#L20-L29)
- [테마 상태 저장과 불러오기](../js/main.js#L5-L12)
- [테마 적용과 아이콘 업데이트](../js/main.js#L108-L121)
- [테마 클릭 이벤트](../js/main.js#L124-L131)

정리할 내용:

- `data-theme="dark"`가 CSS의 다크 모드 변수와 연결됩니다.
- `localStorage`에 테마를 저장해 새로고침 후에도 유지합니다.

### `requirement.md` 항목 2 - 이벤트 리스너와 파일 분리

평가 질문:

> `onclick` 인라인 속성 대신 `addEventListener`를 사용한 이유를 설명할 수 있는가?

관련 코드:

- [JavaScript 외부 파일 연결](../index.html#L11-L12)
- [`addEventListener`로 테마 클릭 연결](../js/main.js#L130-L130)
- [Contact 폼 검증과 input 이벤트](../js/main.js#L145-L197)

정리할 내용:

- HTML은 버튼 구조를 담당하고 JavaScript는 동작을 담당합니다.
- `addEventListener`를 사용하면 구조와 동작을 분리할 수 있습니다.

### `requirement.md` 항목 1 - 스크롤 상호작용

평가 질문:

> 햄버거 메뉴, 스크롤 애니메이션, 맨 위로 가기 버튼 등이 정상 동작하는가?

관련 코드:

- [등장 애니메이션을 적용할 섹션](../index.html#L50-L99)
- [등장 전·후 애니메이션 상태](../css/style.css#L45-L55)
- [등장 애니메이션 대상 선택](../js/main.js#L206-L209)
- [IntersectionObserver와 is-visible 클래스 추가](../js/main.js#L210-L225)
- [스크롤 위치에 따른 헤더 상태 변경](../js/main.js#L206-L240)
- [스크롤 상태에 따른 헤더 CSS](../css/style.css#L70-L107)
- [맨 위로 가기 버튼 이벤트](../js/main.js#L242-L244)
- [내비게이션 smooth scroll 이벤트](../js/main.js#L261-L274)

정리할 내용:

- `window.scrollY`로 현재 스크롤 위치를 확인합니다.
- 60px을 넘으면 `header`에 `is-scrolled` 클래스를 추가하고, 위로 돌아오면 제거합니다.
- 실제 시각적 변화는 CSS의 `.is-scrolled` 선택자에서 연결합니다.
- `.reveal`은 등장 전 상태이고 `.reveal.is-visible`은 등장 후 상태입니다.
- `IntersectionObserver`가 섹션의 20%가 화면에 들어오면 `.is-visible` 클래스를 추가합니다.

### `requirement.md` 항목 1 - GitHub API 데이터 표시

평가 질문:

> GitHub API에서 데이터를 불러와 화면에 표시되고, 로딩·에러·빈 상태가 구분되는가?

관련 코드:

- [GitHub API 주소](../js/main.js#L14-L17)
- [프로젝트 상태 객체](../js/main.js#L5-L12)
- [API 요청과 상태 변경](../js/main.js#L20-L43)
- [로딩·에러·빈 상태와 카드 렌더링](../js/main.js#L46-L106)
- [API 요청과 렌더링 실행](../js/main.js#L276-L279)

정리할 내용:

- `loading`, `success`, `empty`, `error` 상태를 `state` 객체로 관리합니다.
- 상태에 따라 프로젝트 영역에 다른 안내 문구를 표시합니다.
- 에러 상태에서는 다시 시도 버튼을 만들고, 버튼 클릭으로 API 요청을 다시 시작합니다.

### `requirement.md` 항목 3 - async/await와 배열 메서드

평가 질문:

> `async/await`와 `try/catch`를 사용하여 API 호출 성공과 실패를 어떻게 분기 처리했는가?
>
> `map`, `filter` 등 배열 메서드를 활용하여 GitHub 데이터를 카드 UI로 변환하는 과정을 설명할 수 있는가?

관련 코드:

- [`async` 함수와 `try/catch`](../js/main.js#L20-L43)
- [`filter`로 두 프로젝트 선택](../js/main.js#L29-L38)
- [`map`으로 카드 HTML 생성](../js/main.js#L76-L102)
- [`join`과 `innerHTML`로 화면 반영](../js/main.js#L104-L105)

정리할 내용:

- `await fetch()`로 API 응답을 기다리고, 오류는 `catch`에서 처리합니다.
- `filter`로 필요한 저장소만 남긴 뒤 `map`으로 카드 HTML을 만듭니다.
- `join("")`으로 카드 문자열 배열을 합쳐 화면에 표시합니다.

### `requirement.md` 항목 3·4 - 이벤트와 상태 흐름

평가 질문:

> 이벤트 → 상태 변경 → 화면 업데이트 흐름을 코드에서 따라갈 수 있는가?
>
> 상태 객체를 따로 만들어 관리한 이유를 설명할 수 있는가?

관련 코드:

- [테마 상태 객체](../js/main.js#L5-L12)
- [상태 변경 함수](../js/main.js#L124-L131)
- [화면 업데이트 함수](../js/main.js#L52-L106)

## 현재 단계 확인

- [x] 테마 전환 버튼을 HTML에 추가했는가?
- [x] `addEventListener`로 클릭 이벤트를 연결했는가?
- [x] `data-theme` 속성으로 CSS 테마를 변경하는가?
- [x] `localStorage`로 테마를 저장하는가?
- [x] 테마에 따라 아이콘과 `aria-label`을 변경하는가?
- [x] GitHub API에서 프로젝트 데이터를 가져오는가?
- [x] 로딩·에러·빈 상태를 구분하는가?
- [x] API 오류 시 다시 시도 버튼을 제공하는가?
- [x] `filter`와 `map`으로 프로젝트 카드를 생성하는가?
- [x] `IntersectionObserver`로 섹션 등장 애니메이션을 연결하는가?
