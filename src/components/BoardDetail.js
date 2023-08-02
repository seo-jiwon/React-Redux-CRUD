import React from 'react';
import { useSelector } from 'react-redux';
 
function BoardDetail() {
    const { selectPostData } = useSelector(state => state.boardReducer)

    return(
        <div>
            BoardDetail
            <table border='1px'>
                <thead>
                    <tr>
                        <th>{selectPostData.title}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><textarea value={selectPostData.content} readOnly/></td>
                    </tr>
                </tbody>
            </table>
            <button>수정</button>
            <button>삭제</button>
        </div>
    )
}
 
export default BoardDetail;