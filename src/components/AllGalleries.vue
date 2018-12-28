<template>
<div>     
    <search  @search="filterGalleries"></search>
    <div v-if="galleries.length">
    <div class="row" v-for="gallery in galleries" :key="gallery.id">
        <div class="col-lg-6 portfolio-item">
          <div class="card h-100">             
              <img v-if="gallery.images[0].image_url" class="card-img-top"  :src="gallery.images[0].image_url" alt> 
            <div class="card-body">
              <h4 class="card-title">
                  <router-link :to="{name:'single-gallery', params: {id:gallery.id}}">{{ gallery.title }}</router-link>
               
              </h4>
              <p class="card-text">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</p>             
              <p class="card-text">{{ gallery.user.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>             
            
            </div>
          </div>
            <button type="button" @click="loadMore" class="btn btn-primary">Load more</button>
            <br>
      </div>
      </div>
    </div>
    <div v-else>
            <p>Does not galleries</p>
        </div>   
    </div>
   
</template>

<script>
import {  mapGetters, mapActions } from 'vuex'
import Search from './components/Search.vue'
export default {
    name: 'AllGalleries',
    components: {
        Search
    },
    data(){
        return{
            page:1,
            nextPageUrl:'',
            term: ''
        }
    },
    created() {       
        this.getAllGalleries()
    
    },
    methods: {        
        ...mapActions(['getAllGalleries']),
        
        loadMore(){
            this.page++;
            nextPage(this.page)
                .then(response => {
                this.galleries = galleries.concat(response.data)  
                this.nextPageUrl = nextPage.response
                console.log(this.nextPageUrl)
            })

        },
        search(term){
            this.page = 1;
            this.term = term;
            this.galleries = galleries(this.page,this.term)
                .then(galleries => {
                    this.galleries = galleries
                    
                })
        }
    },
    computed: {
        ...mapGetters({           
            galleries: 'getGalleries',
            nextPage :'getNextPageUrl'
        })
    }
}
</script>
