<template>
  <div>
    <div style="display: flex; justify-content: center; margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>注册</span>
        </div>
        <el-form
          :model="register"
          :rules="rules"
          ref="register"
          label-width="100px"
          label-position="left"
        >
          <el-form-item label="用户名:" prop="user_name">
            <el-input
              v-model="register.user_name"
              placeholder="请输入用户名"
              style="width: 250px"
            ></el-input>
          </el-form-item>
          <el-form-item label="昵称:" prop="nickname">
            <el-input
              v-model="register.nickname"
              placeholder="请输入昵称"
              style="width: 250px"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input
              v-model="register.password"
              type="password"
              placeholder="请输入密码"
              style="width: 250px"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码确认:" prop="password_confirm">
            <el-input
              v-model="register.password_confirm"
              type="password"
              placeholder="请再次输入密码"
              style="width: 250px"
            ></el-input>
          </el-form-item>
          <el-button
            style="width: 350px"
            type="primary"
            @click="doRegister('register')"
            >注册</el-button
          >
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import * as API from "@/api/user/";
export default {
  name: "RegisterView",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.register.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      register: {
        nickname: "",
        user_name: "",
        password: "",
        password_confirm: "",
      },
      rules: {
        user_name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 5,
            max: 30,
            message: "长度在 5 到 30 个字符",
            trigger: "blur",
          },
        ],
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          {
            min: 2,
            max: 30,
            message: "长度在 2 到 30 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 8,
            max: 40,
            message: "长度在 8 到 40 个字符",
            trigger: "blur",
          },
        ],
        password_confirm: [
          {
            required: true,
            validator: validatePass,
            trigger: "blur",
          },
          {
            min: 8,
            max: 40,
            message: "长度在 8 到 40 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    doRegister(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          API.userRegister(this.register).then((res) => {
            if (res.code > 0) {
              this.$notify.error({
                title: "注册失败",
                message: res.msg,
              });
            } else {
              this.open();
              this.$router.push("/login");
            }
          });
        }
      });
    },
    open() {
      this.$message({
        showClose: true,
        message: "注册成功嗷",
        type: "success",
      });
    },
  },
};
</script>
