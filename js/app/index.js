const Home = { template: '<div class="home">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, veniam. Ex praesentium quis amet maiores dolor in explicabo maxime pariatur, saepe, nulla enim ea, ipsum laboriosam cupiditate modi ipsa ipsam.</div>' }
const Contacts = {  template: '<div class="contacts">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sint maxime sit et corrupti architecto eius, esse dolor voluptatum vel, illo laboriosam ut distinctio! Ducimus molestiae temporibus explicabo quibusdam impedit?</div>' }
 

const routes = [
  { path: '/home', component: Home },
  { path: '/contacts', component: Contacts }
]
 
const router = new VueRouter({
  routes // сокращение от routes: routes
})

 
const index = new Vue({
  router
}).$mount('#index')
