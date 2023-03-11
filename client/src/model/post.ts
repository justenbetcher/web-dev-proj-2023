import { ref } from 'vue';
import { useSession } from './session';
import { setRunWalk, setSwim, type Exercise } from './exercise';

const exerciseFeed = ref([] as post[]);

// to post the name of the person that made the last post.
const session = useSession();

export function useFeed() {
    return exerciseFeed;
}


interface post {
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

    console.log(exerciseFeed.value)

    setSwim(0,0,0,'');
    setRunWalk('',0,0,);
}
