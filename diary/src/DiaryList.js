import DiaryItem from "./DiaryItem"


const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  // 프롭스를 잘못내리면 에러가 난다. -> 디폴트 프롭스 설정
  // console.log(diaryList)
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.lenth} 개의 일기가 있습니다.</h4>
      <div>
        {/* map으로 객체 요소를 하나씩 접근함 */}
        {diaryList.map((it) => (
          // 새로받은 onRemove를 아이템에 내려준다
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </div>
  )
}

DiaryList.defaultProps={
  diaryList:[]
}

export default DiaryList