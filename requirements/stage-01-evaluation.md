# 1단계 평가 대비: 프로젝트 구조와 시맨틱 HTML

> 이 문서는 제출용 결과물이 아니라, 1단계 평가 질문에 답하기 위한 정리 문서입니다.
> 관련 코드 링크는 1단계 구현이 끝난 뒤 실제 줄 번호를 확인하여 추가합니다.

## 관련 평가 항목

### 항목 2 - HTML, CSS, JavaScript 파일 분리

평가 질문:

> HTML, CSS, JavaScript가 각각의 파일로 분리되어 있고, 분리한 이유와 각 파일의 역할을 구분하여 답변할 수 있는가?

관련 코드:

- [`index.html`의 문서 구조와 외부 파일 연결](../index.html#L1-L12)
- [`css/style.css` 파일](../css/style.css#L1-L4)
- [`js/main.js` 파일](../js/main.js#L1)

코드 위치 링크:

- [HTML 문서에서 CSS·JavaScript를 연결하는 부분](../index.html#L11-L12)

답변 정리:

- 최종 평가 대비 단계에서 사용자의 말로 답변을 작성합니다.
- 구현이 끝난 뒤 실제 코드 위치와 연결하여 답변을 보완합니다.

### 항목 2 - 시맨틱 태그 사용 기준

평가 질문:

> `header`, `nav`, `main`, `section`, `footer` 등 시맨틱 태그를 사용했고, 어떤 기준으로 태그를 선택했는지 설명할 수 있는가?

관련 코드:

- [`header`와 `nav` 구조](../index.html#L15-L33)
- [`main`과 각 `section` 구조](../index.html#L35-L124)
- [`footer` 구조](../index.html#L132-L136)

답변 정리:

- 최종 평가 대비 단계에서 사용자의 말로 답변을 작성합니다.
- 구현이 끝난 뒤 실제 HTML 구조와 연결하여 답변을 보완합니다.

## 1단계 구현 후 확인할 것

- [x] `index.html`, `css/style.css`, `js/main.js`, `images/` 구조가 존재하는가?
- [x] HTML에 외부 CSS 파일이 연결되어 있는가?
- [x] JavaScript가 `defer` 속성으로 연결되어 있는가?
- [x] `header`, `nav`, `main`, `section`, `article`, `footer`를 역할에 맞게 사용했는가?
- [x] Hero, About, Skills, Projects, Contact 영역이 있는가?
- [x] 네비게이션 링크가 각 섹션의 `id`와 연결되는가?
- [x] 이미지에 의미 있는 `alt`가 있는가?
- [x] 폼의 `label`과 입력 요소의 `for`·`id`가 연결되는가?
- [x] 1단계 구현 후 실제 코드 줄 링크를 추가했는가?

## 최종 평가 대비 질문

미션 전체 구현이 끝난 뒤 다음 질문을 한꺼번에 연습합니다.

1. HTML, CSS, JavaScript를 왜 한 파일에 모두 작성하지 않고 분리하는가?
2. `div` 대신 `header`, `nav`, `main`, `section`, `footer`를 사용하는 이유는 무엇인가?
3. 프로젝트 카드 하나를 `article`로 표현할 수 있는 이유는 무엇인가?
