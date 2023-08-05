// Action Type
const TYPE_SAVE = 'POST_SAVE';
const TYPE_DETAIL = 'POST_DETAIL';
const TYPE_EDIT = 'POST_EDIT';

// Action Function
export const savePost = (postData) => ({
    type: TYPE_SAVE,
    postData: {
        id: postData.id,
        title: postData.title,
        content: postData.content,
    }
})

// Action Function
export const detailPost = (id) => ({
    type: TYPE_DETAIL,
    postData: {
        id: id,
    }
})

// Action Function
export const editPost = (postData) => ({
    type: TYPE_EDIT,
    postData: {
        id: postData.id,
        title: postData.title,
        content: postData.content,
    }
})

// Initial State
const initialState = {
    lastId: 0,
    postData: [
        {
            id: '',
            title: '',
            content: '',
        }
    ],
    selectPostData: {},
}

// Reducer
export default function boardReducer(state = initialState, action){
    switch(action.type) {
        case TYPE_SAVE:
            console.log(state.postData)
            return {
                lastId: state.lastId + 1,
                postData: state.postData.concat({
                    ...action.postData,
                    id: state.lastId + 1,
                })
            }
        case TYPE_DETAIL:
            return {
                ...state,
                selectPostData: state.postData.find(item => item.id === action.postData.id)
            }
        case TYPE_EDIT:
            return {
                ...state,
                postData: state.postData.map(item => item.id === action.postData.id ? {...action.postData} : item),
                selectPostData: {}
            }
        default:
            return state
    }
}