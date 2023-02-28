import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
		//path: '<added path that will be concatinated to the url>',
		//name: '<name of object>',
		//component: '<name of .vue you want to be displayed>', (this has to be imported on top or lazy imported)
		//lazy import ====> component: () => import('<file path>')
    }
  ]
})

export default router
