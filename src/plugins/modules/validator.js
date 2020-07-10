export default {
  mobile: function (value) {
    return /^1(3|4|5|6|7|8)\d{9}$/.test(value)
  }
}
