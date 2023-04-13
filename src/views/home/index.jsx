import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { homeStore } from "@/store"
import { HomeWrapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
import HomeLongfor from "./c-cpns/home-longfor"
import HomeSectionV3 from "./c-cpns/home-section-v3"
import { isEmptyObject } from "../../utils"

const Home = observer(() => {
  /** 派发异步的事件: 发送网络请求 */
  useEffect(() => {
    homeStore.fetchData()
  }, [])
  /** 从mobx中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    homeHotRecommendInfo,
    longforInfo,
    plusInfo,
  } = homeStore
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObject(discountInfo) && (
          <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>
        )}
        {isEmptyObject(homeHotRecommendInfo) && (
          <HomeSectionV2 infoData={homeHotRecommendInfo}></HomeSectionV2>
        )}
        {isEmptyObject(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        )}
        {isEmptyObject(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
        )}
        {isEmptyObject(longforInfo) && (
          <HomeLongfor infoData={longforInfo}></HomeLongfor>
        )}
        {isEmptyObject(plusInfo) && (
          <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>
        )}
      </div>
    </HomeWrapper>
  )
})

export default Home
