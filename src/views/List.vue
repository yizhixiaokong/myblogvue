<template>
  <div class="list">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>文章列表</h1>
    <p v-if="logged==2">当前未登陆，请登陆后查看</p>
    <p v-else-if="logged==1">加载中...</p>
    <p v-else>
      这里有好多好多文章
      <el-card class="box-card" v-for="blog in blogs" :key="blog.id">
        <div slot="header" class="clearfix">
          <span style="font-size:20px;">{{blog.title}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="open2(blog.id)">删除这篇</el-button>
          <el-button style="float: right; padding: 3px 0" type="text">&nbsp;</el-button>
          <el-button style="float: right; padding: 3px 0" type="text" @click="open1">阅读全文</el-button>
        </div>
        <div style="font-size:13px;color: #909399;">{{blog.details }}</div>
        <div style="font-size:13px;color: #5f6471;">
          <br />
          <!-- 作者动态获取 -->
          时间：{{timestampToTime(blog.created_at)}} / 作者：{{blog.author}}
        </div>
      </el-card>
    </p>
  </div>
</template>

<script>
import * as API from "@/api/blog/";
export default {
  name: "List",
  inject: ["timestampToTime"],
  data() {
    return {
      logged: 1,
      blogs: [],
    };
  },
  components: {},
  methods: {
    load() {
      API.getUserBlogs().then(res => {
        if (res.code == 401) {
          this.logged = 2;
          this.$notify.error({
            title: "获取列表失败",
            message: res.msg
          });
        } else {
          this.logged = 3;
          this.blogs = res.data;
        }
      });
    },
    open1() {
      this.$message({
        showClose: true,
        message: "已经是全部内容了嗷"
      });
    },
    open2(id) {
      this.$confirm("确定删除此博客?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          API.deleteBlog(id).then(res => {
            if (res.code == 40001) {
              this.$message({
                type: "warning",
                message: "博客删除失败"
              });
            } else {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.load();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    
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