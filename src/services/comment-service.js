import http from './http-service.js';

class CommentService{
    addComment(galleryId,body){
        return http.post(`galleries/${galleryId}/comments`, body)
        .then(({data}) => console.log(data));
    }
    deleteComment(id){
        return http.delete(`comments/${id}`);
    }
}

const commentService = new CommentService();
export default commentService;