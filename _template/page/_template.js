Page({
  data: {},
  onLoad() {
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
