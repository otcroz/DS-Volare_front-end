import Cookies from 'js-cookie';

export const useUser = () => {
  const updateUser = () => {
    const accessToken = Cookies.get('accessToken') ?? ''; // null or undefined 일때 '' 반환
    const refreshToken = Cookies.get('refreshToken') ?? '';
    const isCheckUser = localStorage.getItem('isCheckUser') ?? '';

    //console.log('accessToken: ', accessToken);
    //console.log('refreshToken: ', refreshToken);
    //console.log('isCheckUser: ', isCheckUser);

    if (isCheckUser == '' && accessToken !== '' && refreshToken !== '') {
      // 유저 정보 최초 1번 업데이트하도록 설정
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('isCheckUser', 'true');
    }
  };

  const clearUser = () => {
    // 로컬스토리지의 내용 삭제
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isCheckUser');

    // 쿠키 삭제
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');

    // 로그아웃하면서 삭제할 쿼리에 대해 추가, removeQueries
  };

  const getTokenUser = () => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const isCheckUser = localStorage.getItem('isCheckUser');

    return { accessToken, refreshToken, isCheckUser };
  };

  const reissueToken = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };
  return {
    updateUser,
    clearUser,
    getTokenUser,
    reissueToken,
  };
};
