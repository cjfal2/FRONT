import { useState, useRef } from "react"
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router"

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days")
  // useHistory가 v6에서 변경 useNavigate 로
  // history.push(`/day/${dayRef.current.value}`) -> navigate(`/day/${dayRef.current.value}`)
  // 생성시 바로 이동하는 기능
  const navigate = useNavigate()

  // 생성중에는 create 못하게 하기
  const [isLoading, setIsLoading] = useState(false)

  // input창에 있는 값을 얻기, DOM요소에 접근하는 것
  const engRef = useRef(null)
  const korRef = useRef(null)
  const dayRef = useRef(null)


  function onSubmit(e) {
    e.preventDefault()

    if (!isLoading) {
      setIsLoading(true)
      // Create 호출
      // 두번째 인자로 메서드를 넣어줌
      fetch("http://localhost:3001/words/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body : 수정을 위한 정보를 넣어줘야함
        // + JSON 문자열로도 변환시켜줌
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false
        }),
      }).then(res => {
        if (res.ok) {
          alert("생성완료")
          navigate(`/day/${dayRef.current.value}`)
          setIsLoading(false)
        }
      })
    }
  }

  // // 인풋폼에 있는 값을 해당 코드로 얻을 수 있음
  // console.log(engRef.current.value)




  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      {/* 생버튼이라 새로고침이 됨 */}
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >{isLoading ? "Saving..." : "저장"}</button>
    </form>
  )
}