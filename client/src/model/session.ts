import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import * as myFetch from './myFetch';
import type { User } from './user';
import type { DataEnvelope, DataListEnvelope } from './myFetch';


const session = reactive({      //reactive cannot be assigend to a new object, by making a variable user                  
    user: null as User | null,
    isloading: false,
    messages: [] as {
        msg: string,
        type: "success" | "danger" | "warning" | "info",
    }[]
})

export function useSession() {
    return session;
}


export function api(url: string, data?: any, method?: string, headers?: any) {
    session.isloading = true;

    if(session.user?.token) {
        headers = {
            "Authorizatoin": `Bearer ${session.user.token}`,
            ...headers,
        }
    }

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

export function addMessage(msg: string, type: "success" | "danger" | "warning" | "info") {
    console.log({msg, type});
    session.messages.push({
        msg,
        type,
    })
}

export function useLogin( loginEmail: string, loginPassword: string) {
    const route = useRouter();
        login(loginEmail, loginPassword)
            .then(data => {
                console.log(data);

                
                session.user = data.data;
                if(!session.user) {
                    session.messages.push({ msg: 'User not found', type: 'danger' });
                }

                route.push('/');
            })

}


function login(email: string, password: string) : Promise<DataEnvelope<User>> {
    return api('users/login', { email: email, password: password });
}


export function useLogout() {
    const router = useRouter();

    return function() {
        console.log({ router });
        session.user = null;
        
        router
    }
}

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

