import axios, { AxiosRequestConfig } from 'axios';
import { refreshToken } from '../actions/auth.actions';
import { getSession } from '../actions/session';

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

/**
 * Makes a fetch request and handles the authentication with the server for each fetch in the application. Intercepts the non valid token error.
 * If the access token is not valid, it will try to refresh it using the refresh token.
 * If the refresh token is not valid, it will throw an error.
 *
 * @param url The URL to make the request to.
 * @param options The options to pass to the fetch function.
 * @returns The response of the fetch request.
 */
export const authFetch = async (
  url: string,
  options: AxiosRequestConfig = {},
) => {
  const session = await getSession();

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${session?.accessToken}`,
  };

  // Try the fetch with the access token
  let response = await axios(url, options);

  // If the access token is not valid, try to refresh it
  if (response.status === 401) {
    if (!session?.refreshToken) {
      throw new Error('Refresh Token not found');
    }

    // Try to refresh the access token
    const newAccessToken = await refreshToken(session.refreshToken as string);

    // If the refresh token is valid, make the fetch again with the new access token
    if (newAccessToken) {
      options.headers.Authorization = `Bearer ${newAccessToken}`;
      response = await axios(url, options);
    } else {
      throw new Error('Refresh Token not valid');
    }
  }

  return response;
};
