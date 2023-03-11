import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'

//imports from /views
import HomeView from '../views/HomeView.vue';
import LogInView from '../views/LogInView.vue';
import FriendsView from '../views/FriendsView.vue';
import HistoryView from '../views/HistoryView.vue';
import LogExerciseView from '../views/LogExerciseView.vue';
import FeedView from '../views/FeedView.vue';

//imports from /components
import LogIn from '../components/LogIn.vue';
import SignUp from '../components/SignUp.vue';


//imports from /views/LogExercise
import Calistenics from '../views/LogExerciseViews/Calistenics.vue';
import HIIT from '../views/LogExerciseViews/HIIT.vue';
import Run from '../views/LogExerciseViews/Run.vue';
import Swim from '../views/LogExerciseViews/Swim.vue';
import Walk from '../views/LogExerciseViews/Walk.vue';
import WeightTraining from '../views/LogExerciseViews/WeightTraining.vue';

//imports from model
import { useSession } from '../model/session.ts';


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [

		//objects for main views
		{
			path: '/',
			name: 'home',
			component: HomeView,
			beforeEnter: secureRoute,
		},
		{
			path: '/login',
			name: 'login',
			component: LogInView
		},
		{
			path: '/login-login',
			name:'login-login',
			component: LogIn
		},
		{
			path: '/login-signup',
			name: 'login-signup',
			component: SignUp
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
		{
			path: '/feed',
			name: 'feed',
			component: FeedView
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

function secureRoute (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
	const session = useSession();
	if (session.user) {
		next();
	} else {
		next('/login');
	}
	
}