import { api } from './session';
import type { DataEnvelope, DataListEnvelope } from './myFetch';
import type { Post } from './post';
import { useSession } from './session';
import { ref } from 'vue';

const session = useSession();

export const useSearchTerm = ref('');
export interface User {
    name: string;
    email: string;
    password: string;
    postHistory?: Post[];
    role?: string;
    token?: string;
    _id?: string;
}

export async function getUsers()  {
    return await api('users');
}

export async function addUser(user : User)  {
    return  api('users', user);
}

export async function getHistory() {
    return api(`users/history/${session.user!._id}`);
}

export async function deleteUser(id: string) {
    return api(`users/${id}`, undefined, 'DELETE');
}

export async function searchUsers(term: string) : Promise<DataListEnvelope<User>> {
    console.log('in users')
    if (term === '')
    {
        
        return { data: [], isSuccess: true, total: 0};
    }
    return await api(`users/search/${term}`);
}
