<template>
  <div class="row">
        <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
          <img :src="data.image" class="img-fluid">
           <h3 @click="goTodetail(data.productId)" >{{data.productTitle}}</h3>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      title: 'Posts',
      products:[
      {
        productTitle:"ABCN",
        productId:1
      },
      {
        productTitle:"KARMA",
        productId:2
      },
      {
        productTitle:"Tino",
        productId:3
      },
      {
        productTitle:"EFG",
        productId:4
      },
      {
        productTitle:"MLI",
        productId:5
      },
      {
        productTitle:"Banans",
        productId:6
      }
      ]
    }
  },
  methods:{
    goTodetail(prodId) {
      this.$router.push({name:'details',params:{Pid:prodId}})
    }
  }
}
</script>

<style scoped>

</style>
