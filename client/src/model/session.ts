import { reactive } from 'vue'

const session = reactive({      //reactive cannot be assigend to a new object, by making a variable user
                                //always equal interface User we can only creat one instance of User
    user: null as User | null,
})

interface User {
    id?: number, // the question mark means the atribute is optional, if nothing is provided it will be undefind
    name: string,
    email?: string,
    photo?: string,
    token?: string,
}

export function useSession(){
    return session
}

export function login(){
    session.user = {
        name: 'john doe',
    }
}