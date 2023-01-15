// import dummy from "../db/data.json";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";


export default function DayList() {

  const days = useFetch("http://localhost:3001/days")

  // const [days, setDays] = useState([])

  // // 어떤 상태값이 바뀌었을 때 반응하는 함수생성 가능
  // useEffect(() => {
  //   // api호출
  //   fetch('http://localhost:3001/days')
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     setDays(data)
  //   })
  // }, []) // 의존성 배열이 변경되었을 때만 실행

  return (
    <>
      <ul className="list_day">
        {/* map을 사용: 배열을 받아서 또 다른 배열을 반환해줌 */}
        {/* 추가 : 반복되는 요소에는 key값이 필요 */}
        {days.map(day => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>
              Day {day.day}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}