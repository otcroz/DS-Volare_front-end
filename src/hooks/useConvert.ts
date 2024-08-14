import axios from 'axios';

export const useConvert = () => {
  //const { getUserToken } = useUser();

  const saveNovel = async (title: string, novel: string) => {
    const accessToken = localStorage.getItem('accessToken'); // 임시
    const headers = {
      'X-AUTH-TOKEN': accessToken,
    };

    const requestData = {
      title: title,
      novel: novel,
    };

    try {
      const result = await axios.post(`/spring/novels`, requestData, {
        headers: headers,
      });
      const data = result.data;
      if (data.isSuceess) {
        console.log(data.message);
        return true;
      } else {
        console.log(data.message);
        return false;
      }
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  return {
    saveNovel,
  };
};
