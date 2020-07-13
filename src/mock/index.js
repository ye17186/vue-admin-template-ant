import Mock from 'mockjs'
import user from './modules/user'
// const GET = 'get'
const POST = 'post'

Mock.setup({
  timeout: '200-1000'
})

Mock.mock(/\/user\/login/, POST, (options) => {
  const params = JSON.parse(options.body)
  return user.login(params)
})

Mock.mock(/\/user\/register/, POST, (options) => {
  const params = JSON.parse(options.body)
  return user.register(params)
})
export default Mock
