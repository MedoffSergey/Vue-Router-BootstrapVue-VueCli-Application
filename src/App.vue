<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="primary">
      <b-navbar-brand href="/"><i>PostsMan</i></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Главная</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Posts">Посты</router-link>
          </li>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
#app {

}
</style>
