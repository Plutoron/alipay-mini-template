import ioContext from '/common/io-context'

const io = {
  search: data => ioContext({
    url: 's',
    method: 'GET',
    data,
  }),
}

export default io
