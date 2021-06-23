import Mock from 'mockjs'

console.log('我是mock')

Mock.mock('http://www.1ddd.com:8080/api/login', 'post', (data) => {
  console.log(data)

  return {
    status: 200,
    msg: '请求成功',
    data: {
      id: 1,
      name: Mock.Random.cname(),
      nikename: Mock.Random.name(),
      token: Mock.mock.toString()
    }
  }
})
