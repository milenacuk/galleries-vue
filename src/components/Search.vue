<template>
<div>
    <div>
        <input v-model="search" class="form-control mr-sm-2" type="text" id="input" placeholder="Search" aria-label="Search">          
   </div>  
   <div>
       <button @click="filterGalleries" class="btn btn-outline-primary">Search</button>
   </div>
   </div>
</template>
<script>

export default {
    name: Search,
    data(){
        return{
            search: ''
        }
    },
     methods: {
       filterGalleries(){
           this.$emit('search', this.search);
       }
   }
}
</script>
