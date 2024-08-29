import axios from 'axios';
import { useUser } from './useUser';

export const useAuth = () => {
  const { updateUser, clearUser, getTokenUser, reissueToken } = useUser();

  const login = async (endpoint: string) => {
    try {
      window.location.href = `/spring/oauth/authorize/${endpoint}`;
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  const logout = async () => {
    const { accessToken, refreshToken } = getTokenUser();
    //console.log('accessToken: ', accessToken);
    //console.log('refreshToken: ', refreshToken);

    const headers = {
      'X-AUTH-TOKEN': accessToken,
      'refresh-Token': refreshToken,
    };

    try {
      const result = await axios.post(
        `/spring/users/sign-out`,
        {},
        {
          headers: headers,
        }
      );

      const data = result.data;
      console.log('data: ', data);
      if (data.isSuccess) {
        console.log(data.message);
        clearUser();
        return true;
      } else {
        console.log(data.message);
        return false;
      }
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  const refreshFunc = async () => {
    const { accessToken, refreshToken } = getTokenUser();

    const headers = {
      'X-AUTH-TOKEN': accessToken,
      'refresh-Token': refreshToken,
    };
    const result = await axios.post(
      `/spring/users/reissue-token`,
      {},
      {
        headers: headers,
      }
    );
    console.log(result);
    const tokens = result.headers;

    const resAccessToken = tokens.accessToken;
    const resRefreshToken = tokens.refreshToken;

    // restore token
    reissueToken(resAccessToken, resRefreshToken);
  };

  const userInfoFunc = async () => {
    const { accessToken } = getTokenUser();
    const headers = {
      'X-AUTH-TOKEN': accessToken,
    };
    try {
      const result = await axios.get(`/spring/users`, {
        headers: headers,
      });
      const data = result.data;
      if (data.isSuccess) {
        return data;
      } else {
        console.log(data.message);
        return data;
      }
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };
  return {
    login,
    logout,
    refreshFunc,
    userInfoFunc,
  };
};
