import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editPost } from '../modules/boardReducer';
 
function BoardDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { selectPostData } = useSelector(state => state.boardReducer);

    const [title, setTitle] = useState(selectPostData.title);
    const [content, setContent] = useState(selectPostData.content);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e.target.value);
    }

    const onChange = () => {
        const postData = {
            id: selectPostData.id,
            title: title,
            content: content,
        }

        dispatch(editPost(postData));
        setTitle('');
        setContent('');
        navigate('/');
    }

    return(
        <div>
            BoardDetail
            <table border='1px'>
                <thead>
                    <tr>
                        <th><input type='text' onChange={handleTitle} value={title} /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><textarea onChange={handleContent} value={content} /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={onChange}>수정</button>
            <button>삭제</button>
        </div>
    )
}
 
export default BoardDetail;