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
    date: number;
    _id?: string;
    userId: string;
}


export async function makePost(currentExercise: Exercise) {
    let currentDate = new Date().valueOf();
    return api(`post/${session.user?._id}`, {
        user: session.user?.name,
        exercise: currentExercise,
        date: currentDate,
        userId: session.user?._id,
    });
}

export async function deletePost(postId: string) {
    return api(`post/${postId}/${session.user?._id}`, undefined, "DELETE");
}

export async function getFeed() {
    return api('feed');
}





