<template>
  <v-app>
    <v-card width="800px" class="mx-auto mt-5">
      <v-card-title class="text-Heading-3">
        <h4>ログイン</h4>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="ユーザ名(メールアドレス)"
            v-model="username"
            variant="outlined"
          />
          <v-text-field
            type="password"
            label="パスワード"
            v-model="password"
            variant="outlined"
          />
          <v-btn color="light-blue-darken-3" @click="login">
            ログインする
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.username, this.password);
      this.$router.push("/top");
    },
  },
};
</script>
