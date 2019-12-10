<template>
  <div class="container ">
    <Loading v-if='loading==true'/> <!--рендерим компонент Загрузки-->
      <div class="col-md-12 col-lg4 text-center my-3"  v-for="(data,index) in postsList" :key="index">
        <div>
          <b-card>
            <b-card-text>
              <h3>{{data.title}}</h3>
            </b-card-text>
            <b-button  variant="primary" @click="goTodetail(data.id) ">Ознакомиться</b-button>
          </b-card>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'; // Импортируем axios для связи с Бэкендом

import Loading from '../components/Loading.vue';  // Импортируем компонент Загрузки

export default {
  components: { // Добавим локальные компоненты
    Loading
  },
  data() {
    return {
      postsList: [],  //  Массив для хранения постов
      loading : true  //  Флажог для условной отрисовки при загрузке данных
    }
  },
  methods: {
    goTodetail(prodId) {
      this.$router.push({
        name: 'PostId',
        params: {
          Pid: prodId
        }
      })
    }
  },
  mounted() { // Получаем таблицу с постами
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {this.postsList = response.data; this.loading = false})
  }
}
</script>
