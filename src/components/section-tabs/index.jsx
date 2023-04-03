import classNames from "classnames"
import PropTypes from "prop-types"
import React, { memo, useState } from "react"
import TabsWrapper from "./style"

const SectionTabs = memo(props => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemClickHandler = (index, name) => {
    setCurrentIndex(index)
    tabClick(index, name)
  }
  return (
    <TabsWrapper>
      {tabNames.map((item, index) => (
        <div
          className={classNames("item", { active: index === currentIndex })}
          key={index}
          onClick={e => itemClickHandler(index, item)}
        >
          {item}
        </div>
      ))}
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
}

export default SectionTabs