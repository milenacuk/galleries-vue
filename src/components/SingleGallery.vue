<template>
    <div>
 <!-- {{ gallery.images }} -->
 <div class="col-lg-6 portfolio-item">
    <p class="card-text">{{ gallery.title }}</p>             
        <p v-if="gallery.user" class="card-text">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</p>             
              <p class="card-text">{{ gallery.created_at }}</p>  
               <div>
    <b-carousel id="carousel1"
                controls
                indicators
                :interval="4000"
                img-width="1024"
                img-height="480"               
    >
    <div v-for="image in gallery.images" :key="image.id">
        <a :href="image.image_url">
      <!-- Slides with image only -->
      <b-carousel-slide>
          <img :src="image.image_url"
          slot="img"
           class="d-block img-fluid w-100"
           alt="img slot">
      </b-carousel-slide>   
      </a>
      </div>
    </b-carousel>
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
