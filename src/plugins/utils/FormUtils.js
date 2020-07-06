export default {
  /**
   * 校验表单
   * @param form 校验对象
   * @param pass 校验通过回调函数
   * @param fail 校验失败回调函数
   */
  validForm: function (form, pass, fail) {
    form.validate(valid => {
      if (valid) {
        if (pass && typeof (pass) === 'function') {
          pass()
        }
        return true
      } else {
        if (fail && typeof (fail) === 'function') {
          fail()
        }
        return false
      }
    })
  },
  /**
   * 重置表单校验
   * @param form 表单对象
   */
  resetValid: function (form) {
    form.resetFields()
  }
}
