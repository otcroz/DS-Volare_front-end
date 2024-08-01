import axios from 'axios';
import { useUser } from './useUser';

export const useAuth = () => {
  const { updateUser, clearUser } = useUser();

  const login = async (endpoint: string) => {
    try {
      window.location.href = `/spring/oauth/authorize/${endpoint}`;
    } catch (err) {
      console.log(err); // temporary error handling
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
