<template>
  <div class="i-layout-user">
    <a-layout>
      <a-layout-header class="user-header">
        <a>
          <img style="height: 40px; width: 40px;" src="../../assets/image/logo/wx_logo.jpg" alt="用户头像"/>
          <span class="title">Ant Design</span>
        </a>
      </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center;">
        <div class="copyright">Copyright &copy; 2020 IT小跟班</div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'ILayoutUser'
}
</script>

<style lang="less">
  @h-user-header: 180px;
  .i-layout-user {
    height: 100vh;
    width: 100%;
    padding: 0 calc(100vh - 350px);
    background: #f0f2f5 url(../../assets/image/bg/background.svg) no-repeat 50%;
    .user-header {
      text-align: center;
      height: @h-user-header;
      line-height: @h-user-header;
      a {
        display: inline-block;
        img {
          position: relative;
          top: -8px;
          margin-right: 20px;
        }
        .title {
          height: @h-user-header;
          line-height: @h-user-header;
          font-size: 33px;
          color: rgba(0,0,0,.85);
          font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
          font-weight: 600;
          display: inline-block;
        }
      }
    }
    .ant-layout-header {
      background-color: #f0f2f5;
    }
    .copyright {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    }
  }
</style>
