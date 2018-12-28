<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary  fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">All Galleries</router-link>
        <router-link class="navbar-brand" :to="{name:'auth-author-gallery', params: {id:user.id}}" v-if="user" >My Galleries</router-link>
        <router-link class="navbar-brand" to="#" v-if="user">Create New Gallery</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/login" v-if="!user">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register" v-if="!user">Register</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="onClickLogout" v-if="user">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Navbar',
    methods: {
      ...mapActions(['logout']),
       onClickLogout(){        
         this.logout();
       }
    },
    computed: {
      ...mapGetters({
        user: 'getUser'
      })
    }
}
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
/* .navbar-brand{
  color: firebrick !important;
} */
form {
  margin: 0 auto;
  width: 40%;
}
input {
  border-radius: 10px;
}



</style>
