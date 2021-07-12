<template>
  <el-card
    class="box-card"
    style="border-radius: 40px;box-shadow: 0px 4px 12px 0 rgba(0, 0, 0, 0.1);width:260px;height: 400px;margin:20px;"
  >
    <!-- 侧边栏 -->
    <h3 v-if="!this.Logged">
      <el-button icon="el-icon-user" round @click="login">点击登陆</el-button>
    </h3>
    <h3 v-else>
      <span style="color:#409EFF;font-size: 1.1em;">{{this.Me.nickname}}</span>的博客
    </h3>

    <br />
    <div v-if="!this.Logged">
      <p>登陆后发现更多精彩</p>
    </div>
    <div v-else>
      <p>欢迎你 {{Me.nickname}}</p>
      <p>当前状态：{{Me.status}}</p>
      <br />
      <p>今天要做些什么呢？</p>
      <br />
      <br />
      <h3>
        <el-button icon="el-icon-switch-button" round @click="logout">退出登陆</el-button>
      </h3>
    </div>
  </el-card>
</template>

<script>
import * as API from "@/api/user/";
export default {
  name: "SideBar",
  components: {},
  data() {
    return {
      Me: [],
      Logged: false
    };
  },
  inject: ["reload"],
  methods: {
    load() {
      API.getMe().then(res => {
        if (res.code === 0) {
          this.Logged = true;
          this.Me = res.data;
        }
      });
    },
    login() {
      this.$router.push("/login");
    },
    logout() {
      API.userLogout().then(res => {
        if (res.code > 0) {
          this.$notify.error({
            title: "登出失败",
            message: res.msg
          });
        } else {
          this.$message({
            showClose: true,
            message: "登出成功嗷",
            type: "success"
          });
          this.$router.push("/");
          this.reload();
        }
      });
    }
  },
  beforeMount() {
    this.load();
  }
};
</script>

<style>
</style>