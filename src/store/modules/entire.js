import { observable, action, runInAction } from "mobx"
import { getEntireRoomList } from "@/services"

const entire = observable({
  currentPage: 0, //当前页码
  roomList: [],
  totalCount: 0,
  fetchData: action(function () {
    getEntireRoomList(this.currentPage, 20).then(res => {
      runInAction(() => {
        this.totalCount = res.totalCount
        this.roomList = res.list
      })
    })
  }),
})

export default entire
