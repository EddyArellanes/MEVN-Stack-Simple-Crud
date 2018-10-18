//This is the main Frontend Vue App
import Vue from 'vue'
import App from './components/App.vue'
new Vue({
    render: h => h(App)
}).$mount('#app')