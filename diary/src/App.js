import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
// import LifeCycle from './LifeCycle';

// https://jsonplaceholder.typicode.com/comments

function App() {
  // 전역적으로 데이터를 관리할 state 생성
  const [data, setData] = useState([])

  // 0번 부터 시작
  const dataId = useRef(0)

  // promise를 반환하는 비동기 함수, App.js가 마운트 되자마자 호출할 것임
  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments'
    ).then((res) => res.json())
    // // console.log(res)
    const initData = res.slice(0, 20).map((it) => {
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5) + 1, //0~4까지 랜덤 난수 생성 + 1
        created_date : new Date().getTime(),
        id : dataId.current++
      }
    }) // 0~19 만 가져옴 + 필요한거만 map

    setData(initData)
  }

  useEffect(() => {
    getData()
  }, [])




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

  const onRemove = (targetId) => {
    // console.log(`${targetId}가 삭제되었습니다.`)
    const newDiaryList = data.filter((it) => it.id !== targetId)
    setData(newDiaryList)
  }

  // 어떤 컨텐트를 변경할건지 / 어떻게 변경할건지
  const onEdit = (targetId, newContent) => {
    setData(
      // 원본을 돌면서 새로운 데이터를 반영시키는거임
      // 현재 수정대상이라면 컨텐츠를 대체해줌
      data.map((it) => it.id === targetId ? { ...it, content: newContent } : it)
    )
  }



  return (
    <div className="App">
      {/* <LifeCycle /> */}
      <DiaryEditor onCreate={onCreate} />
      {/* DiaryList에 onRemove도 프롭스로 보냄 */}
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
      {/* 프롭으로 보냄 */}
    </div>
  );
}

export default App;
