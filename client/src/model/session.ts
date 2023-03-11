import { reactive } from 'vue'

const session = reactive({      //reactive cannot be assigend to a new object, by making a variable user
                                //always equal interface User we can only creat one instance of User
    user: null as User | null,
})

const sessionArray = reactive([] as User[]);

interface User {
    id?: number; // the question mark means the atribute is optional, if nothing is provided it will be undefind
    name: string;
    email?: string;
    photo?: string;
    token?: string;
}

export function useSession() {
    return session;
}
export function useSessoinArray() {
    return sessionArray;
}

export function login() {
    session.user = {
        name: 'john doe',
    }
}

export function newAccout(namePassed: string, idPassed?: number, emailPassed?: string, photoPassed?: string, tokenPassed?: string) {
    sessionArray.push ({
        name: namePassed,
    });
}