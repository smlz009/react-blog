import React from "react"
import { observer } from "mobx-react-lite"
import RoomWrapper from "./style"
import { entireStore } from "@/store"
import RoomItem from "@/components/room-item"

const EntireRoom = observer(() => {
  const { roomList, totalCount, isLoading } = entireStore
  return (
    <RoomWrapper>
      <h2 className="title">{totalCount}多处住宿</h2>
      <div className="list">
        {roomList.map(item => (
          <RoomItem itemData={item} itemWidth="20%" key={item._id}></RoomItem>
        ))}
      </div>
      {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

export default EntireRoom
