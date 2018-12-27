import Vue from 'vue';
import Vuex from 'vuex';
import allGalleriesStore from './all-galleries.store.js';
import authStore from './auth-store.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        allGalleriesStore,
        authStore,
    }
});

export default store;