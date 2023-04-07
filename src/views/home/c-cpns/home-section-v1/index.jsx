import PropTypes from "prop-types"
import React, { memo } from "react"
import SectionWrapper from "./style"
import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionFooter from "@/components/section-footer"

const HomeSectionV1 = memo(props => {
  const { infoData } = props
  return (
    <SectionWrapper>
      <SectionHeader
        title={infoData.title}
        subTitle={infoData.subtitle}
      ></SectionHeader>
      <SectionRooms roomList={infoData.list} itemWidth="25%"></SectionRooms>
      <SectionFooter></SectionFooter>
    </SectionWrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV1
