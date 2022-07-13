import React, {useState, useEFFect} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author: '김성진',
    content: '하이 1',
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id:2,
    author: '홍길동',
    content: '하이 2',
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id:3,
    author: '차차차',
    content: '하이 3',
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id:4,
    author: '정순대',
    content: '하이 4',
    emotion: 2,
    created_date: new Date().getTime()
  },
  {
    id:5,
    author: '박주황',
    content: '하이 5',
    emotion: 1,
    created_date: new Date().getTime()
  },
]


function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
