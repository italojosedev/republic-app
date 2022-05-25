import api from "./api.ts"
import type { UserRegister } from '../types/userTypes.ts';
export async function register(data: UserRegister) {
  const response = await api.post(
    "/republic",
    data,
  );
  return response

}