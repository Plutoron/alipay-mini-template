import {
  prefix,
  mode,
  https
} from '/config/config'

const ioContext = async ({
  url,
  header = {},
  method = 'GET',
  dataType = 'json',
  data = {}
}) => {
  let isRestful 

	const dataKeys = Object.keys(data)
	const restParam = []

	if (dataKeys.length > 0) {
		if (dataKeys.some(v => v.indexOf(':') > -1)) {
			isRestful = true
			dataKeys.map((v, i) => {
				if (v.indexOf(':') > -1) {
					restParam.push(data[v])
					delete data[v]
				}
			})
		}
  }
  
  // 所有的请求，header默认携带token
  const res = await new Promise((resolve, reject) => {
    my.httpRequest({
      url: `${https ? 'https' : 'http'}://${prefix[mode]}/${url}${isRestful ? '/' + restParam.join('/') : ''}`,
      headers: {
        'Content-Type': 'application/json',
        token: my.getStorageSync('token') || '',
        ...header,
      },
      method,
      data,
      dataType,
      timeout: 20000,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      },
      complete: (e) => {

      }
    })
  })
  return res
}

export default ioContext
