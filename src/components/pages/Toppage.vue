<template>
  <v-main>
    <v-container>
      <h1 class="h1">日報データ登録</h1>
      <v-card>
        <v-card-text>日報作成者</v-card-text>
        <v-text-field variant="outlined" v-model="author"></v-text-field>
        <v-card-text>作業内容</v-card-text>
        <v-text-field variant="outlined" v-model="work_content"></v-text-field>
        <v-card-text>作業コメント</v-card-text>
        <v-text-field variant="outlined" v-model="work_report"></v-text-field>
        <v-card-actions>
          <v-btn
            @click="putNippo()"
            class="mx-auto"
            color="primary"
            variant="outlined"
            >登録</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";

const OBA_BASE_URL = import.meta.env.VITE_API_OBA_BASEURL;
const API_PATH = "daily-reports";
const endpoint = OBA_BASE_URL + API_PATH;

export default {
  data: () => ({
    author: "",
    work_content: "",
    work_report: "",
    isLoading: true,
  }),
  components: {},
  methods: {
    async putNippo() {
      this.isLoading = true;
      const author = this.author;
      const work_content = this.work_content;
      const work_report = this.work_report;

      const params = { author, work_content, work_report };
      const res = await axios
        .post(endpoint, params)
        .then((response) => {
          this.Loading = false;
          Swal.fire({
            icon: "success",
            title: "success!!",
            text: "データ追加出来たよ！",
          });
          console.log(response);
        })
        .catch(function (error) {
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.log(error);
        });
    },
  },
};
</script>
