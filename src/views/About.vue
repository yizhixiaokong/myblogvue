<template>
  <div class="about">
    <div v-if="logged">
      <h1>
        关于
        <span style="font-size: 1.1em;">{{Me.nickname}}</span>
      </h1>
      <!-- todo 改成user信息 -->
      <p>努力工作赚钱养家中，目标全栈，奥利给！</p>
      <p>用户状态：{{Me.status}}</p>
    </div>
    <div v-else>
      <h1>
        关于SORA博客
      </h1>
      <p>一个目标简单、简约的博客系统</p>
    </div>
  </div>
</template>


<script>
import * as API from "@/api/user/";
export default {
  name: "ListView",
  data() {
    return {
      Me: [],
      logged: false
    };
  },
  components: {},
  methods: {
    load() {
      API.getMe().then(res => {
        if (res.code !== 401) {
          this.logged = true;
          this.Me = res.data;
        } else {
          this.logged = false;
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
.box-card {
  margin-top: 30px;
}
</style>