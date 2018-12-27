import allGalleriesService from './../services/all-galleries-service.js';

export default{    
    state: {
        allGalleries: [],
        errors: null        
    },
    actions: {
        async getAllGalleries({commit}){
            try{            
                commit('SET_ALL_GALLERIES', await allGalleriesService.getGalleries());                         
            }catch(error){
                commit('SET_ERRORS', errors)
            }
        }
    },
    mutations: {
        SET_ALL_GALLERIES(state,galleries){
            state.allGalleries = galleries.data;     
            //  console.log(state.allGalleries)      
        },
        SET_ERRORS(state,payload){
            state.errors = payload;
        }
    },
    getters: {
        getGalleries(state){           
             return state.allGalleries;  
            
                    
        },
        getErrorsGalleries(state){
            return state.errors;
        }
    }
}