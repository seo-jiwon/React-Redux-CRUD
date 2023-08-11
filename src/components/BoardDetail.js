import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editPost, removePost } from '../modules/boardReducer';
import '../css/Body.css';
import '../css/BoardDetail.css';
import Header from './Header';
import Footer from './Footer'; 

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

    const onRemove = () => {
        dispatch(removePost(selectPostData.id));
        setTitle('');
        setContent('');
        navigate('/');
    }

    return(
        <div style={{ width: "100vw", height: "100vh" }}>
            <Header />
            <div id='bodyDiv'>
                <h2 id='boardDetailTitleDiv'>
                    BoardDetail
                </h2>
                <div id='boardDetailDiv'>
                    <table>
                        <thead>
                            <tr>
                                <th><input id='boardDetailTitle' type='text' onChange={handleTitle} value={title} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><textarea id='boardDetailContent' onChange={handleContent} value={content} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <button id='boardDetailEditBtn' onClick={onChange}>수정</button>
                                    <button id='boardDetailRemoveBtn' onClick={onRemove}>삭제</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}
 
export default BoardDetail;