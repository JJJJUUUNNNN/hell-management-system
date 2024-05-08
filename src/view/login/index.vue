<template>
  <div class="login-box">
    <div class="login">
      <n-form
        ref="formRef"
        :model="data"
        :rules="rules"
        label-placement="left"
        label-width="auto"
        require-mark-placement="right-hanging"
        size="large"
      >
        <n-form-item label="用户名:" path="username">
          <n-input v-model:value="data.username" placeholder="请输入用户名" />
        </n-form-item>
        <n-form-item label="密码:" path="password">
          <n-input v-model:value="data.password" placeholder="请输入密码" />
        </n-form-item>
        <n-form-item label="验证码:" path="code">
          <n-input v-model:value="data.code" placeholder="请输入密码" />
        </n-form-item>
        <img :src="src" alt="" @click="getCode()" />
        <div style="display: flex; justify-content: center">
          <n-button round type="primary" @click="handleLogin()">
            登录
          </n-button>
        </div>
      </n-form>

      <div class="form-item">
        <router-link to="/about">about</router-link>
        <span>-</span>
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/store/modules/user";
import { getCaptchaImage } from "@/api/login";

const userStore = useUserStore();

// const message = useMessage();
const data = ref({
  username: "admin",
  password: "admin123",
  code: "",
  uuid: "",
});

const rules = ref({
  username: {
    required: true,
    trigger: ["blur", "input"],
    message: "请输入 inputValue",
  },
  password: {
    required: true,
    trigger: ["blur", "input"],
    message: "请输入 inputValue",
  },
});

const formRef = ref();

function handleLogin() {
  userStore.login(data.value).then((res) => {
    router.replace("/home");
  });
  // formRef.value?.validate((err: any) => {
  //   if (!err) {
  //     message.success("验证成功！");
  //   } else {
  //     message.error("验证失败");
  //   }
  // });
}

const base64 = ref("");

const src = ref("");

function getCode() {
  getCaptchaImage().then((res) => {
    src.value = `data:image/gif;base64,${res.img}`;
    data.value.uuid = res.uuid;
    base64.value = res;
  });
}
getCode()
</script>

<style lang="scss">
.login-box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #e1cb26, $alpha: 0.5);

  .login {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 250px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: rgba($color: #ecbb8d, $alpha: 0.5);

    .form-item {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    span {
      margin: 0 10px;
    }

    a {
      color: #333;
    }
  }
}
</style>
