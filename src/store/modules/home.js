import { observable, action, runInAction } from "mobx"
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services"

const home = observable({
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
  homeHotRecommendInfo: {},
  longforInfo: {},
  plusInfo: {},
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
    getHomeLongforData().then(res => {
      runInAction(() => {
        this.longforInfo = res
      })
    })
    getHomePlusData().then(res => {
      runInAction(() => {
        this.plusInfo = res
      })
    })
  }),
})

export default home
