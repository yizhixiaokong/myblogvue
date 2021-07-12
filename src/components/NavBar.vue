<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :default-active="activeIndex"
    @select="handleSelect"
    router
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/list">文章列表</el-menu-item>
    <el-menu-item index="/postblog">写博客</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    // msg: String
  },
  data() {
    return {
      activeIndex: "/"
    };
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
