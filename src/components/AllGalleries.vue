<template>
<div>     
    <div v-if="galleries">
    <div class="col-lg-6 portfolio-item" v-for="gallery in galleries" :key="gallery.id">
          <div class="card h-100">             
              <img v-if="gallery.images[0].image_url" class="card-img-top"  :src="gallery.images[0].image_url" alt> 
            <div class="card-body">
              <h4 class="card-title">
                  <router-link :to="{name:'single-gallery', params: {id:gallery.id}}">{{ gallery.title }}</router-link>              
              </h4>
                  <router-link :to="{name:'author-gallery', params: {id:gallery.user.id}}">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link>                              
              <p class="card-text">{{ gallery.user.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>                         
            </div>
          </div>           
      </div>
      <button v-if="nextPage" type="button" @click="loadMore" class="btn btn-primary">Load more</button>
            <br>
    </div>
    <div v-else>
            <p>Does not galleries</p>
        </div>   
    </div>
   
</template>

<script>
import {  mapGetters, mapActions } from 'vuex'

export default {
    name: 'AllGalleries',
    data(){
        return{
            page:1,
            term: ''
        }
    },
    created() {   
        this.getAllGalleries()
    
    },
    methods: {        
        ...mapActions(['getAllGalleries', 'loadMoreAllGalleries']),
        
        loadMore(){
            this.page++;
            console.log(this.galleries); 
            this.loadMoreAllGalleries(this.page);                 
        }
        
    },
    computed: {
        ...mapGetters({           
            galleries: 'getGalleries',
            nextPage :'getNextPageUrl',
           
        })
    }
}
</script>
<style>
.portfolio-item {
  display: inline-block;
  width: 50%;
  margin-bottom: 40px;
}
.h-100 {
  box-shadow: 10px 10px 5px #bbbbbb;
}
</style>

