import React from "react"
import PaginationWrapper from "./style"
import { Pagination } from "@mui/material"
import { entireStore } from "@/store"
import { observer } from "mobx-react-lite"

const EntirePagination = observer(() => {
  const { totalCount, currentPage, roomList } = entireStore
  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const handleChange = (event, count) => {
    window.scrollTo(0, 0)
    entireStore.currentPageHandle(count - 1)
  }

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={handleChange}></Pagination>
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

export default EntirePagination
