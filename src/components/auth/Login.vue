<template>
<div class="login-form">
    <div class="main-div">
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
        required
      >
      <label class="sr-only">Password</label>
      <input 
        type="password"    
        id="inputPassword"   
        class="form-control" 
        placeholder="Password" 
        v-model="password"
        required
      >      
      <button class="btn btn-lg btn-primary btn-block" 
      type="submit">Sign in</button>
      </form>
    </div>
    <error-form v-if="errors">{{ errors }}</error-form>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ErrorForm from './../ErrorForm';
export default {
    components: {
        ErrorForm
    },
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

<style>
.main-div {
  background: #ffffff none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 38%;
  /* padding: 50px 70px 70px 71px; */
}
.login-form .form-group {
  margin-bottom:10px;
}
.login-form{ text-align:center;}
.login-form .form-control {
  background: #f7f7f7 none repeat scroll 0 0;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
}


</style>
