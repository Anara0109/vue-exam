<template>
  <body>
    <div>
      <EditData v-if="editWind"></EditData>
      <Header></Header>
      <main>
        <div class="date">
          <div class="data_text">
            Имя: <span class="acc hpName">{{ user.name }}</span
            ><br />
            Фамилия: <span class="acc hpSurname">{{ user.surname }}</span
            ><br />
            Возраст: <span class="acc hpAge">{{ user.age }}</span
            ><br />
          </div>
          <button class="btn-data" @click="add">редактировать профиль</button>
        </div>
        <hr />
        <CreateNewPost />
        <hr />
        <PostsUser />
        <hr />
      </main>
    </div>
  </body>
</template>
<script>
import Header from "./Header.vue";
import EditData from "./EditData.vue";
import CreateNewPost from "./CreateNewPost.vue";
import PostsUser from "./PostsUser.vue";
export default {
  components: {
    Header,
    EditData,
    CreateNewPost,
    PostsUser,
  },
  data() {
    return {
      user: {},
      posts: JSON.parse(localStorage.getItem("posts")),
      editWind: false,
    };
  },
  methods: {
    add() {
      this.editWind = !this.editWind;
    },
    eddData() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },
  },
  created() {
    this.eddData();
  },
  beforeUpdate() {
    this.eddData();
  },
};
</script>
<style scoped>
.date {
  margin-top: 50px;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.data_text {
  color: #00fc9b;
  font-size: 20px;
  margin-top: 60px;
}
.acc {
  color: #00fc9b;
  font-size: 25px;
}
.btn-data {
  width: 110px;
  height: 40px;
  background-color: #00fc9b;;
  color: black;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 30px;
}
hr {
  margin: 50px 160px;
  border-bottom: 1px;
  box-shadow: 1px 1px 3px #00fc9b;;
}
</style>