import { AuthResponseI } from '../dto/authDTO';
import { CommonInterface } from '../dto/commonDTO';
import { UserI } from '../dto/userDTO';
import apiClient from '../http/httpClient';

const PATH = 'auth';
// export const loginUser = async (params: { data: any }): Promise<any> => {
//   const res = await apiClient.post(`${PATH}/login`);
//   return res.data as any;
// };

export const registerUser = async (params: {
  data: UserI;
}): Promise<CommonInterface<AuthResponseI>> => {
  const res = await apiClient.post(`${PATH}`, params.data);
  return res.data as CommonInterface<AuthResponseI>;
};
