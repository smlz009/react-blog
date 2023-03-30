import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { homeStore } from "@/store"
import { HomeWrapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import SectionHeader from "components/section-header"
import SectionRooms from "@/components/section-rooms"

const Home = observer(() => {
  /** 派发异步的事件: 发送网络请求 */
  useEffect(() => {
    homeStore.fetchData()
  }, [])
  /** 从mobx中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo } = homeStore
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader
            title={discountInfo.title}
            subTitle={discountInfo.subtitle}
          />
          <SectionRooms
            roomList={discountInfo.dest_list?.["佛山"]}
            itemWidth="33%"
          ></SectionRooms>
        </div>

        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
      </div>
    </HomeWrapper>
  )
})

export default Home
