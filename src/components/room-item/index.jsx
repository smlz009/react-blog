import PropTypes from "prop-types"
import React, { memo } from "react"
import ItemWrapper from "./style"
import { Rating } from "@mui/material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
// import "slick-carousel/slick/slick-theme.css"

const RoomItem = memo(props => {
  const { itemData = {}, itemWidth = "25%" } = props
  const settings = {
    prevArrow: false, // 隐藏左箭头
    nextArrow: false, // 隐藏右箭头
  }
  return (
    <ItemWrapper
      verifyColor={itemData.verify_info?.textColor || "#395769"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="swiper">
          <div className="control">
            <div className="btn left">
              <IconArrowLeft width="30" height="30" />
            </div>
            <div className="btn right">
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <Slider {...settings}>
            {itemData?.picture_urls?.map(item => {
              return (
                <div className="cover" key={item}>
                  <img src={item} alt="" />
                </div>
              )
            })}
          </Slider>
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            sx={{ fontSize: "12px" }}
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
}

export default RoomItem
