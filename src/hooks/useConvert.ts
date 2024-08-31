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
  const convertStoryboard = async (scriptId: number, script: Script) => {
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
        return data.result; // return storyboard
      } else {
        console.log(data.message);
        return false;
      }
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  // api: create a new chatRoom / spring
  const startNewChat = async (scriptId: number) => {
    const { accessToken } = getTokenUser();
    const headers = {
      'X-AUTH-TOKEN': accessToken,
    };

    try {
      const result = await axios.post(
        `/spring/chatRooms/${scriptId}`,
        {},
        { headers: headers }
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

  // api: get chat list / spring
  // (need fix) cursor-based-pagination
  const getChatList = async (chatRoomId: string) => {
    const { accessToken } = getTokenUser();
    const headers = {
      'X-AUTH-TOKEN': accessToken,
    };

    try {
      const result = await axios.get(`/spring/chats/${chatRoomId}`, {
        headers: headers,
      });

      const data = result.data;
      if (data.isSuccess) {
        // console.log(data.result.allMessages);
        return data.result;
      } else {
        console.log(data.message);
        return false;
      }
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  // api: apperance rate
  const apperanceRate = async (scriptId: number) => {
    const { accessToken } = getTokenUser();
    const headers = {
      'X-AUTH-TOKEN': accessToken,
    };

    try {
      const result = await axios.get(
        `/spring/scripts/${scriptId}/appearance-rate`,
        {
          headers: headers,
        }
      );
      const data = result.data;
      if (data.isSuccess) {
        return data;
      } else {
        console.log(data.message);
        return data.false;
      }
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  // api: novel statistics
  const convertStatistics = async (scriptId: number) => {
    const { accessToken } = getTokenUser();
    const headers = {
      'X-AUTH-TOKEN': accessToken,
    };

    try {
      const result = await axios.get(`/spring/scripts/${scriptId}/details`, {
        headers: headers,
      });
      const data = result.data;
      if (data.isSuccess) {
        return data;
      } else {
        console.log(data.message);
        return data.false;
      }
    } catch (err) {
      console.log(err); // temporary error handling
    }
  };

  return {
    saveNovel,
    cognizeCharacter,
    convertScript,
    convertStoryboard,
    startNewChat,
    getChatList,
    apperanceRate,
    convertStatistics,
  };
};
