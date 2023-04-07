import { observable, action, runInAction } from "mobx"
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
} from "@/services"

const home = observable({
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
  homeHotRecommendInfo: {},
  fetchData: action(function () {
    getHomeGoodPriceData().then(res => {
      runInAction(() => {
        this.goodPriceInfo = res
      })
    })
    getHomeHighScoreData().then(res => {
      runInAction(() => {
        this.highScoreInfo = res
      })
    })
    getHomeDiscountData().then(res => {
      runInAction(() => {
        this.discountInfo = res
      })
    })
    getHomeHotRecommendData().then(res => {
      runInAction(() => {
        this.homeHotRecommendInfo = res
      })
    })
  }),
})

export default home
