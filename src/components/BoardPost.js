import React from 'react';
import { useNavigate } from 'react-router-dom';

function BoardPost() {
    const navigate = useNavigate();
    return(
        <div>
            BoardPost
            {/* <form> */}
                <table border='1px'>
                    <thead>
                        <tr>
                            <th>제 목</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='text' /></td>
                        </tr>
                    </tbody>
                </table>
                {/* <button type='submit'>작성</button> */}
                <button onClick={()=>navigate('/')}>확인</button>
            {/* </form> */}
        </div>
    )
}
 
export default BoardPost;