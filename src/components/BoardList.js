import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
function BoardList() {
    const navigate = useNavigate();
    const { postData } = useSelector(state => state.boardReducer);
    const { lastId } = useSelector(state => state.boardReducer);
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
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
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