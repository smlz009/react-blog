import React, { memo, useEffect, useRef, useState } from "react"
import ViewWrapper from "./style"

const ScrpllView = memo(props => {
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setposIndex] = useState(0)
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    const totalDistance = scrollWidth - clientWidth
    setShowRight(totalDistance > 0)
  }, [props.children])
  return (
    <ViewWrapper>
      <div className="lef">左边按钮</div>
      {showRight && <div className="right">右边按钮</div>}

      <div className="slot" ref={scrollContentRef}>
        {props.children}
      </div>
    </ViewWrapper>
  )
})

export default ScrpllView
