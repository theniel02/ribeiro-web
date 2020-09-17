import http from 'vue-axios'
import config from '../serverSetings'


export default {
    auth: function() {
        http.get(config.urlAPI)
        .then(response => (this.info = response))
        .catch(err => {
            console.log(err);
        })
    },

    logout: function() {
        console.log("logout")
    }
}