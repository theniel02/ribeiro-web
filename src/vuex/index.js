import Vue from 'vue'
import Vuex from 'vuex';


Vue.use(Vuex);


const store = new Vuex.Store({
    state:  { 
        loaderIsActive: false,
        token: "",
        isAuthenticated: false,
        currentPage: "Login"
    },


    mutations: {

        showLoader: state=> state.loaderIsActive = true,


        hideLoader: state=> state.loaderIsActive = false,


        setCurrentPage: (state, payload) => {
            if(state.isAuthenticated)
                state.currentPage = payload
            else
                state.currentPage = 'Login'
        },


        signIn: (state, payload) => {
            state.loaderIsActive = true;
            setTimeout(() => {
                state.isAuthenticated = true;
                console.log(payload)
            }, 3000)
        },

    
        signOut: (state, payload) => {
            state.loaderIsActive = true;
            setTimeout(() => {
                state.isAuthenticated = false;
                console.log(payload)
            }, 3000)
        },


    },


    actions: {
        changePage: ({ commit }, payload) => commit('setCurrentPage', payload),
        signIn: ({ commit }, payload) => {
            
            commit('signIn', payload)
        },
        signOut: ({ commit }, payload) => commit('signIn', payload),
    }
})


export { store };

