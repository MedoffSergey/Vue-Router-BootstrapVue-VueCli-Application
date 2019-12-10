<template>
  <div class="container my-3">
    <Loading v-if='loading==true' />
    <div class="col-md-12" v-for="(product,index) in post" :key="index">
      <div v-if="proId == product.id">
        <b-card>
          <b-card-text>
            <h3>{{product.title}}</h3>
            <p>{{product.body}}</p>
          </b-card-text>
          <router-link class="nav-link" to="/Posts">Назад</router-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; //Импортируем axios для связи с Бэкендом

import Loading from '../components/Loading.vue'; // Импортируем компонент Загрузки

export default {
  components: { // Добавим локальные компоненты
    Loading
  },
  data() {
    return {
      proId: this.$route.params.Pid,
      post: [], //  Массив для хранения поста
      loading: true, //  Флажог для условной отрисовки при загрузке данных
      localStoragepost: '',
      checkLocalStoragepost: localStorage.getItem('posts')
    }
  },
  async mounted() {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/?id=${this.proId}`)
      .then(response => {
        this.post = response.data;
        this.loading = false;

        if (!this.checkLocalStoragepost) {
          this.localStoragepost = JSON.stringify(this.post);
          localStorage.setItem('posts', `${this.localStoragepost}`)
        }
      })
      .catch(err => (console.log(err)))
  }
}
</script>
