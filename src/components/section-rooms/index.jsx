import PropTypes from "prop-types"
import React, { memo } from "react"
import RoomsWrapper from "./style"
import RoomItem from "@/components/room-item"

const SectionRooms = memo(props => {
  const { roomList = [] } = props
  return (
    <div>
      <RoomsWrapper>
        {roomList?.map(item => (
          <RoomItem key={item.id} itemData={item}></RoomItem>
        ))}
      </RoomsWrapper>
    </div>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
}

export default SectionRooms
