import React from "react"
import { observer } from "mobx-react-lite"
import RoomWrapper from "./style"
import { entireStore } from "@/store"
import RoomItem from "@/components/room-item"

const EntireRoom = observer(() => {
  const { roomList } = entireStore
  return (
    <RoomWrapper>
      {roomList.map((item, index) => (
        <RoomItem itemData={item} itemWidth="20%" key={index}></RoomItem>
      ))}
    </RoomWrapper>
  )
})

export default EntireRoom
