import { api } from './session';
import type { DataEnvelope, DataListEnvelope } from './myFetch';
import type { Post } from './post';
import { useSession } from './session';

const session = useSession();

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