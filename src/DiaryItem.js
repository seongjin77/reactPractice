import {useState} from 'react';


const DiaryItem = ({onDelete ,id, author, content, created_date, emotion,}) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const [localContent,setLocalContent] = useState('');

    const handleDelete = () => {
        if(window.confirm(`${id}번째 아이디를 삭제하시겠습니까?`)){
            onDelete(id)
        }
    };

    return (<div className="DiaryItem">
        <div className="info">
            <span>작성자 : {author} | 감정점수 : {emotion}</span> <br/>
            <span className="date">{new Date(created_date).toLocaleString()}</span> <br/>
            <div className="content">
                {isEdit ?
                <>
                <textarea value={localContent} 
                onChange={(e) => setLocalContent(e.target.value)} />
                </> 
                : <>{content}</> }
            </div>
        </div>
        <button onClick={handleDelete}>삭제하기</button>
        <button onClick={toggleIsEdit}>수정하기</button>
    </div>)
};

export default DiaryItem;