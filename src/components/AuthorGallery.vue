<template>
   <div>
       <!-- {{authorGallery}} -->
       
    <div class="row" v-for="gallery in authorGallery" :key="gallery.id">
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
            <!-- <button v-if="nextPage" type="button" @click="loadMore" class="btn btn-primary">Load more</button> -->
            <br>
      </div>
      
    </div>
   </div>
</template>

<script>
import allGalleriesService from './../services/all-galleries-service.js';

export default {
    data(){
        return{
            authorGallery: {}
        }
    },
     beforeRouteEnter(to, form, next) {
        allGalleriesService.getAuthorGallery(to.params.id)
            .then(response => {
                next(vm => {                  
                    vm.authorGallery = response.galleries.data;
                    console.log(response.galleries.data)
                })
            })
    }
}
</script>
