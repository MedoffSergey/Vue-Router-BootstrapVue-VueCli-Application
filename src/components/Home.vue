<template>
  <div class="home">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template v-slot:header>PostsMan</template>

      <template v-slot:lead>
        Быть в курсе текущих новостей
      </template>

      <hr class="my-2">
      <p>
        Этот сервис предоставляет информацию в постах о текущих событиях
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {

    }
  }
}
</script>
