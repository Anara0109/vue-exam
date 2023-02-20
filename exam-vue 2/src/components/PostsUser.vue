<template>
<EditPost v-if="modelWind" > </EditPost>
  <div v-for="post in postsUs" :key="post._id" class="my_posts flex">
    <div class="post_item">
      <h4>{{ post.email }}</h4>
      <h3 class="text_title">{{ post.title }}</h3>
      <p class="text_post">{{ post.post }}</p>
      <div>
        <div>
          <img class="like-img" src="./img/like (1).png" alt="" />
          {{ post.like }}
        </div>
        
        <button @click="changePost(post._id)" class="change_post">
          Редактировать пост
        </button>
        <button @click="deletePost(post._id)" class="delete_post">
          Удалить пост
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import EditPost from "./EditPost.vue"
  import url from "../url"
export default {
  components:{
    EditPost,
    url
  },
  data() {
    return {
      posts: [],
      postsUs: [],
      user: JSON.parse(localStorage.getItem("user")),
      modelWind: false
    };
  },
  methods: {
    newFunc() {
      fetch(url.BASE_URL + "/posts")
        .then((response) => response.json())
        .then((result) => {
          this.posts = result;
          this.postsUs = this.posts.filter(
            (item) => item.email == this.user.email
          );
        })
        .catch(() => console.log(err));
    },
    deletePost(id) {
      fetch(url.BASE_URL + "/posts/" + id, { method: "DELETE" })
        .then(() => alert("Delete"))
        .catch(() => alert("err"));
    },
    changePost(id){
      this.modelWind = !this.modelWind
      localStorage.setItem("idChangePost", id) 
    }
    
  },
  created() {
    this.newFunc();
  },
  updated() {
    this.newFunc();
  },
};
</script>

<style scoped>
p{
  color: #00fc9b;
}
.flex {
  display: flex;
}
.my_posts {
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}

.post_item {
  width: 500px;
  height: 100%;
  box-shadow: 0px 0px 10px #00fc9b;;
  margin-bottom: 30px;
  border-radius: 5px;
  padding: 20px 30px;
  box-sizing: border-box;
}

.like-img {
  width: 20px;
  height: 20px;
}

.text_post {
  font-size: 15px;
}

.text_date {
  font-size: 10px;
}
.change_post,
.delete_post {
  width: 155px;
  height: 25px;
  background-color: #00fc9b;;
  color: black;
  border-radius: 7px;
  cursor: pointer;
  position: relative;
  left: 50px;
  margin-right: 30px;
}

h4 {
  font-size: 17px;
  color: #00fc9b;;
  margin: 5px 0;
}

h3 {
  font-size: 20px;
  margin: 5px 0;
  color: #00fc9b;;
}
</style>