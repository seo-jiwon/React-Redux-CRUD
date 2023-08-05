# React-Redux-CRUD
> 2023-07-30 ~

<div align="center">
<img width="995" alt="image" src="https://user-images.githubusercontent.com/59152019/224705181-3bd2829d-63e9-4e95-853d-c016a5533a32.png">
</div>
<br/>

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
