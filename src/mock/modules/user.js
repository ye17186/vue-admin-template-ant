/**
 * 邮箱登录
 * @param request
 * @returns {{msg: string, code: number, data: null}}
 */
const emailLogin = function (request) {
  const response = {
    code: 0,
    msg: 'SUCCESS',
    data: null
  }
  const allowed = ['ye001@163.com', 'ye002@163.com']
  if (!allowed.includes(request.email)) {
    response.code = 1
    response.msg = '邮箱不存在'
  } else if (request.password !== '123456') {
    response.code = 2
    response.msg = '密码不正确'
  } else {
    response.data = {
      userId: Math.random(),
      username: 'admin',
      mobile: request.mobile,
      email: request.email,
      authCodes: request.email === 'ye001@163.com' ? ['ALL'] : ['M001']
    }
  }
  return response
}

const mobileLogin = function (request) {
  const response = {
    code: 0,
    msg: 'SUCCESS',
    data: null
  }
  const allowed = ['13200000001', '13200000002']
  if (!allowed.includes(request.mobile)) {
    response.code = 3
    response.msg = '手机号不存在'
  } else if (request.smsCode !== request.sms) {
    response.code = 4
    response.msg = '短信验证码不正确'
  } else {
    response.data = {
      userId: Math.random(),
      username: 'admin',
      mobile: request.mobile,
      email: request.email,
      authCodes: request.email === '13200000001' ? ['ALL'] : ['M001']
    }
  }
  return response
}

const login = function (request) {
  const loginType = request.loginType
  if (loginType === 'E') {
    return emailLogin(request)
  } else if (loginType === 'M') {
    return mobileLogin(request)
  } else {
    return {
      code: 5,
      msg: '登录类型不支持',
      data: null
    }
  }
}

const register = function (request) {
  const response = {
    code: 0,
    msg: 'SUCCESS',
    data: null
  }
  const mobiles = ['13200000001', '13200000002']
  const emails = ['ye001@163.com', 'ye002@163.com']
  if (mobiles.includes(request.mobile)) {
    response.code = 1
    response.msg = '手机号已被注册'
  } else if (emails.includes(request.email)) {
    response.code = 2
    response.msg = '邮箱已被注册'
  } else if (request.sms !== request.smsCode) {
    response.code = 3
    response.msg = '短信验证码不正确'
  }
  return response
}

export default {
  login, register
}
