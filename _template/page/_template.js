const app = getApp()
import {
  formatNumber,
} from '/utils/util'
import io from './io'

Page({
  data: {},
  onLoad() {
    console.log(formatNumber(1))
    this.search()
  },
  async search() {
    try {
      const res = await io.search({
        wd: 'something',
      })
      console.log(res)
    } catch (e) {
      my.showToast({
        title: e.errMsg,
      })
    }
  },
});
