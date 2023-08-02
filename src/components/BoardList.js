import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postDetail } from '../modules/boardReducer';
 
function BoardList() {
    const navigate = useNavigate();
    const { postData } = useSelector(state => state.boardReducer);
    const { lastId } = useSelector(state => state.boardReducer);

    const dispatch = useDispatch();
    const selectPost = (id) => {
        dispatch(postDetail(id));
    }
    return(
        <div>
            BoardList
            <br/><button onClick={()=>navigate('/BoardPost')}>글 작성</button>
            <table border='1px'>
                <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>제 목</th>
                    </tr>
                </thead>
                <tbody>
                {lastId !== 0 ?
                            // 게시글 있는 경우
                            postData.map(item => (
                                item.id !== '' &&
                                <tr key={item.id}> 
                                    <td onClick={()=> selectPost(item.id)}><Link to='/BoardDetail'>{item.id}</Link></td>
                                    <td onClick={()=> selectPost(item.id)}><Link to='/BoardDetail'>{item.title}</Link></td>
                                </tr>
                            )) :
                            // 게시글 없는 경우
                            <tr>
                                <td colSpan={2}>작성된 글이 없습니다.</td>
                            </tr>
                        }
                </tbody>
            </table>
        </div>
    )
}
 
export default BoardList;