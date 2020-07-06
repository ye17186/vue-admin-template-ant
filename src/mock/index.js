import Mock from 'mockjs'
import user from './modules/user'
// const GET = 'get'
const POST = 'post'

Mock.setup({
  timeout: '100-500'
})

Mock.mock(/\/user\/login/, POST, (options) => {
  const params = JSON.parse(options.body)
  return user.login(params)
})
export default Mock
