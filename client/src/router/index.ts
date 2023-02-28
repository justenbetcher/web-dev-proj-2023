import { createRouter, createWebHistory } from 'vue-router'

//imports from /views
import HomeView from '../views/HomeView.vue'
import FriendsView from '../views/FriendsView.vue'
import HistoryView from '../views/HistoryView.vue'

//imports from /views/LogExercise
import Run from '../views/LogExerciseViews/Run.vue'

//imports from /components
import LogExerciseMenu from '../components/LogExerciseMenu.vue'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/exercise',
			name: 'exercise',
			component: LogExerciseMenu
			//path: '<added path that will be concatinated to the url>',
			//name: '<name of object>',
			//component: '<name of .vue you want to be displayed>', (this has to be imported on top or lazy imported)
			//lazy import ====> component: () => import('<file path>')
		},
		{
			path: '/exercise-run',
			name: 'run',
			component: Run
		},
		{
			path: '/friends',
			name: 'friends',
			component: FriendsView
		},
		{
			path: '/history',
			name: 'history',
			component: HistoryView
		}
		
  	]
})

export default router
