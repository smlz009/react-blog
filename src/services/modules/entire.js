import myRequest from "../request/index"

export function getEntireRoomList(offset = 0, size = 20) {
  return myRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  })
}
