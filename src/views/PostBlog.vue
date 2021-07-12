<template>
  <div class="post-blog">
    <h1>文章发布</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label>
        <el-input v-model="form.title" show-word-limit maxlength="30" placeholder="请输入标题(不超过30字)"></el-input>
      </el-form-item>
      <el-form-item label>
        <el-input
          type="textarea"
          show-word-limit
          maxlength="2000"
          :autosize="{ minRows: 4, maxRows: 10}"
          placeholder="请输入内容"
          v-model="form.details"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即发布</el-button>
        <el-button>保存草稿</el-button>
        <el-button>返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import * as API from "@/api/blog/";
export default {
  name: "PostBlog",
  data() {
    return {
      form: {
        title: "",
        details: ""
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.form.title == "") {
        this.$notify.error({
          title: "发布失败",
          message: "标题不能为空"
        });
      } else if (this.form.details == "") {
        this.$notify.error({
          title: "发布失败",
          message: "内容不能为空"
        });
      } else {
        API.postBlog(this.form)
          .then(res => {
            if (res.code > 0) {
              this.$notify.error({
                title: "发布失败",
                message: res.msg
              });
            } else {
              this.$notify({
                title: "发布成功",
                message: `文章ID：${res.data.id}`,
                type: "success"
              });
              this.form.title="";
              this.form.details="";
              this.$router.push("/list");
            }
          })
          .catch(error => {
            this.$notify.error({
              title: "网络错误",
              message: error
            });
          });
      }

      console.log("submit!");
      console.log("title:" + this.form.title);
      console.log("details:" + this.form.details);
    }
  }
};
</script>

<style>
div.el-form-item__content {
  margin-left: 0px !important;
}
</style>