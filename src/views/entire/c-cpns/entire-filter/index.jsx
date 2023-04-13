import React, { memo } from "react"
import FilterWrapper from "./style"
import filterData from "@/assets/data/filter_data.json"

const EntireFilter = memo(() => {
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item, index) => {
          return (
            <div className="item" key={index}>
              {item}
            </div>
          )
        })}
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter
