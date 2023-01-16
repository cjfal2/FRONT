import DayList from "./DayList";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days")
  const navigate = useNavigate()

  function addDay() {
    fetch("http://localhost:3001/days/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body : 수정을 위한 정보를 넣어줘야함
      // + JSON 문자열로도 변환시켜줌
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert("생성완료")
        navigate('/')
      }
    })
  }


  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  )
}