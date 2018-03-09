import  Vue  from 'vue';

import App from './components/app.vue';
import store from './store/index';

var app = new Vue({
    el: '#root',
    store,
    render (h) {
        return h(App)
    }
});