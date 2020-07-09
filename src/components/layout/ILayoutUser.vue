<template>
  <div class="i-layout-user">
    <header class="header">
      <a>
        <img src="../../assets/image/logo/wx_logo.jpg" alt="用户头像"/>
        <span class="title">Ant Design</span>
      </a>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <div class="copyright">Copyright &copy; 2020 IT小跟班</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ILayoutUser'
}
</script>

<style lang="less" scoped>
  @h-user-header: 180px;
  .i-layout-user {
    width: 100%;
    height: 100%;
    padding: 0 260px;
    background: #f0f2f5 url(../../assets/image/bg/background.svg) no-repeat 50%;
    header, main, footer {
      background-color: #f0f2f5;
    }
    .header {
      text-align: center;
      height: @h-user-header;
      a {
        display: inline-block;
        img {
          height: 40px;
          width: 40px;
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
    .footer {
      text-align: center;
      height: 100px;
      line-height: 100px;
      .copyright {
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
    }
  }
</style>
