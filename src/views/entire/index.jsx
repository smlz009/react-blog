import React, { memo, useEffect } from "react"
import EntireWrapper from "./style"
import EntireFilter from "./c-cpns/entire-filter"
import EntireRoom from "./c-cpns/entire-room"
import EntirePagination from "./c-cpns/entire-pagination"
import { entireStore } from "@/store"

const Entire = memo(() => {
  useEffect(() => {
    entireStore.fetchData()
  }, [])
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRoom></EntireRoom>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire
