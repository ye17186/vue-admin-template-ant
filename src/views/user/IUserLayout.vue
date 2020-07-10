<template>
  <div class="i-user-layout">
    <header>
      <a href="https://blog.it-follower.com" target="_blank">
        <img src="../../assets/image/logo/wx_logo.jpg" alt="用户头像"/>
        <span class="title">Design With Ant</span>
      </a>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      Copyright &copy; 2020 IT小跟班
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
  .i-user-layout {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(../../assets/image/bg/background.png);
    background-size: cover;
    header {
      text-align: center;
      height: @h-user-header;
      a {
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
    main {
    }
    footer {
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
