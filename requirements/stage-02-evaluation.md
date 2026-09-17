# 2단계 평가 대비: CSS 기본 설정과 레이아웃

> 이 문서는 CSS 단계에서 구현한 내용과 관련 평가 항목을 연결해두는 기록입니다.
> 평가 질문에 답하는 연습은 미션 전체 구현 후 진행합니다.

## 관련 평가 항목

### `requirement.md` 항목 2 - CSS 변수

평가 질문:

> CSS 변수(`:root`)로 색상, 폰트 등을 정의했고, 변수로 관리하면 어떤 이점이 있는지 구체적으로 답변할 수 있는가?

관련 코드:

- [`:root` 변수 정의](../css/style.css#L3-L18)
- [`data-theme="dark"` 변수 정의](../css/style.css#L20-L29)
- [`body`에서 CSS 변수 사용](../css/style.css#L37-L42)

최종 정리 때 확인할 내용:

- CSS 변수에 어떤 공통 값을 저장했는가?
- `var(...)`로 변수를 어떻게 사용했는가?
- 색상 변경과 다크 모드 관리에 어떤 장점이 있는가?

### `requirement.md` 항목 2 - Skills의 시맨틱 목록

평가 질문:

> `ul`과 `li`를 사용해 기술 목록을 구성한 이유를 설명할 수 있는가?

관련 코드:

- [Skills 목록 구조](../index.html#L63-L70)

정리할 내용:

- `ul`은 순서가 중요하지 않은 목록 전체를 의미합니다.
- `li`는 목록 안의 기술 항목 하나를 의미합니다.
- 기술 이름만 나열하는 것보다 목록의 의미가 HTML 구조에 드러납니다.

### `requirement.md` 항목 2 - Projects 카드의 시맨틱 구조

관련 코드:

- [프로젝트 카드 구조](../index.html#L73-L95)

정리할 내용:

- `article`은 프로젝트 하나를 독립적인 콘텐츠로 표현합니다.
- `h3`는 카드 안의 프로젝트 이름입니다.
- `a`는 해당 GitHub 저장소로 이동하는 링크입니다.

### `requirement.md` 항목 3 - Flexbox와 Grid 적용 비교

평가 질문:

> Flexbox와 Grid를 각각 어디에 적용했는지 확인하고 해당 상황에서 그 방식을 선택한 이유를 비교하여 설명할 수 있는가?

현재 관련 코드:

- [`header`와 `nav`의 Flexbox 적용](../css/style.css#L110-L115)
- [`Skills` 목록의 Flexbox 적용](../css/style.css#L345-L353)
- [`Projects` 카드 목록의 Grid 적용](../css/style.css#L379-L387)
- [`Project` 카드 내부의 Grid 적용](../css/style.css#L389-L402)

최종 정리 때 비교할 내용:

- Flexbox는 한 방향의 로고·메뉴 정렬에 사용한 이유
- Skills 목록은 한 줄 배치와 화면 폭에 따른 줄바꿈이 필요하므로 Flexbox를 사용한 이유
- Projects 컨테이너는 `auto-fit`, `minmax()`로 화면 너비에 맞춰 카드 열을 조정하기 위해 Grid를 사용한 이유
- Project 카드 내부는 이미지·제목·별·링크를 행으로 정리하기 위해 Grid를 사용한 이유

### `requirement.md` 항목 1·2 - Skills 카드 시각 효과

관련 코드:

- [Skills 카드 기본 스타일](../css/style.css#L355-L369)
- [Skills 카드 hover 효과](../css/style.css#L371-L374)
- [Projects 카드 Grid와 내부 Grid](../css/style.css#L376-L402)
- [Projects 카드 기본 스타일과 hover 효과](../css/style.css#L389-L418)
- [Projects GitHub 링크 스타일](../css/style.css#L426-L432)
- [Projects 별 글꼴 스타일](../css/style.css#L434-L437)
- [버튼 hover와 transition](../css/style.css#L500-L509)

정리할 내용:

- `background-color`, `border`, `box-shadow`로 카드처럼 보이게 했습니다.
- `transition`으로 hover 상태가 갑자기 바뀌지 않도록 했습니다.
- `transform: translateY()`로 마우스를 올렸을 때 카드가 살짝 올라가도록 했습니다.

## PDF 기능 요구사항 연결

- 네비게이션은 Flexbox를 사용하고 로고는 왼쪽, 메뉴는 오른쪽에 배치합니다.
- CSS 변수로 색상·폰트·간격을 정의합니다.
- 다크 모드용 CSS 변수를 별도로 정의합니다.
- 모바일 기본 스타일을 먼저 작성하고 `min-width` 미디어 쿼리로 큰 화면을 확장합니다.
- Projects 카드의 Grid, hover, transition, box-shadow는 임시 카드에 적용했습니다.

## 현재 단계 확인

- [x] CSS 변수를 `:root`에 정의했는가?
- [x] 다크 모드 변수를 `[data-theme="dark"]`에 정의했는가?
- [x] 공통 콘텐츠 너비와 섹션 여백을 설정했는가?
- [x] 내비게이션에 Flexbox를 적용했는가?
- [x] Skills 기술 목록을 `ul`과 `li`로 작성했는가?
- [x] Skills 목록을 Flexbox로 가로 배치했는가?
- [x] Skills 카드에 hover, transition, box-shadow를 적용했는가?
- [x] Projects 카드 목록에 `auto-fit`, `minmax()` Grid를 적용했는가?
- [x] Projects 카드 내부에 Grid를 적용했는가?
- [x] Projects 카드에 hover, transition, box-shadow를 적용했는가?
- [x] 버튼에 hover와 transition을 적용했는가?
- [x] 모바일·태블릿·데스크톱 반응형 규칙을 작성했는가?
