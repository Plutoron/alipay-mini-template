import ioContext from '/common/io-context'

const io = {
  // 需要修改header的话，通过data.header 进行修改
  search: data => ioContext({
    url: 's',
    method: 'GET',
    data,
  }),
}

export default io
