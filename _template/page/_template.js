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
      app.message(e)
    }
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
   // 返回自定义分享信息
  },
})
