import PropTypes from "prop-types"
import React, { memo } from "react"
import FooterWrapper from "./style"
import IconMoreArrow from "@/assets/svg/icon-more-arrow"
import { useNavigate } from "react-router-dom"

const sectionFooter = memo(props => {
  const { name } = props
  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }
  const navigate = useNavigate()
  const moreClickHandler = () => {
    navigate("/entire")
  }

  return (
    <FooterWrapper color={name ? "#00848A" : "#000"} onClick={moreClickHandler}>
      <div className="info">
        <div className="text">{showMessage}</div>
        <IconMoreArrow></IconMoreArrow>
      </div>
    </FooterWrapper>
  )
})

sectionFooter.propTypes = {
  name: PropTypes.string,
}

export default sectionFooter
