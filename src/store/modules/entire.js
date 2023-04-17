import { observable, action, runInAction } from "mobx"
import { getEntireRoomList } from "@/services"

const entire = observable({
  currentPage: 0, //当前页码
  roomList: [],
  totalCount: 0,
  isLoading: false,
  fetchData: action(function () {
    this.isLoading = true
    getEntireRoomList(this.currentPage, 20).then(res => {
      runInAction(() => {
        this.totalCount = res.totalCount
        this.roomList = res.list
        this.isLoading = false
      })
    })
  }),
  currentPageHandle: action(function (count) {
    this.currentPage = count
    this.fetchData()
  }),
})

export default entire
