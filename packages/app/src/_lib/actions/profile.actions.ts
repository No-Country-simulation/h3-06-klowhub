'use server';

//import { BACKEND_URL } from '../config/constants';
// import { authFetch } from '../utils/authFetch';

export const getProfile = async () => {
  // const session = await getSession();
  // use AuthFetch for all routes requiring authorization
  // const response = await authFetch(`${BACKEND_URL}/auth/profile`, {
  //   headers: {
  //     Authorization: `Bearer ${session?.accessToken}`,
  //   },
  // });

  // const result = await response.json();
  const result = { message: 'This is the profile user' };
  return result;
};
