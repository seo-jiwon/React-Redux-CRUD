// Action Type
const TYPE_SAVE = 'POST_SAVE';

// Action Function
export const postSave = (postData) => ({
    type: TYPE_SAVE,
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
    ]
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
        default:
            return state
    }
}