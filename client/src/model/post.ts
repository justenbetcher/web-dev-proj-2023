import { ref } from 'vue';
import { useSession } from './session';
import { resetExercise, type Exercise } from './exercise';

const exerciseFeed = ref([] as Post[]);

// to post the name of the person that made the last post.
const session = useSession();

export function useFeed() {
    return exerciseFeed;
}


export interface Post {
    user: string;
    exercise: Exercise;
    date: Date;
}

export function makePost(exercisePassed: Exercise){ 
    exerciseFeed.value.push ({
        user: session.user.name,
        exercise: exercisePassed,
        date: new Date(),
    });

    resetExercise();
}
