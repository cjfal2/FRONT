// import dummy from "../db/data.json"
// 다이나믹 url을 위해서
import { useParams } from "react-router-dom"
import Word, { IWord } from "./Word"
// import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import React from "react"




export default function Day() {
  // <> 는 어떤 타입을 사용할지를 위해 사용가능
  const { day } = useParams<{ day: string }>()
  // // == const day = useParams().day
  // const wordList = dummy.words.filter(word => (
  //   Number(word.day) === Number(day)
  //   // 받아오는 데이터의 타입을 확인해주어야 함
  // ))

  // 타입스크립트, 다른 컴포넌트에서 불러오기
  const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`)


  // const [words, setWords] = useState([])

  // useEffect(() => {
  //   // api호출
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     setWords(data)
  //   })
  // }, [day]) // ${day} 같이 특정 값을 이용하면 맨 뒤 빈[] 에 값을 넣으라함

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )

}