import './App.css';
import React, { useState, useRef } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  // 전역적으로 데이터를 관리할 state 생성
  const [data, setData] = useState([])

  // 0번 부터 시작
  const dataId = useRef(0)

  // 파라미터를 받는 함수를 생성
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime()
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1
    // newItem이 제일 위로 올라오게
    setData([newItem, ...data])
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`)
    const newDiaryList = data.filter((it) => it.id !== targetId)
    setData(newDiaryList)
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      {/* DiaryList에 onDelete도 프롭스로 보냄 */}
      <DiaryList onDelete={onDelete} diaryList={data} />
      {/* 프롭으로 보냄 */}
    </div>
  );
}

export default App;
