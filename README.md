# React 입문 주차 개인 과제 "My Todo List"

## 🖥️ 프로젝트 소개

기본적인 Todo List 사이트 입니다.

## 🎬 구현 사이트 이미지

- 배포 링크 :

"./page-img.png"

## 🕰️ 개발 기간

- 2024.01.19 (금) - 2024.01.22 (월)

## 📌 구현 기능

- UI
- Todo 추가
- Todo 삭제
- Todo 완료 상태 변경 (완료 <-> 진행중)

## ❗ 요구 사항

### 디자인은 취향 존중, 화면 구성은 동일하게!!

1. 제목 & 내용 입력 후 "추가하기" 버튼 클릭 시 Working에 새로운 TodoList 추가되고,<br>
   제목 & 내용 input은 다시 빈 값으로 바뀌도록 구성

2. Todo의 isDone => true : 상태 버튼의 라벨을 `취소`,<br>
   Todo의 isDone => false : 라벨을 `완료`로 조건부 렌더링

3. Todo의 상태 => `Working` : 위쪽에, <br>
   Todo의 상태 => `Done` : 아래쪽에 위치하도록 구현

4. Layout의 최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한하고,<br>
   전체 화면의 가운데로 정렬

5. 컴포넌트 구조는 자유롭게 구현.<br>
   반복되는 컴포넌트를 찾아서 직접 분리하고, 분리한 컴포넌트를 `README`에 작성

## 🔗 컴포넌트 구조

- **App.jsx** : Main
- **Layout.jsx** : 페이지 레이아웃
- **Header.jsx** : 페이지 상단
- **Inputbox.jsx** : TodoList 추가
- **TodoListContainer.jsx** : TodoList 레이아웃
- **Cards.jsx** : TodoList Card 위치 결정 => Working or Done
- **Button.jsx** : TodoList Card 완료/취소/삭제 버튼

## ⚙️ 개발 환경 / 기술스택

- **`npm`**
- **`create-react-app`**
- React
- JavaScript
- HTML
- CSS
