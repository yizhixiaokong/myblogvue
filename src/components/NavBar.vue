<template>
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
  <el-menu-item index="/">首页</el-menu-item>
  <el-menu-item index="/list">文章列表</el-menu-item>
  
  <el-menu-item index="/about">关于我</el-menu-item>

  <el-menu-item index="/postblog">写博客</el-menu-item>
  
</el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    // msg: String
  },
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
