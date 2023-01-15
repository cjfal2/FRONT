import { useState } from "react"


export default function Word({ word: w }) {
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
          setWord({id:0})
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