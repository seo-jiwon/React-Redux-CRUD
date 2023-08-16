# React-Redux-CRUD
> 2023-07-30 ~

<div align="center">
<img width="995" alt="image" src="https://github.com/seo-jiwon/React-Redux-CRUD/assets/59152019/7afe3c4e-34cb-4a64-ae00-684a4949c54c.png">
</div>
<br/>

<b>Fun Daily는 Redux 학습을 위한 게시글 목록, 작성, 수정, 삭제 웹 서비스</b>
<br/>
<br/>

## :link: 실행 방법

- 프로그램 실행
```
$ npm install
``` 
```
$ npm start
``` 
<br/>

## :file_folder: 개발 환경
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC??style=flat-square&logo=Visual Studio Code&logoColor=white"/>

<br/>

## :hammer: 기술 스택
<img src="https://img.shields.io/badge/HTML5-E34F26??style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6??style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E??style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB??style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC??style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933??style=flat-square&logo=Node.js&logoColor=white"/>

<br/>

## :eyes: 기능 설명
기능|게시글 목록 페이지(메인페이지)|
|--|--|
|화면|<p align="center"><img width="960" height="770" src="https://github.com/seo-jiwon/React-Redux-CRUD/assets/59152019/7afe3c4e-34cb-4a64-ae00-684a4949c54c.png">|
|설명|게시글 목록을 확인하는 메인페이지이다.|
<br/>

기능|게시글 작성 페이지|
|--|--|
|화면|<p align="center"><img width="960" height="770" src="https://github.com/seo-jiwon/React-Redux-CRUD/assets/59152019/7cbaa628-2957-4377-8dcf-3dfd24d0ec79.png">|
|설명|게시글 작성 페이지이다.|
<br/>

기능|게시글 상세 페이지|
|--|--|
|화면|<p align="center"><img width="960" height="770" src="https://github.com/seo-jiwon/React-Redux-CRUD/assets/59152019/f72793c1-d45b-482b-8cbd-4fa698a97198.png">|
|설명|게시글 상세 페이지이다. 게시글을 수정하고 삭제할 수 있다.|
<br/>

기능|게시글 작성 / 수정 / 삭제|
|--|--|
|화면|<p align="center"><img width="960" height="770" src="https://github.com/seo-jiwon/React-Redux-CRUD/assets/59152019/a29439de-3454-4485-8eae-eaa61bb6b7e1.gif">|
|설명|게시글을 작성, 수정, 삭제할 수 있다.|
<br/>

## :clipboard: 프로젝트 기록
0731
- React-Router-Dom
- components / modules  
  - BoardList.js, BoardPost.js, BoardDetail.js
  - rootReducer.js
- reducer / store
  - index.js
  ```
  // import { configureStore } from '@reduxjs/toolkit';
  // const store = configureStore({ reducer: rootReducer });
      {/* <Provider store={store}> */}    {/* </Provider> */}
  ```

0801
- store 연동 위한 Provider Component 주석 제거
  - index.js
  ```
  <Provider store={store}> </Provider>
  ```
- BoardList.js, BoardPost.js Update
  - BoardList.js
    - 게시글 목록 기능
      - useSelector() 사용
  - BoardPost.js
    - 게시글 작성 기능
      - useDispatch() 사용
- boardReducer add
  - boardReducer.js
    - 게시글 작성 관련 Action Type / Action Function / Initial State / Reducer 소스코드 작성
    ```
    const TYPE_SAVE = 'POST_SAVE';

    type: TYPE_SAVE,
    postData: [
        {
            id: '',
            title: '',
            content: '',
        }
    ]

    export default function boardReducer(state = initialState, action){
    switch(action.type) {
        case TYPE_SAVE:
    ``` 
- combineReducers
  - rootReducer.js
  ```
  const rootReducer = combineReducers({ boardReducer });
  ```

0802
- BoardDetail.js, BoardList.js Update
  - BoardDetail.js
    - 게시글 상세보기 기능
      - useSelector() 사용
  - BoardList.js
    - useDispatch() 사용
    - react-router-dom 의 Link Component 추가
- boardReducer Update
  - boardReducer.js
    - 게시글 상세 관련 Action Type / Action Function / Reducer 소스코드 작성
    ```
    const TYPE_DETAIL = 'POST_DETAIL';

    type: TYPE_DETAIL,
    postData: {
        id: id,
    }

    case TYPE_DETAIL:
    ```  

0805
- BoardDetail.js Update
  - 게시글 수정 및 삭제 기능
    - onChange(), onRemove(), useDispatch(), useState() 사용
- boardReducer.js
  - Save, Detail 관련 액션 함수명 수정
  - Edit 및 Remove 관련 Action Type / Action Function / Reducer 소스코드 작성
  ```
  const TYPE_EDIT = 'POST_EDIT';
  const TYPE_REMOVE = 'POST_REMOVE';

  type: TYPE_EDIT,
    postData: {
        id: postData.id,
        title: postData.title,
        content: postData.content,
    }
  type: TYPE_REMOVE,
    postData: {
        id: id,
    }

  case TYPE_EDIT:
  case TYPE_REMOVE:
  ```

0807
- Body.css, Header.css, Footer.css 
  - Footer 화면 고정
    - 100vh - ( Header height + Footer height )
    ```
    height:calc(100vh - 300px);
    ```
  - BoardList.css
    - Body 디자인 수정 ( 테이블 )
  - BoardList.js, BoardPost.js, BoardDetail.js Update
    - Header, Footer 추가
    - Body Size 고정
      ```
      <div style={{ width: "100vw", height: "100vh" }}>
      ```

0811
- BoardList.js, BoardPost.js, BoardDetail.js Update
  - id값 추가
- BoardList.css, BoardPost.css, BoardDetail.css
  - 디자인 수정
