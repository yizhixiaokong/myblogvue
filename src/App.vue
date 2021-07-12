<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <el-container class="container">
      <el-header class="header">
        <div class="header-inner">
          <div class="header-content">
            <!-- 导航栏 -->
            <NavBar v-if="isRouterShow"></NavBar>
          </div>
        </div>
      </el-header>
      <el-container class="main">
        <el-container class="main-inner">
          <el-main class="content">
            <div>
              <!-- 内容显示区 -->
              <router-view />
            </div>
          </el-main>
          <el-aside class="sidebar">
            <!-- 侧边栏 -->
            <SideBar v-if="isRouterShow"></SideBar>
          </el-aside>
        </el-container>
      </el-container>
      <el-footer class="footer">
        <h3>Footer</h3>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /srcz
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  name: "App",
  components: {
    // HelloWorld
    NavBar,
    SideBar
  },
  data() {
    return {
      isRouterShow: true
    };
  },
  provide() {
    return {
      reload: this.reload,
      timestampToTime: this.timestampToTime
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    async reload() {
      this.isRouterShow = false;
      await this.$nextTick();
      this.isRouterShow = true;
    },
    timestampToTime(tim) {
      var date = new Date(tim * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      var h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      var s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
h1 {
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.container {
  position: relative;
  min-height: 100%;
  /* overflow-x: hidden; */
  /* overflow-x: auto;  */
}
.header {
  position: relative;
  min-height: 60px;
}
.header-inner {
  margin: 0 auto;
  width: 1110px;
}
.header-content {
  float: left;
  width: 772px;
}
.main {
  display: block !important;
  padding-bottom: 180px;
}
.main-inner {
  margin: 0 auto;
  width: 1110px;
}
.content {
  float: left;
  width: 772px;
  min-height: 700px;
  box-shadow: initial;
  border-radius: initial;
  box-sizing: border-box;
}
.sidebar {
  position: relative;
  float: right;
  width: 315px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.el-header,
.el-footer {
  /* background-color: #B3C0D1; */
  /* color: #333; */
  text-align: center;
  /* line-height: 60px; */
}
.el-aside {
  /* background-color: #D3DCE6; */
  /* color: #333; */
  text-align: center;
  /* line-height: 200px; */
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
