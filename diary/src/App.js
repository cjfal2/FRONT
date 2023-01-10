import './App.css';
// import React, {useState, useEffect} from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


const dummyList = [
  {
    id:1,
    author:"김동준",
    content:"하이욤1",
    emotion:1,
    created_date: new Date().getTime() //아무것도 없으면 현재시간
    // getTime : ms 로
  },
  {
    id:2,
    author:"박용찬",
    content:"하이욤2",
    emotion:2,
    created_date: new Date().getTime() //아무것도 없으면 현재시간
    // getTime : ms 로
  },
  {
    id:3,
    author:"이정규",
    content:"하이욤3",
    emotion:5,
    created_date: new Date().getTime() //아무것도 없으면 현재시간
    // getTime : ms 로
  },
  {
    id:4,
    author:"최은성",
    content:"하이욤4",
    emotion:4,
    created_date: new Date().getTime() //아무것도 없으면 현재시간
    // getTime : ms 로
  },
]


function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
      {/* 프롭으로 보냄 */}
    </div>
  );
}

export default App;
