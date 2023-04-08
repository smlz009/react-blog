import React, { memo, useEffect, useRef, useState } from "react"
import ViewWrapper from "./style"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"

const ScrpllView = memo(props => {
  const [showRight, setShowRight] = useState(false) //显示右边按钮
  const [showLeft, setShowLeft] = useState(false) //显示左边按钮
  const [posIndex, setposIndex] = useState(0) //目前的索引
  const [offsetLeft, setoffsetLeft] = useState(0) //距离左边的距离
  const scrollContentRef = useRef() //滚动盒子DOM
  const totalDistanceRef = useRef() //可滚动距离

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    totalDistanceRef.current = scrollWidth - clientWidth //小盒子 - 大盒子 = 计算可滚动的距离
    setShowRight(totalDistanceRef.current > 0)
  }, [props.children])

  const controlClickHandle = isRight => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    setoffsetLeft(newOffsetLeft)
    setposIndex(newIndex)
    setShowRight(totalDistanceRef.current > newOffsetLeft) //目前距离左边的宽度是否超过可滚动的距离
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper offLeft={offsetLeft}>
      {showLeft && (
        <div className="control left" onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content " ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrpllView
