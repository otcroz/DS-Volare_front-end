import axios from 'axios';
import { useUser } from './useUser';

export const useAuth = () => {
  const { updateUser, clearUser } = useUser();

  const login = async (endpoint: string) => {
    try {
      const result = await axios.get(`/spring/oauth/authorize/${endpoint}`);
      const data = result.data;

      console.log(data);
      if (data.accessToken != null && data.refreshToken != null) {
        updateUser({
          id: data.id,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        });
      }
    } catch (err) {
      console.log(err); // temporary
    }
  };

  const logout = () => {
    clearUser();
  };

  const refreshFunc = () => {};
  return {
    login,
    logout,
    refreshFunc,
  };
};
