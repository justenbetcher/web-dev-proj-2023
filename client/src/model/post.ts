import { ref } from 'vue';
import type { User } from './session';
import type { Swim, RunWalk } from './exercise'


const exercisePost = ref([] as post[])

interface post {
    name: User,
    swim?: Swim,
    run?: RunWalk,
    walk?: RunWalk,
}
