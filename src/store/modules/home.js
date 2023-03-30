import { observable, action, runInAction } from "mobx"
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
} from "@/services"

const home = observable({
  goodPriceInfo: {},
  highScoreInfo: {},
  discountInfo: {},
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
  }),
})

export default home
