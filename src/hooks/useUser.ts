import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../utils/queryKeys';

type User = {
  id: string;
  accessToken: string;
  refreshToken: string;
};

export const useUser = () => {
  const queryClient = useQueryClient();
  const updateUser = ({ id, accessToken, refreshToken }: User): void => {
    queryClient.setQueryData(queryKeys.user, {
      id: id,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  };

  const clearUser = () => {
    queryClient.setQueryData(queryKeys.user, null);
    // 로그아웃하면서 삭제할 쿼리에 대해 추가, removeQueries
  };
  return {
    updateUser,
    clearUser,
  };
};
