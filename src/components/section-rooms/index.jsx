import PropTypes from "prop-types"
import React, { memo } from "react"
import RoomsWrapper from "./style"
import RoomItem from "@/components/room-item"

const SectionRooms = memo(props => {
  const { roomList = [], itemWidth = "25%" } = props
  return (
    <div>
      <RoomsWrapper>
        {roomList?.slice(0, 8)?.map(item => (
          <RoomItem
            key={item.id}
            itemData={item}
            itemWidth={itemWidth}
          ></RoomItem>
        ))}
      </RoomsWrapper>
    </div>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth: PropTypes.string,
}

export default SectionRooms
