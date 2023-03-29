import { observable,action,runInAction  } from 'mobx'
import { getHomeGoodPriceData } from '@/services'


const home = observable({
  goodPriceInfo: {},
  fetchData: action(async function(){
    const res = await getHomeGoodPriceData()
    runInAction(() => {
      this.goodPriceInfo = res
    })
  })
});



export default home;