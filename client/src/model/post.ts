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
    postID: string;
}

export function makePost(exercisePassed: Exercise){ 
    let date = new Date().valueOf();
    exerciseFeed.value.push({
        user: session.user.name,
        exercise: exercisePassed,
        date: new Date(),
        postID: session.user.name + date,
    });

    session.user.postHistory.push({
        user: session.user.name,
        exercise: exercisePassed,
        date: new Date(),
        postID: session.user.name + date,
    });

    resetExercise();
}

export function deletePost(index: number) {
    const ID = session.user.postHistory[index].postID;

    for(let i = 0; i < exerciseFeed.value.length; i++) {
        if ( session.user.postHistory[index].postID == exerciseFeed.value[i].postID) {
            exerciseFeed.value.splice(i, 1);
            break;
        }
    }

    session.user.postHistory.splice(index, 1);
}

