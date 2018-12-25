<template>
    <div>
      <nav class="navbar navbar-dark bg-primary navbar-expand-sm font-italic">
        <!-- <router-link  class="nav-link" to="/">Galleries</router-link> -->
        <div class="collapse navbar-collapse">       
          <ul class="navbar-nav ml-auto"> 
              <li class="nav-item">                                         
                    <router-link  to="/" class="nav-link">All galleries</router-link>                
            </li>           
            <li class="nav-item">                             
              <router-link v-if="!user" to="/login" class="nav-link">Login</router-link>              
            </li>
            <li class="nav-item">          
              <router-link v-if="!user" to="/register" class="nav-link">Register</router-link>                             
            </li>
            <li class="navbar-item" >             
              <!-- <router-link v-if="user" @click="clickLogout" class="nav-link">Logout</router-link> -->
               <a class="nav-link" @click="onClickLogout" v-if="user">Logout</a>             
           </li>
          </ul>                   
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
.navbar-brand{
  color: firebrick !important;
}
form {
  margin: 0 auto;
  width: 40%;
}
input {
  border-radius: 10px;
}


</style>
