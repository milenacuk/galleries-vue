import allGalleriesService from './../services/all-galleries-service.js';

export default{    
    state: {
        allGalleries: [],
        errors: null,
        oneGallery:{}      
    },
    actions: {
        async getAllGalleries({commit}){
            try{            
                commit('SET_ALL_GALLERIES', await allGalleriesService.getGalleries());                         
            }catch(errors){
                commit('SET_ERRORS', errors)
            }
        },       
    },
    mutations: {
        SET_ALL_GALLERIES(state,galleries){
            state.allGalleries = galleries;     
             console.log(state.allGalleries)      
        },
        SET_ERRORS(state,payload){
            state.errors = payload;
        },
        SET_GALLERY(state,gallery){
            state.oneGallery = gallery.data;
        }
    },
    getters: {
        getGalleries(state){           
             return state.allGalleries;  
            
                    
        },
        getErrorsGalleries(state){
            return state.errors;
        },
        getOneGallery(state){
            return state.oneGallery;
        }
    }
}