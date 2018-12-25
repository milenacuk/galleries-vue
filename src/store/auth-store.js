import authService from './../services/auth-service.js';
import router from './../router'

const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    if(user){
        return JSON.parse(user);
    }
    
}
export default{
    state: {
        user: getUserFromLocalStorage(),
        token: localStorage.getItem('token'),
        errors: null
    },
    mutations: {
        SET_DATA(state, { user,token }){
            state.user = user;
            state.token = token;
            state.errors = null;
        },
        SET_ERRORS(state, payload){
            state.errors = payload;
        }
    },
    actions: {
        async login( {commit}, {email,password}){
            try{
                const{user,token} = await authService.login(email,password);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                authService.setAuthHeaders(token);
                commit('SET_DATA', {user,token});
                router.push( { name:'home'});
            }catch(error){
                commit('SET_ERRORS', error.response ? error.response.data.message : error);
                // commit('SET_ERRORS', error.response);
            }
        },
        logout( { commit }){
            authService.setAuthHeaders();
            localStorage.removeItem('user');
            localStorage.removeItem('token'),
            commit('SET_DATA', { user: null, token: null});
            router.push({ name: 'login'});
        },
        async register( {commit}, {first_name, last_name, email, password, password_confirmation, terms}){
            try{
                const{user,token} = await authService.register(first_name, last_name, email, password, password_confirmation, terms);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                authService.setAuthHeaders(token);
                commit('SET_DATA', {user,token});
                router.push( { name:'home'});
                
            } catch(error){
                commit('SET_ERRORS', error.response ? error.response.data.message : error)
                // commit('SET_ERRORS', error.response);
            }
        }
        
    }, 
    getters: {
        getUser(state){
            return state.user;
        },
        getErrors(state){
            return state.errors;
        }
    }
}