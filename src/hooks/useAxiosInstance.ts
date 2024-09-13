import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useUser } from './useUser';
import { useAuth } from './useAuth';
import { useTokenModal } from '../context/tokenModalContext';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

// access token 재발급
export const useAxiosInstances = () => {
  const { getTokenUser, clearUser } = useUser();
  const { openModal } = useTokenModal();

  const createAxiosInstance = (reissue: () => Promise<boolean | undefined>) => {
    const axiosInstance = axios.create();
    const { accessToken } = getTokenUser();
    axiosInstance.interceptors.request.use(
      (config) => {
        if (accessToken && config.headers) {
          const { accessToken } = getTokenUser();
          config.headers['X-AUTH-TOKEN'] = accessToken; // 액세스 토큰 설정
        }

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axiosInstance.interceptors.response.use(
      (response) => {
        return response; // success
      },
      async (err: unknown) => {
        // error
        if (err instanceof AxiosError) {
          const originRequest = err.config as CustomAxiosRequestConfig;

          if (
            originRequest &&
            err.response?.data.error.code == 'TOKEN403' &&
            !originRequest._retry
          ) {
            try {
              const result = await reissue(); // 토큰 재발급, result(boolean) 사용
              if (!result) {
                return Promise.resolve({
                  data: {
                    result: {
                      isSuccess: false,
                      message: '토큰 재발급 실패',
                    },
                  },
                });
              } else if (originRequest.headers) {
                const { accessToken } = getTokenUser();
                originRequest.headers['X-AUTH-TOKEN'] = accessToken;
              }
              originRequest._retry = true;
              try {
                const newResult = await axiosInstance.request(originRequest); // 요청 재시도
                return newResult;
              } catch (retryError) {
                return Promise.reject(retryError);
              }
            } catch (err) {
              console.log(err);
              return Promise.reject(err);
            }
          }
        }
      }
    );

    return axiosInstance;
  };

  // access token과 request token 로그아웃 처리
  const createAxiosInstanceTwoTkn = (
    reissue: () => Promise<boolean | undefined>
  ) => {
    const axiosInstanceTwoTkn = axios.create();
    const { accessToken, refreshToken } = getTokenUser();

    axiosInstanceTwoTkn.interceptors.request.use(
      (config) => {
        if (accessToken && refreshToken && config.headers) {
          const { accessToken, refreshToken } = getTokenUser();
          config.headers['X-AUTH-TOKEN'] = accessToken;
          config.headers['refresh-Token'] = refreshToken;
        }

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axiosInstanceTwoTkn.interceptors.response.use(
      (response) => {
        return response; // success
      },
      async (err: unknown) => {
        // error
        if (err instanceof AxiosError) {
          const originRequest = err.config as CustomAxiosRequestConfig;
          if (err.response?.data.code == 'TOKEN404') {
            clearUser();
            openModal(); // 로그아웃 처리 모달 띄우기
            return false;
          } else if (
            originRequest &&
            err.response?.data.error.code == 'TOKEN403' &&
            !originRequest._retry
          ) {
            try {
              const result = await reissue(); // 토큰 재발급, result(boolean) 사용 x
              if (originRequest.headers) {
                const { accessToken, refreshToken } = getTokenUser();
                originRequest.headers['X-AUTH-TOKEN'] = accessToken;
                originRequest.headers['refresh-Token'] = refreshToken;
              }

              originRequest._retry = true;

              const newResuit = await axiosInstanceTwoTkn(originRequest); // 요청 재시도
              return newResuit;
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }
      }
    );

    return axiosInstanceTwoTkn;
  };
  return {
    createAxiosInstance,
    createAxiosInstanceTwoTkn,
  };
};
