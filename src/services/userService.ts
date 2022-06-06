import api from "./api.ts"
import type { User } from '../types/userTypes.ts';
import type { AxiosResponse } from "axios";
export async function createUser(data: User) {
    const response = await api.post(
        "/users",
        data,
    ).then((response: AxiosResponse) => {
        return response.data;
    })
        .catch((error: any) => {
            return error.response.data;
        });
    return response
}

export default async function User() {
    const data = await api.get(
        "/users",
    ).then((response: AxiosResponse) => {
        return response;
    })
        .catch((error: any) => {
            return error.response;
        });
    return data
}