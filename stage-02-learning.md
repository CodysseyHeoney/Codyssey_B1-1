# 2단계 개인 학습 정리: Skills 목록 스타일링

> 제출용이 아닌 개인 학습용 문서입니다.
> 이번 단계에서는 이미 만들어 둔 Skills HTML 구조를 CSS로 가로 목록과 카드 형태로 꾸몄습니다.

## 1. 이번 단계의 위치

```text
body
└─ main
   └─ section#skills
      ├─ h2       → Skills 제목
      └─ ul       → 기술 목록 전체
         ├─ li    → HTML 카드
         ├─ li    → CSS 카드
         └─ li    → JavaScript 카드
```

Skills는 `main` 안의 여러 `section` 중 하나입니다. `h2`는 섹션 제목이고, `ul`과 `li`는 기술 목록의 구조를 담당합니다.

## 2. `ul`과 `li`

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

- `ul`은 `unordered list`의 약자로, 순서가 중요하지 않은 목록 전체입니다.
- `li`는 `list item`의 약자로, 목록 안의 항목 하나입니다.
- 기술의 순위나 학습 순서가 중요한 것이 아니므로 `ol`보다 `ul`이 적절합니다.

## 3. HTML과 CSS의 역할 분리

Skills의 기술 이름과 목록 구조는 [index.html](index.html#L51-L59)에 작성합니다. 가로 배치, 간격, 카드 색상과 그림자 같은 화면 디자인은 [css/style.css](css/style.css#L200-L267)에 작성합니다.

```text
HTML → 기술 목록의 구조와 내용
CSS  → 목록의 배치와 시각적 표현
```

이렇게 분리하면 기술 이름을 바꾸어도 HTML만 수정하고, 카드 디자인을 바꾸어도 CSS만 수정할 수 있습니다.

## 4. 가로 목록에 Flexbox를 사용한 이유

```css
#skills ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-medium);
}
```

Skills 목록은 한 방향인 가로로 배치하고, 화면 폭이 부족하면 다음 줄로 자연스럽게 내려가면 됩니다. 그래서 한 방향 배치에 적합한 Flexbox를 사용했습니다.

- `display: flex`: 자식 `li`를 flex item으로 배치합니다.
- `flex-wrap: wrap`: 한 줄에 모두 들어가지 않으면 줄바꿈합니다.
- `justify-content: center`: 카드 목록을 가로 가운데에 배치합니다.
- `gap`: 카드 사이의 간격을 정합니다.

## 5. 기술 항목을 카드처럼 보이게 하기

```css
:root {
  --color-card-shadow: #d6d0c5;
}

[data-theme="dark"] {
  --color-card-shadow: #171717;
}

#skills li {
  flex: 0 1 140px;
  padding: 16px;
  border-radius: 6px;
  background-color: var(--color-surface);
  color: var(--color-text);
  font-family: Baskerville, "Palatino Linotype", Georgia, serif;
  font-size: 17px;
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.03em;
  box-shadow: 2px 2px 0 var(--color-card-shadow);
}
```

- `flex: 0 1 140px`: 카드가 남은 공간만큼 커지지 않고, 기본 가로 크기 `140px`을 기준으로 배치됩니다.
- `padding`: 카드 안쪽 여백입니다.
- `border-radius`: 카드 모서리를 둥글게 만듭니다.
- `background-color`: CSS 변수로 카드 배경색을 관리합니다.
- `color`: 카드 글자색을 CSS 변수로 관리합니다.
- `font-family`, `font-size`, `font-style`, `font-weight`, `letter-spacing`: 카드 안 기술 이름의 글꼴과 글자 표현을 정합니다.
- `box-shadow`: `--color-card-shadow` 변수로 카드의 고정 그림자를 관리합니다.

## 6. hover와 transition

```css
#skills li {
  transition: transform 160ms ease, box-shadow 160ms ease;
}

#skills li:hover {
  transform: translateY(-2px);
  box-shadow: 3px 3px 0 var(--color-card-shadow);
}
```

- `:hover`: 마우스를 올렸을 때 적용되는 상태입니다.
- `transform: translateY(-2px)`: 카드를 위로 2px 이동합니다.
- `transition`: 기본 상태에서 hover 상태로 바뀌는 과정을 부드럽게 만듭니다.

이번 단계에서는 JavaScript를 사용하지 않고 CSS의 상태 선택자인 `:hover`만 사용했습니다.

## 7. Flexbox와 Grid의 구분

- Skills 목록처럼 한 방향으로 항목을 배치하고 줄바꿈하는 경우에는 Flexbox가 적합합니다.
- Projects처럼 카드가 행과 열로 반복 배치되는 경우에는 Grid가 적합합니다.
- 이 프로젝트에서는 내비게이션과 Skills에 Flexbox를 사용하고, Projects 카드에는 Grid를 사용합니다.

## 8. Projects 임시 카드 Grid

현재는 GitHub API를 연결하기 전이므로 임시 카드 하나만 있지만, 여러 카드가 추가될 것을 고려해 컨테이너에 Grid를 먼저 적용했습니다.

```css
#projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 280px));
  justify-content: center;
  gap: var(--space-large);
}
```

- `display: grid`: 자식 카드들을 행과 열로 배치합니다.
- `repeat(auto-fit, ...)`: 화면 폭에 맞춰 열 개수를 자동으로 조정합니다.
- `minmax(200px, 280px)`: 카드가 너무 작아지지 않으면서 가로 폭이 너무 커지지 않도록 제한합니다.
- `justify-content: center`: 좁아진 카드 열을 가운데에 배치합니다.
- `gap`: 카드 사이의 간격입니다.

임시 카드에는 프로젝트 카드 요구사항에 맞춰 배경색, 그림자, hover와 transition도 적용했습니다.

## 9. 임시 프로젝트 카드의 내용

```html
<article class="project-card">
  <h3>codyssey-mission1</h3>
  <p class="project-stars" aria-label="Stars 0개">☆</p>
  <a href="https://github.com/CodysseyHeoney/codyssey-mission1">
    GitHub에서 보기
  </a>
</article>
```

- `h3`: 저장소 이름을 표시합니다.
- `project-stars`: Star 수가 0일 때 빈 별을 표시할 자리입니다.
- `ui-rounded`: 별 아이콘을 둥근 느낌의 글꼴로 표시합니다.
- `aria-label`: 별의 의미와 개수를 보조기술에 전달합니다.
- `a`: 저장소 페이지로 이동하는 링크입니다.

실제 Star 수와 별 모양은 다음 JavaScript API 연동 단계에서 동적으로 바꿀 예정입니다.
같은 카드 구조로 `codyssey-mission2`도 추가되어 현재 임시 카드가 두 개입니다.

## 10. 태블릿 화면에서 About 정렬 조정

```css
@media (min-width: 768px) and (max-width: 1024px) {
  #about > div {
    align-items: flex-end;
  }

  #about > div > div {
    margin-bottom: 56px;
  }
}
```

데스크톱에서는 이미지가 커지면서 텍스트가 이미지의 기준에서 어긋나 보일 수 있습니다. 태블릿 화면에서는 텍스트를 이미지 아래쪽 기준에 맞추고 추가 아래 여백을 없애, 이미지의 생선 위치 옆에서 `H` 텍스트가 시작하도록 조정했습니다.
