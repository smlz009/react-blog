import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { homeStore } from "@/store"
import { HomeWrapper } from "./style"
import HomeBanner from "./c-cpns/home-banner"
import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"

const Home = observer(() => {
  /** 派发异步的事件: 发送网络请求 */
  useEffect(() => {
    homeStore.fetchData()
  }, [])
  /** 从mobx中获取数据 */
  const { goodPriceInfo } = homeStore
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
