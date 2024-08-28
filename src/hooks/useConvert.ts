import axios from 'axios';
import { useUser } from './useUser';
import { useNovelIdData } from '../context/convertDataContext';
import { Script } from '../types';

export const useConvert = () => {
  const { getTokenUser } = useUser();
  const { novelId } = useNovelIdData();

  // api: save novel / spring
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
      return data;
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  // api: cognize the character / flask
  const cognizeCharacter = async (text: string) => {
    try {
      const result = await axios.post(
        `/flask/convert_script/character_cognizing`,
        { text }
      );
      return result.data;
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  // api: convert a script / spring
  const convertScript = async (candidates: string[], text: string) => {
    const { accessToken } = getTokenUser();
    const headers = {
      'X-AUTH-TOKEN': accessToken,
    };

    const requestData = {
      candidates: candidates,
      text: text,
    };

    try {
      const result = await axios.post(
        `/spring/scripts/${novelId}`,
        requestData,
        {
          headers: headers,
        }
      );

      const data = result.data;
      console.log(data);
      if (data.isSuccess) {
        console.log(data.message);
        return data.result; // return script
      } else {
        console.log(data.message);
        return false;
      }
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  // api: convert storyboard
  const convertStoryboard = async (scriptId: string, script: Script) => {
    const { accessToken } = getTokenUser();
    const headers = {
      'X-AUTH-TOKEN': accessToken,
    };

    const requestData = {
      scriptId: scriptId,
      script: script,
    };

    try {
      const result = await axios.post(
        `/spring/sb/generate-storyboard`,
        requestData,
        {
          headers: headers,
        }
      );

      const data = result.data;
      console.log(data);
      if (data.isSuccess) {
        console.log(data.message);
        return data.result;
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
    cognizeCharacter,
    convertScript,
    convertStoryboard
  };
};
