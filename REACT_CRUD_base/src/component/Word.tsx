import React from "react"
import { useState } from "react"

// 타입스크립트 부분, interface는 여러개의 프로퍼티에 각각 다른 타입을 선언 가능하다.
interface IProps {
  word: IWord
}
// IWord의 타입을 선언해주고 IProps에 할당, export를 주면 다른 곳에서도 사용가능
export interface IWord {
  "id": number
  "day": string
  "eng": string
  "kor": string
  "isDone": boolean
}


export default function Word({ word: w }: IProps) {
  // 이제 w. 를 치면 어떤 프로퍼티가 있는지 확인할 수 있고 타입도 볼 수 있다.
  // 이제 w.day. 을 치면 적용가능한 함수도 보여준다.
  
  // Word({ word: w }) => props로 받아온 워드를 w로 사용하겠다.
  const [word, setWord] = useState(w)
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(word.isDone)
  
  function toggleShow() {
    setIsShow(!isShow)
  }

  function toggleDone() {
    const url = `http://localhost:3001/words/${word.id}`
    // 두번째 인자로 메서드를 넣어줌
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      // body : 수정을 위한 정보를 넣어줘야함
      // + JSON 문자열로도 변환시켜줌
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone)
      }
    })
  }


  /** 삭제 */
  function del() {
    if (window.confirm('삭제 하시겠습니까?')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then(res => {
        if (res.ok) {
          setWord({ 
            ...word, // 순서도 중요함 id가 먼저오면 두번 선언했다 그럼
            id: 0,
          }) // 삭제후 모든 요소를 지웠기 때문에 에러가 남
          // 항상 선언한 다섯가지 값을 가지고 있어야함
        }
      })
    }
  }

  if (word.id === 0) {
    return null
  }

  return (
    <tr className={isDone ? "off" : ''}>
      <td>
        <input
          type="checkbox"
          checked={isDone}
          onChange={toggleDone}
        />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          뜻 {isShow ? '숨기기' : '보기'}
        </button>
        <button className="btn_del" onClick={del}>삭제</button>
      </td>
    </tr>
  )
}