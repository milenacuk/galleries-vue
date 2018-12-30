import http from './http-service.js';

class AllGalleriesService{
   
    getGalleries(page = 1, term = '') {
            return http
              .get(`galleries?page=${page}&term=${term}`)
              .then(({ data }) =>data.galleries);
        
    }
    getGallery(id){
        return http.get(`galleries/${id}`)
        // .then(({data}) => data)
        
    }
    getAuthorGallery(id){
        return http.get(`authors/${id}`)
        .then(({data}) => data)
    }
    getAuthAuthorGallery(id){
        return http.get(`authors-galeries/${id}`)
        .then(({data}) => data)
    }
    createGallery({title,description,images}){
        return http.post('galleries',{
            title,
            description,
            images
        })
    }
}

const allGalleriesService = new AllGalleriesService();
export default allGalleriesService;