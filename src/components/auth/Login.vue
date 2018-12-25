<template>
     <form class="form-signin"
        @submit.prevent="submitForm"> 
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label class="sr-only">Email address</label>
      <input 
        type="email" 
        id="inputEmail" 
        class="form-control" 
        placeholder="Email address" 
        autofocus=""
        v-model="email"
      >
      <label class="sr-only">Password</label>
      <input 
        type="password"    
        id="inputPassword"   
        class="form-control" 
        placeholder="Password" 
        v-model="password"
      >      
      <button class="btn btn-lg btn-primary btn-block" 
      type="submit">Sign in</button>
      <!-- <ul v-if="errors">
      <li v-for="(index,error) in errors" :key="index" class="alert p-3 mb-2 alert-danger rounded">{{ error }}</li>
    </ul> -->
    </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password:''
        }
    },
    methods: {
        ...mapActions(['login']),
        submitForm(){
            this.login({
                email: this.email,
                password: this.password
      })
        }
    },
    computed: {
        ...mapGetters({
            errors: "getErrors"
        })
    }
}
</script>
