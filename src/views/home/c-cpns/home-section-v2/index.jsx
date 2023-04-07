import PropTypes from "prop-types"
import React, { memo, useState, useCallback } from "react"
import SectionWrapper from "./style"
import SectionHeader from "components/section-header"
import SectionRooms from "@/components/section-rooms"
import SectionTabs from "@/components/section-tabs"
import SectionFooter from "@/components/section-footer"

const HomeSectionV2 = memo(props => {
  //从props获取数据
  const { infoData = {} } = props
  const initName = Object.keys(infoData.dest_list)[0]
  const tabNames = infoData?.dest_address?.map(item => item.name)
  const [name, setName] = useState(initName)
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
      <SectionFooter name={name}></SectionFooter>
    </SectionWrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV2
