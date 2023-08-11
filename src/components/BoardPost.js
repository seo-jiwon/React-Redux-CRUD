import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePost } from '../modules/boardReducer';
import '../css/Body.css';
import '../css/BoardPost.css';
import Header from './Header';
import Footer from './Footer';

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
        dispatch(savePost(postData));
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
        <div style={{ width: "100vw", height: "100vh" }}>
            <Header />
            <div id='bodyDiv'>
                <h2 id='boardPostTiteDiv'>
                    BoardPost
                </h2>
                <div id='boardPostDiv'>
                    <form onSubmit={postSubmit}>
                        <table>
                            <thead>
                                <tr>
                                    <th><input id='boardPostTitle' type='text' onChange={handleTitle} value={title} placeholder='제 목' /></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input id='boardPostContent' type='text' onChange={handleContent} value={content} placeholder='내 용' /></td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <button id='boardPostBtn' type='submit'>확인</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
 
export default BoardPost;