import { ref } from 'vue';
import type { DataEnvelope, DataListEnvelope } from './myFetch';
import { useSession, api } from './session';
import type { Exercise } from './exercise';

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
    postId: string;
    userId: string;
}

/*
export function makePost(exercisePassed: Exercise | null) { 
    if (exercisePassed == null || session.user == null) {
        return;
    }
    let date = new Date().valueOf();
    exerciseFeed.value.push({
        user: session.user.name,
        exercise: exercisePassed,
        date: new Date(),
        postId: session.user.name + date,
        userId: session.user.userId,
    });

    session.user.postHistory.push({
        user: session.user.name,
        exercise: exercisePassed,
        date: new Date(),
        postId: session.user.name + date,
        userId: session.user.userId,
    });

    resetExercise('');
}
*/

export function makePost(currentExercise: Exercise) : Promise<DataEnvelope<Post>> {
    let currentDate = new Date();
    return api(`users/post/${session.user?.userId}`, {
        user: session.user?.name,
        exercise: currentExercise,
        date: currentDate,
        postId: (session.user?.name ?? 'undefined')+ currentDate,
        userId: session.user?.userId,
    });
}

export function getFeed() : Promise<DataListEnvelope<Post>> {
    return api('feed');
}



export function deletePost(index: number) {
    if (session.user == null) {
        return;
    }
    const ID = session.user.postHistory[index].postId;

    for(let i = 0; i < exerciseFeed.value.length; i++) {
        if ( session.user.postHistory[index].postId == exerciseFeed.value[i].postId) {
            exerciseFeed.value.splice(i, 1);
            break;
        }
    }

    session.user.postHistory.splice(index, 1);
}

