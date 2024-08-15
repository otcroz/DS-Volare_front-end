import axios from 'axios';
import { useUser } from './useUser';

export const useConvert = () => {
  const { getTokenUser } = useUser();

  const saveNovel = async (title: string, novel: string) => {
    const { accessToken } = getTokenUser();
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
