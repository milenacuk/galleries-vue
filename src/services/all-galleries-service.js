import http from './http-service.js';

class AllGalleriesService{
    getGalleries(page = 1){
        return http.get('galleries',{ params: { page }})
            .then(({data}) => data)
    }
    getGallery(id){
        return http.get(`galleries/${id}`)
        .then((response) => response)
    }
}

const allGalleriesService = new AllGalleriesService();
export default allGalleriesService;