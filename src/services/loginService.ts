import api from "./api.ts"
import type {UserLogin}  from '../types/userTypes.ts';
import type { AxiosResponse } from "axios";
export async function Login(data: UserLogin) {
    const response = await api.post(
        "/signin",
        {
            email: data.email,
            password: data.password
        }
    ).then((response: AxiosResponse) => {
        return response.data;
    })
    .catch((error: any) => {
        return error.response.data;
    });
    return response

}