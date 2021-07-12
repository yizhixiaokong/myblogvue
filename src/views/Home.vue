<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>SORA博客</h1>
    <p>属于你的你的简约博客</p>
    <el-card class="box-card" v-for="blog in blogs" :key="blog.id">
      <div slot="header" class="clearfix">
        <span style="font-size:20px;">{{blog.title}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="open1">阅读全文</el-button>
      </div>
      <div style="font-size:13px;color: #909399;">{{blog.details }}</div>
      <div style="font-size:13px;color: #5f6471;">
        <br />
        <!-- 作者动态获取 -->
        时间：{{timestampToTime(blog.created_at)}} / 作者：{{blog.author}}
      </div>
    </el-card>
  </div>
</template>

<script>
import * as API from "@/api/blog/";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Home",
  inject: ["timestampToTime"],
  data() {
    return {
      blogs: []
    };
  },
  components: {
    // HelloWorld,
  },
  methods: {
    load() {
      API.getBlogs().then(res => {
        this.blogs = res.data;
      });
    },
    open1() {
      this.$message({
        showClose: true,
        message: "已经是全部内容了嗷"
      });
    }
  },
  beforeMount() {
    this.load();
  }
};
</script>
