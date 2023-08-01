import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postSave } from '../modules/boardReducer';

function BoardPost() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const postSubmit = (e) => {
        e.preventDefault();
        const postData = {
            id: '',
            title: title,
            content: content,
        }
        dispatch(postSave(postData));
        setTitle('');
        setContent('');
        // console.log(postData);
        navigate('/');
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleContent = (e) => {
        setContent(e.target.value);
    }
    
    return(
        <div>
            BoardPost
            <form onSubmit={postSubmit}>
                <table border='1px'>
                    <thead>
                        <tr>
                            <th><input type='text' onChange={handleTitle} value={title} placeholder='제 목' /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='text' onChange={handleContent} value={content} placeholder='내 용' /></td>
                        </tr>
                    </tbody>
                </table>
                <button type='submit'>확인</button>
                {/* <button onClick={()=>navigate('/')}>확인</button> */}
            </form>
        </div>
    )
}
 
export default BoardPost;