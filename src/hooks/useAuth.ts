import axios from 'axios';
import { useUser } from './useUser';

export const useAuth = () => {
  const { updateUser, clearUser, getTokenUser } = useUser();

  const login = async (endpoint: string) => {
    try {
      window.location.href = `/spring/oauth/authorize/${endpoint}`;
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  const logout = async () => {
    const { accessToken, refreshToken } = getTokenUser();

    const headers = {
      'X-AUTH-TOKEN': accessToken,
      'refresh-Token': refreshToken,
    };

    try {
      const result = await axios.post(`/spring/users/sign-out`, {
        headers: {
          headers,
        },
      });

      const data = result.data;
      console.log('data: ', data);
      if (data.isSuccess) {
        console.log(data.message);
      } else {
        console.log(data.message);
      }
      return data;
    } catch (err) {
      console.log(err); // temporary error handling
    }
    clearUser();
  };

  const refreshFunc = () => {};
  return {
    login,
    logout,
    refreshFunc,
  };
};
