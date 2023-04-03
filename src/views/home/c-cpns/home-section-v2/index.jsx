import PropTypes from "prop-types"
import React, { memo, useState, useCallback } from "react"
import SectionWrapper from "./index"
import SectionHeader from "components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionTabs from "@/components/section-tabs"

const HomeSectionV2 = memo(props => {
  //从props获取数据
  const { infoData } = props

  const tabNames = infoData.dest_address?.map(item => item.name)
  const [name, setName] = useState("佛山")
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth="33%"
      ></SectionRooms>
    </SectionWrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV2
