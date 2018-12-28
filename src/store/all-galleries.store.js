import allGalleriesService from './../services/all-galleries-service.js';

export default{    
    state: {
        allGalleries: [],
        errors: null,
        next_page_url: ''
            
    },
    actions: {
        async getAllGalleries({commit}, payload){
            try{            
                commit('SET_ALL_GALLERIES', await allGalleriesService.getGalleries(payload));                         
            }catch(errors){
                commit('SET_ERRORS', errors)
            }
        },       
    },
    mutations: {
        SET_ALL_GALLERIES(state,payload){
            state.allGalleries = payload.data;    
            state.next_page_url = payload.next_page_url; 
            //  console.log(payload.next_page_url)      
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
        },
        getNextPageUrl(state){
            return state.next_page_url;
        }
        
    }
}