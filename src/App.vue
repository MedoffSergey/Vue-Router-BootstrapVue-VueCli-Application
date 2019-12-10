<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="primary" sticky>
      <img src="https://image.flaticon.com/icons/svg/193/193110.svg" width="40px" height="40px" class="logo">
      <b-navbar-brand href="/"><i>PostsMan</i></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
          <li class="nav-item" >
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
  name: 'App',

  data() {
    return{
    }
  }
}
</script>
