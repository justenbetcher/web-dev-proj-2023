import { ref } from 'vue';
import { useSession } from './session';
import type { Exercise } from './exercise';

const exerciseFeed = ref([] as post[]);
const session = useSession();

export function useFeed() {
    return exerciseFeed;
}


interface post {
    name: string;
    exercise: Exercise;
    date: Date;
}

export function makePost(exercisePassed: Exercise){
    exerciseFeed.value.push ({
        name: session.user.name,
        exercise: exercisePassed,
        date: new Date(),
    });
}
