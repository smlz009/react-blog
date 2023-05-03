import React from "react"
import { observer } from "mobx-react-lite"
import { PicturesWrapper } from "./style"
import { detailStore } from "@/store"

const index = observer(props => {
  const { infoData } = detailStore

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item">
            <img src={infoData?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {infoData?.picture_urls?.slice(1, 5).map(item => {
            return (
              <div className="item" key={item}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            )
          })}
        </div>
      </div>
    </PicturesWrapper>
  )
})

export default index
