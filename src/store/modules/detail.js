import { observable, action } from "mobx"

const detail = observable({
  infoData: {},
  infoDataHandle: action(function (data) {
    this.infoData = data
  }),
})

export default detail
