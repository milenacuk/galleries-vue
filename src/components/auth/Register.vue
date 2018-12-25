<template>
    <div>
        <form class="form-register"
        @submit.prevent="submitFormRegister">   
    <label class="sr-only">First Name</label>
      <input 
        type="text"       
        class="form-control" 
        placeholder="Enter first name" 
        autofocus=""
        v-model="first_name"
        required
      >    
      <label class="sr-only">Last Name</label>
      <input 
        type="text"       
        class="form-control" 
        placeholder="Enter last name" 
        autofocus=""
        v-model="last_name"
        required
      >            
    <label class="sr-only">Email address</label>
      <input 
        type="email" 
        id="inputEmail" 
        class="form-control" 
        placeholder="Enter email address" 
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
      >    
      <label class="sr-only">Confirm password</label>
      <input 
        type="password"    
        id="inputPassword"   
        class="form-control" 
        placeholder="Enter password" 
        v-model="password_confirmation"
      >    
      <div class="form-group">
        <input type="checkbox" class="form-check-input" v-model="terms">
        <label class="form-check-label" for="exampleCheck1">Accepted terms and conditions</label>
    </div>
      <button class="btn btn-lg btn-primary btn-block" 
      type="submit">Register</button>
      <!-- <ul v-if="errors">
        <li v-for="(index,error) in errors" :key="index" class="alert p-3 mb-2 alert-danger rounded">{{ error }}</li>
      </ul> -->
    </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data(){
        return{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: null,
            terms: null
        }
    },
    computed: {
        ...mapGetters({
            errors: 'getErrors'
        })
    },
    methods: {
        ...mapActions(['register']),
        submitFormRegister(){
            this.register({
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                terms: this.terms
            })
        }
    }
}
</script>
