import axios from 'axios';
import { useUser } from './useUser';

export const useAuth = () => {
  const { updateUser, clearUser } = useUser();

  const login = async (endpoint: string) => {
    try {
      window.location.href = `http://localhost:8080/oauth/authorize/naver`;
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
