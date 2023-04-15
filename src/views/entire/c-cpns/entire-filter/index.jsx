import React, { memo } from "react"
import FilterWrapper from "./style"
import filterData from "@/assets/data/filter_data.json"
import { useState } from "react"
import classNames from "classnames"

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  const itemClickHandle = item => {
    let newItems = [...selectItems]
    if (newItems.includes(item)) {
      newItems = newItems.filter(val => val !== item)
    } else {
      newItems.push(item)
    }

    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems.includes(item),
              })}
              key={index}
              onClick={e => itemClickHandle(item)}
            >
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter
