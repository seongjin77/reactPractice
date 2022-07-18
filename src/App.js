import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';

//https://jsonplaceholder.typicode.com/posts/1/comments

// const dummyList = [
//   {
//     id:1,
//     author: '김성진',
//     content: '하이 1',
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author: '홍길동',
//     content: '하이 2',
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author: '차차차',
//     content: '하이 3',
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:4,
//     author: '정순대',
//     content: '하이 4',
//     emotion: 2,
//     created_date: new Date().getTime()
//   },
//   {
//     id:5,
//     author: '박주황',
//     content: '하이 5',
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
// ]


function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const getData = async() => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
      ).then((res)=> res.json());

      const initData = res.slice(0,20).map((it)=>{
        return {
          author: it.email,
          content: it.body,
          emotion: Math.floor(Math.random()*5)+1,
          created_date: new Date().getTime(),
          id: dataId.current++,
        }
      })

      setData(initData);
  };

  useEffect(()=>{
    getData();
  },[]);

  const onCreate = (author, content, emotion) => {
      const created_date = new Date().getTime();
      const newItem = {
        author,
        content,
        emotion,
        created_date,
        id: dataId.current,
      };
      dataId.current += 1;
      setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`)
    const newDiaryList = data.filter((it)=> it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it)=> it.id === targetId? {...it, content: newContent}: it)
    )
  }

  return (
    <div className="App">
      <Lifecycle/>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data}/>
    </div>
  );
}

export default App;
