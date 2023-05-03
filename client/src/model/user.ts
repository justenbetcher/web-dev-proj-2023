import { api } from './session';
import type { DataEnvelope, DataListEnvelope } from './myFetch';
import type { Post } from './post';

export interface User {
    name: string;
    email: string;
    password: string;
    postHistory?: Post[];
    role?: string;
    token?: string;
    _id?: string;
}

export function getUsers() : Promise<DataListEnvelope<User>> {
    return api('users');
}

export function addUser(user : User) : Promise<DataEnvelope<User>> {
    return api('users', user);
}