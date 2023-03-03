import { createRouter, createWebHistory } from 'vue-router'

//imports from /views
import HomeView from '../views/HomeView.vue'
import FriendsView from '../views/FriendsView.vue'
import HistoryView from '../views/HistoryView.vue'
import LogExerciseView from '../views/LogExerciseView.vue'


//imports from /views/LogExercise
import Calistenics from '../views/LogExerciseViews/Calistenics.vue'
import HIIT from '../views/LogExerciseViews/HIIT.vue'
import Run from '../views/LogExerciseViews/Run.vue'
import Swim from '../views/LogExerciseViews/Swim.vue'
import Walk from '../views/LogExerciseViews/Walk.vue'
import WeightTraining from '../views/LogExerciseViews/WeightTraining.vue'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [

		//objects for main views
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/exercise',
			name: 'exercise',
			component: LogExerciseView
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
  	]
})

export default router
