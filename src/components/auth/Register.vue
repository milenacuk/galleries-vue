<template>
    <div class="main-div">
        <form class="form-register"
        @submit.prevent="submitFormRegister">   
        <h1 class="h3 mb-3 font-weight-normal">Please register</h1>
    <div class="form-group">
        <label class="sr-only">First Name</label>
            <input 
            type="text"       
            class="form-control" 
            placeholder="Enter first name" 
            autofocus=""
            v-model="first_name"
            required
        >  
      <div v-if="errors">
        <error-form v-if="errors.first_name">{{ errors.first_name[0] }}</error-form>
     </div> 
        </div> 
        <div class="form-group">
      <label class="sr-only">Last Name</label>
      <input 
        type="text"       
        class="form-control" 
        placeholder="Enter last name" 
        autofocus=""
        v-model="last_name"
        required
      >  
      <div v-if="errors">
        <error-form v-if="errors.last_name">{{ errors.last_name[0] }}</error-form>
     </div> 
      </div>  
       <div class="form-group">        
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
      <div v-if="errors">
        <error-form v-if="errors.email">{{ errors.email[0] }}</error-form>
     </div> 
      </div>
       <div class="form-group"> 
      <label class="sr-only">Password</label>
      <input 
        type="password"    
        id="inputPassword"   
        class="form-control" 
        placeholder="Password" 
        v-model="password"
        required
      > 
      <div v-if="errors">
        <error-form v-if="errors.password">{{ errors.password[0] }}</error-form>
     </div>
      </div>
       <div class="form-group"> 
      <label class="sr-only">Confirm password</label>
      <input 
        type="password"         
        class="form-control" 
        placeholder="Enter password" 
        v-model="password_confirmation"
        required
      >  
      <div v-if="errors">
        <error-form v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</error-form>
     </div>
      </div>  
      <div class="form-group">
        <input type="checkbox" class="form-check-input" v-model="terms" required>
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
import ErrorForm from './../ErrorForm';
export default {
    components: {
        ErrorForm
    },
    data(){
        return{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            terms: false
         
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
            // console.log(this.password_confirmation)
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

<style>
.main-div {
  background: #ffffff none repeat scroll 0 0;
  border-radius: 2px;
  margin: 10px auto 30px;
  max-width: 38%;
  /* padding: 50px 70px 70px 71px; */
}
</style>
