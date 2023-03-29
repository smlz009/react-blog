import myRequest from '../request/index'

export function getHomeGoodPriceData(data) {
    return myRequest.get({
        url:'/home/goodprice'
    })

}