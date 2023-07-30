import React from 'react';
import { useNavigate } from 'react-router-dom';
 
function BoardList() {
    const navigate = useNavigate();
    return(
        <div>
            BoardList
            <br/><button onClick={()=>navigate('/BoardPost')}>글 작성</button>
            <table border='1px'>
                <thead>
                    <tr>
                        <th>번 호</th>
                        <th>제 목</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
 
export default BoardList;