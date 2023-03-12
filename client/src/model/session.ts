import { reactive } from 'vue'
import type { Post } from './post'

const session = reactive({      //reactive cannot be assigend to a new object, by making a variable user
                                
    user: null as User | null,
})

const userArray = reactive([] as User[]);

interface User {
    id: number; // the question mark means the atribute is optional, if nothing is provided it will be undefind
    name: string;
    email?: string;
    photo?: string;
    token?: string;
    postHistory: Post[];
}

export function useSession() {
    return session;
}
export function useUserArray() {
    return userArray;
}

/*
export function login() {
    session.user = {
        name: 'john doe',
        id: 0,
    }
}
*/

export function login(id: number) {
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].id == id)
        {
            session.user = userArray[i];
            break;
        }
    }

}

export function newAccout(namePassed: string) {
    userArray.push ({
        name: namePassed,
        id: userArray.length,
        postHistory: [],
    });
}

userArray.push({
    name: 'Justen Betcher',
    id: 0,
    postHistory: [],
})

userArray.push({
    name: 'John Henrey',
    id: 1,
    postHistory: [],
})