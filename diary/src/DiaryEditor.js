import { useRef, useState } from "react"

const DiaryEditor = () => {

	const authorInput = useRef() // html요소를 접근할 수 있는 기능
	const contentInput = useRef() // html요소를 접근할 수 있는 기능

	const [state, setState] = useState({
		author:"",
		content:"",
		emotion: 1,
	})

	// onChange에 전달될 이벤트 함수
	const handleChangeState = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = () => {
		if (state.author.length < 1) {
			authorInput.current.focus()
			// authorInput.current: input태그를 가리킴 
			// focus() 그 태그로 이동함
			return
		}
		
		if (state.content.length < 5) {
			contentInput.current.focus()
			return
		}
		// if (state.author.length < 1) {
		// 	alert("1글자이상 입력해주세요.")
		// 	return
		// }

		// if (state.content.length < 5) {
		// 	alert("5자 이상의 내용을 입력해주세요")
		// 	return
		// }
		// 이런 경고방식은 구식이므로 친절한 ui로 변경
		alert("저장 성공")
	}

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
					ref={authorInput} // 레퍼런스를 통해 인풋태그에 적용할 수 있게됨
					name="author"
          value={state.author}
          // onChange={(e) => {
					// 	setState({
					// 		// author: e.target.value,
					// 		// content: state.content,
					// 		// =
					// 		...state,
					// 		author: e.target.value,

					// 	})
          // }}
          onChange={handleChangeState}
        />
      </div>
			<div>
				<textarea
					ref={contentInput}
					name="content"
					value={state.content}
          onChange={handleChangeState}
				/>
			</div>
			<div>
				<label>오늘의 감정 점수: </label>
				<select
					name="emotion"
					value={state.emotion}
					onChange={handleChangeState}
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<div>
				<button onClick={handleSubmit}>일기 저장하기</button>
			</div>
    </div>
  )
}
export default DiaryEditor