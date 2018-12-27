import http from './http-service.js';


class AuthService{
    login(email,password){
        return http.post('auth/login', {
            email,
            password
        }).then(({data}) => data);
    }
    register(first_name, last_name, email, password, password_confirmation,terms){
        return http.post('auth/register', {
            first_name,
            last_name,
            email,
            password,
            password_confirmation,
            terms
        }).then(({data})=> data)
        .catch(error => {
            return Promise.reject(error.response.data.errors)

        })
         
        
    }

    setAuthHeaders(token){
        if(!token){
            delete http.defaults.headers.common['Authorization'];
            return;
        }
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    // loginUser(data){
    //     localStorage.setItem('token', data.token);
    //     localStorage.setItem('user', JSON.stringify(data.user));
    //     this.setAuthHeaders(data.token);
    // }
}

const checkForInitaialToken = authService => {
    let token = localStorage.getItem('token');
    if(token){
        authService.setAuthHeaders(token);
    }
}
const authService = new AuthService();
checkForInitaialToken(authService);

export default authService;