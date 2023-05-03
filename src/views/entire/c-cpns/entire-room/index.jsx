import React, { useCallback } from "react"
import { observer } from "mobx-react-lite"
import RoomWrapper from "./style"
import { entireStore, detailStore } from "@/store"
import RoomItem from "@/components/room-item"
import { useNavigate } from "react-router-dom"

const EntireRoom = observer(() => {
  const { roomList, totalCount, isLoading } = entireStore
  const navigate = useNavigate()
  const itemClick = useCallback(
    item => {
      detailStore.infoDataHandle(item)
      navigate("/detail")
    },
    [navigate]
  )

  return (
    <RoomWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="list">
        {roomList.map(item => (
          <RoomItem
            itemData={item}
            itemWidth="20%"
            key={item._id}
            itemClick={e => itemClick(item)}
          ></RoomItem>
        ))}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

export default EntireRoom
