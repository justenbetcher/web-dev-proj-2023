import { createRouter, createWebHistory } from 'vue-router'

//imports from /views
import HomeView from '../views/HomeView.vue'
import FriendsView from '../views/FriendsView.vue'
import HistoryView from '../views/HistoryView.vue'

//imports from /views/LogExercise
import Calistenics from '../views/LogExerciseViews/Calistenics.vue'
import HIIT from '../views/LogExerciseViews/HIIT.vue'
import Run from '../views/LogExerciseViews/Run.vue'
import Swim from '../views/LogExerciseViews/Swim.vue'
import Walk from '../views/LogExerciseViews/Walk.vue'
import WeightTraining from '../views/LogExerciseViews/WeightTraining.vue'



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

		//objects for LogExerciseViews
		
		{
			path: '/exercise-calistenics',
			name: 'calistenics',
			component: Calistenics
		},
		{
			path: '/exercise-hiit',
			name: 'hiit',
			component: HIIT
		},
		{
			path: '/exercise-run',
			name: 'run',
			component: Run
		},
		{
			path: '/exercise-swim',
			name: 'swim',
			component: Swim
		},
		{
			path: '/exercise-walk',
			name: 'walk',
			component: Walk
		},
		{
			path: '/exercise-weightTraining',
			name: 'weightTraining',
			component: WeightTraining
		},
		

		//Main Views
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
