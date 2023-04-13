import React, { memo } from "react"
import EntireWrapper from "./style"
import EntireFilter from "./c-cpns/entire-filter"
import EntireRoom from "./c-cpns/entire-room"
import EntirePagination from "./c-cpns/entire-pagination"

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRoom></EntireRoom>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire
