import PropTypes from "prop-types"
import React, { memo, useRef, useState } from "react"
import ItemWrapper from "./style"
import { Rating } from "@mui/material"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import IconArrowLeft from "@/assets/svg/icon-arrow-left"
import IconArrowRight from "@/assets/svg/icon-arrow-right"
import Indicator from "@/base-ui/indicator"
import classNames from "classnames"

const RoomItem = memo(props => {
  const { itemData = {}, itemWidth = "25%" } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const sliderRef = useRef()
  const controlBtnHandle = (isRight = true) => {
    console.log(sliderRef.current)
    isRight ? sliderRef.current.slickNext() : sliderRef.current.slickPrev()

    // 最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }

  return (
    <ItemWrapper
      verifyColor={itemData.verify_info?.textColor || "#395769"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        <div className="swiper">
          <div className="control">
            <div className="btn left" onClick={e => controlBtnHandle(false)}>
              <IconArrowLeft width="30" height="30" />
            </div>
            <div className="btn right" onClick={e => controlBtnHandle(true)}>
              <IconArrowRight width="30" height="30" />
            </div>
          </div>
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {itemData?.picture_urls?.map((item, index) => {
                return (
                  <div className="item" key={item}>
                    <span
                      className={classNames("dot", {
                        active: selectIndex === index,
                      })}
                    ></span>
                  </div>
                )
              })}
            </Indicator>
          </div>
          <Slider ref={sliderRef}>
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
