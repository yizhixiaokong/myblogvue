<template>
  <div>
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <el-form
          :model="user"
          :rules="rules"
          ref="user"
          label-width="80px"
          label-position="left"
        >
          <el-form-item label="用户名:" prop="user_name">
            <el-input v-model="user.user_name" placeholder="请输入用户名" style="width:250px"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input
              v-model="user.password"
              type="password"
              placeholder="请输入密码"
              style="width:250px"
            ></el-input>
          </el-form-item>
          <el-button style="width: 170px" type="primary" @click="doLogin('user')">登录</el-button>
          <el-button style="width: 170px" type="primary" @click="reg">注册</el-button>
          
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import * as API from "@/api/user/";
export default {
  name: "LoginView",
  data() {
    return {
      user: {
        user_name: "",
        password: ""
      },
      rules: {
        user_name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ]
      }
    };
  },
  inject: ["reload"],
  methods: {
    doLogin(formName) {
      //    alert(JSON.stringify(this.user))
      this.$refs[formName].validate(valid => {
        if (valid) {
          API.userLogin(this.user).then(res => {
            if (res.code === 40001) {
              this.open1();
              this.user.user_name = "";
              this.user.password = "";
            } else {
              this.open2();
              this.reload();
              this.$router.push("/");
            }
          });
        }
      });
    },
    reg() {
      this.$router.push("/register");
    },
    open1() {
      this.$message({
        showClose: true,
        message: "用户名或密码不正确嗷",
        type: "error"
      });
    },
    open2() {
      this.$message({
        showClose: true,
        message: "登陆成功嗷",
        type: "success"
      });
    }
  }
};
</script>
