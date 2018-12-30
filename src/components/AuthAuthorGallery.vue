<template>
    <div v-if="authAuthor">
       <div class="row" v-for="gallery in authAuthor" :key="gallery.id">
        <div class="col-lg-6 portfolio-item">
          <div class="card h-100">             
              <img  class="card-img-top"  :src="gallery.images[0].image_url" alt> 
            <div class="card-body">
              <h4 class="card-title">
                  <router-link :to="{name:'single-gallery', params: {id:gallery.id}}">{{ gallery.title }}</router-link>          
              </h4>
                  <router-link :to="{name:'author-gallery', params: {id:gallery.user.id}}">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link>                          
              <p class="card-text">{{ gallery.user.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>             
            
            </div>
          </div>         
      </div> 
      <button v-if="authAuthor > 1" type="button" @click="loadMore" class="btn btn-primary">Load more</button>

    </div>
    </div>
</template>
<script>
import {  mapGetters, mapActions } from 'vuex'
import allGalleriesService from './../services/all-galleries-service.js';
export default {
    data(){
        return{
            authAuthor: [],
            page: 1
        }
    },
     beforeRouteEnter(to, form, next) {
        allGalleriesService.getAuthAuthorGallery(to.params.id)
            .then(response => {
                next(vm => {                  
                    vm.authAuthor = response.galleries.data;
                    // console.log(response)
                })
            })
    },
    methods: {        
        ...mapActions([ 'loadMoreAllGalleries']),
        
        loadMore(){
            this.page++;
            console.log(this.authAuthor); 
            this.loadMoreAllGalleries(this.page);                 
        }
        
    },
    computed: {
        ...mapGetters({           
            nextPage :'getNextPageUrl',
           
        })
    }
}
</script>
