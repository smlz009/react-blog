import React, { memo, useState } from "react"
import DetailWrapper from "./style"
import Indicator from "@/base-ui/indicator"

const Detail = memo(() => {
  const list = ["abc", "bed", "cfe", "def", "efg", "faa"]
  const [selectIndex, setSelectIndex] = useState(0)
  const handelSelctIndex = (status = true) => {
    let newIndex = status ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = list.length - 1
    if (newIndex > list.length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }
  return (
    <DetailWrapper>
      <button onClick={e => handelSelctIndex(true)}>+</button>
      <button onClick={e => handelSelctIndex(false)}>-</button>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {list.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </Indicator>
      </div>
    </DetailWrapper>
  )
})

export default Detail
