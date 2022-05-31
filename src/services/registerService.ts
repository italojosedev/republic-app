import api from "./api.ts"
import type { UserRegister } from '../types/userTypes.ts';
import type { AxiosResponse } from "axios";
export async function register(data: UserRegister) {
  const response = await api.post(
    "/republic",
    data,
  ).then((response: AxiosResponse) => {
      return response.data;
  })
    .catch((error: any) => {
      return error.response.data;
    });
  return response

}