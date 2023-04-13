import PropTypes from "prop-types"
import React, { memo } from "react"
import SectionWrapper from "./style"
import SectionHeader from "components/section-header"
import RoomItem from "components/room-item"
import ScrollView from "@/base-ui/scroll-view"
import SectionFooter from "@/components/section-footer"

const HomeSectionV3 = memo(props => {
  const { infoData = {} } = props
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map(item => (
            <RoomItem
              key={item.id}
              itemData={item}
              itemWidth={"20%"}
            ></RoomItem>
          ))}
        </ScrollView>
      </div>
      <SectionFooter name={"plus"}></SectionFooter>
    </SectionWrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV3
