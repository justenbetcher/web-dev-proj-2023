import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import * as myFetch from './myFetch';
import type { DataEnvelope, DataListEnvelope } from './myFetch';
import type { Post } from './post';

const session = reactive({      //reactive cannot be assigend to a new object, by making a variable user                  
    user: null as User | null,
    isloading: false,
    messages: [] as {
        msg: string,
        type: "success" | "danger" | "warning" | "info",
    }[]
})


export interface User {
    userId?: string; // the question mark means the atribute is optional, if nothing is provided it will be undefind
    name: string;
    email?: string;
    password?: string;
    postHistory?: Post[];
}

export function useSession() {
    return session;
}


export function api(url: string, data?: any, method?: string, headers?: any) {
    session.isloading = true;
    return myFetch.api(url, data, method, headers)
        .catch(err => {
            console.error({err});
            session.messages.push({
                msg: err.message ?? JSON.stringify(err),
                type: "danger",
            })
        })
        .finally(() => {
            session.isloading = false;
        })
}

export function useLogin(user : User) {
    const router = useRouter();

    return function() {
        session.user = user;

        router.push("/");
    }
}

export function useLogout() {
    const router = useRouter();

    return function() {
        console.log({ router });
        session.user = null;
        
        router
    }
}

export function getUsers() : Promise<DataListEnvelope<User>> {
    return api('users');
}
/*
export function login() {
    session.user = {
        name: 'john doe',
        id: 0,
    }
}
*/

/*
export function login(id: number) {
    session.user = userArray.find(x => x.id == id) ?? null;

    /*
    for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].id == id)
        {
            session.user = userArray[i];
            break;
        }
    }
}
*/

/*
export function newAccout(namePassed: string) {
    userArray.push ({
        name: namePassed,
        id: userArray.length,
        postHistory: [],
    });
}
*/

export function lastWorkout() {
    if (session.user == null) {
        return;
    }
    if (session.user.postHistory == undefined) {
        return;
    }
    let days = (session.user.postHistory[session.user.postHistory.length - 1].date.valueOf()) - new Date().valueOf();
    return Math.abs(days);
}

/*
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
*/