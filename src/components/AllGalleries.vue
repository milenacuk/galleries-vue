<template>
<div>
<div v-for="gallery in galleries" :key="gallery.id">  
    <!-- {{ gallery.images}} -->
    
    <div class="row" v-for="gallery in galleries" :key="gallery.id">
        <div class="col-lg-6 portfolio-item">
          <div class="card h-100">             
              <img v-if="gallery.images[0].image_url" class="card-img-top"  :src="gallery.images[0].image_url" alt> 
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ gallery.title }}</a>
              </h4>
              <p class="card-text">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</p>             
              <p class="card-text">{{ gallery.user.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>             
            
            </div>
          </div>
      </div>
    </div>
    </div>
    </div>
</template>

<script>
import {  mapGetters, mapActions } from 'vuex'
export default {
    name: 'AllGalleries',
    created() {       
        this.getAllGalleries()
    },
    methods: {        
        ...mapActions(['getAllGalleries'])
    },
    computed: {
        ...mapGetters({           
            galleries: 'getGalleries'
        })
    }
}
</script>
