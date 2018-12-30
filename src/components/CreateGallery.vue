<template>
   <div>
    <!-- <h1>{{ editing ? 'Edit Gallery' : 'Create Gallery'}}</h1> -->
    <form @submit.prevent="submit">
      <div class="form-group">
        <label>Title</label>
        <input
          v-model="gallery.title"
          type="text"
          class="form-control"
          placeholder="Title"
          minlength="2"
          maxlength="255"
          required
        >
        <div v-if="errors">
            <error-form v-if="errors.title">{{ errors.title[0] }}</error-form>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea
            v-model="gallery.description"
            type="text"
            class="form-control"
            placeholder="Description"
            maxlength="1000"
          ></textarea>      
        <div v-if="errors">
            <error-form v-if="errors.description">{{ errors.description[0] }}</error-form>
        </div>   
        </div>

        <label>Image URL</label>
        <div class="form-group" v-for="(n, index) in range" :key="index">
          <div class="input-group mb-3">
            <input
              type="url"
              placeholder="Image Url"
              v-model="images[index].image_url"
              pattern="https?://.+(png|jpg|jpeg)"
              class="form-control"
              required
            >   
            <div v-if="errors">
          <error-form v-if="errors.images">At least one image is required.</error-form>
          <error-form v-if="errors[`images.${index}.image_url`]">Invalid format.</error-form>
        </div>         
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-outline-primary" @click="addUrl">Add Field</button>
      <button type="submit" class="btn btn-outline-primary">Create</button>
      
      <button type="button" class="btn btn-outline-dark" @click="onCancel">Cancel</button>
    </form>
    </div>
</template>

<script>

import allGalleriesService from './../services/all-galleries-service.js';
import ErrorForm from './ErrorForm';

export default {
    name: 'CreateGallery',  
    components: {
        ErrorForm
    }, 
    data(){
        return{
            range: 1,
            gallery: {
              title: '',
              description: '',
              images: [],
            },
            images:[{ image_url: ''}],
            errors: {}             
        }
    },
    methods: {       
        submit(){         
            this.gallery.images = this.images;          
            // console.log(this.images)
          allGalleriesService.createGallery(this.gallery)
            .then(() => {
              this.errors = {}
              this.gallery = {}
              this.$router.push({name:'home'})
            }).catch(errors => {
              this.errors = errors.response.data.errors
            }) 
        },
        addUrl(){
            this.range++;
            this.images.push({image_url: ''})
        },
        onCancel(){
          this.$router.push({ name: 'home'});
        }
    }
   
}
</script>
