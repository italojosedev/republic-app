import api from "./api.ts"
import type {UserLogin}  from '../types/userTypes.ts';
export async function Login(data: UserLogin) {
    const response = await api.post(
        "/signin",
        {
            email: data.email,
            password: data.password
        }
    );
    return response

}