import PropTypes from "prop-types"
import React, { memo } from "react"
import SectionWrapper from "./style"
import SectionHeader from "components/section-header"
import LongforItem from "components/longfor-item"
import ScrollView from "@/base-ui/scroll-view"

const HomeSectionV3 = memo(props => {
  const { infoData = {} } = props
  return (
    <SectionWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item, index) => (
            <LongforItem itemData={item} key={index}></LongforItem>
          ))}
        </ScrollView>
      </div>
    </SectionWrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV3
