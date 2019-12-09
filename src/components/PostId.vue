<template>
<div class="details">
  <div class="container">
    <div class="row">
      <div class="col-md-12" v-for="(product,index) in products" :key="index">
        <div v-if="proId == product.productId">
          <h1>{{product.productTitle}}</h1>
          <img :src="product.image" class="img-fluid">
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'details',
  data() {
    return {
      proId: this.$route.params.Pid,
      title: "details",
      products: [{
          productTitle: "ABCN",
          productId: 1
        },
        {
          productTitle: "KARMA",
          productId: 2
        },
        {
          productTitle: "Tino",
          productId: 3
        },
        {
          productTitle: "EFG",
          productId: 4
        },
        {
          productTitle: "MLI",
          productId: 5
        },
        {
          productTitle: "Banans",
          productId: 6
        }
      ]

    }
  }
}
</script>
