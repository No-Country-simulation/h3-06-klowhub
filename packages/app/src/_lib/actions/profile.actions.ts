'use server';

//import { BACKEND_URL } from '../config/constants';
import { getSession } from '../modules/session';

export const getProfile = async () => {
  const session = await getSession();
  // const response = await fetch(`${BACKEND_URL}/auth/profile`, {
  //   headers: {
  //     Authorization: `Bearer ${session?.accessToken}`,
  //   },
  // });

  // const result = await response.json();
  const result = { message: 'This is the profile user' };
  return result;
};
