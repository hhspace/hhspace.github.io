const Foo = { template: '<div class="foo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, veniam. Ex praesentium quis amet maiores dolor in explicabo maxime pariatur, saepe, nulla enim ea, ipsum laboriosam cupiditate modi ipsa ipsam.</div>' }
const Bar = {  template: '<div class="bar">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sint maxime sit et corrupti architecto eius, esse dolor voluptatum vel, illo laboriosam ut distinctio! Ducimus molestiae temporibus explicabo quibusdam impedit?</div>' }
 

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
 
const router = new VueRouter({
  routes // сокращение от routes: routes
})

 
const place = new Vue({
  router
}).$mount('#place')