import React, { useEffect, useState } from "react";

// 하나의 파일에 컴포넌트가 많아도 되지만 가독성 부분에서 이렇게 잘 안씀
const UnmountTest = () => {
  useEffect(() => {
    // console.log("Mount!!!!!")

    return () => {
      // console.log("언마운트!!!!")
    } // 마운트 useEffect 안에 리턴으로 언마운트시 시행되도록
  }, []) // 마운트되면 시행되도록

  return (
    <div>
      언마운트 테스트 컴포넌트
    </div>
  )
}

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => setIsVisible(!isVisible)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest/>}
    </div>
  )
}

export default LifeCycle