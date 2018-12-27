<template>
    <div>
 <!-- {{ gallery.images }} -->
 <div class="col-lg-6 portfolio-item">
    <p class="card-text">{{ gallery.title }}</p>             
        <p v-if="gallery.user" class="card-text">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</p>             
              <p class="card-text">{{ gallery.created_at }}</p>                  
          <div class="card h-100" v-for="image in gallery.images" :key="image.id">             
              <img  class="card-img-top"  :src="image.image_url" alt> 
          <!-- <div class="card-body">           
            </div> -->
          </div>
      </div>
    </div>
</template>

<script>
import allGalleriesService from './../services/all-galleries-service.js';

export default {
    data(){
        return{
            gallery: {}
        }
    },
    beforeRouteEnter(to, form, next) {
        allGalleriesService.getGallery(to.params.id)
            .then(response => {
                next(vm => {                  
                    vm.gallery = response.data;
                })
            })
    },
}
</script>
