import {useState, useEffect} from 'react';
import LocalDb from '../../LocalDb';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useWebSocket = (
  channelId: string,
  chatInstanceId: any,
  setChatInstanceId: any,
  chatData: any,
  setChatData: any,
  usernameCookie: any,
  setUsernameCookie: any,
) => {
  const [socket, setSocket] = useState<any>();
  const [isLoading, setisLoading] = useState(false);
  const socketConnection = () => {
    // const websocket = new WebSocket('ws://192.168.86.115:8080');
    const websocket = new WebSocket(`wss://chat.orbit360.cx:8443/`);
    setSocket(websocket);
    websocket.onopen = () => {
      console.log('connected');
      if (!chatInstanceId) {
        var msg = {
          firstMsg: 'client',
          usernameCookie: '',
          message: null,
          chatInstanceId: chatInstanceId,
          channelID: channelId,
        };
        websocket.send(JSON.stringify(msg));
      }
    };

    websocket.onclose = () => {};

    websocket.onmessage = event => {
      let temp = JSON.parse(event?.data);
      setChatInstanceId(temp?.instanceId);
      LocalDb.setInstanceId(temp?.instanceId);
      LocalDb;
      setUsernameCookie(temp?.destinationInfo?.userInfo?.usernameCookie);
      setChatData((prevList: any) => [...prevList, temp]);
    };
  };

  const fetchHistory = (id: string) => {
    fetch(`https://chat.orbit360.cx:8443/chatStorageWhook/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setChatData(json?.messages);
        console.log(
          json?.messages,
          'history',
          `https://chat.orbit360.cx:8443/chatStorageWhook/${id}`,
        );
        // setData(json);
        setisLoading(false);
        socketConnection();
      })
      .catch(error => {
        setisLoading(false);
        socketConnection();
      });
  };

  const getStoreInstanceId = async () => {
    setisLoading(true);
    try {
      const state = await AsyncStorage.getItem('instanceId');
      if (state !== null) {
        // console.log(state, 'dhdhdhhdhd');
        setChatInstanceId(JSON.parse(state));
        fetchHistory(JSON.parse(state));

        // let temp = JSON.parse(state);
      } else {
        socketConnection();
        console.log('xyz::: not found 000dduudud');
        setisLoading(false);
      }
    } catch (e) {
      setisLoading(false);
      socketConnection();
    }
  };

  useEffect(() => {
    getStoreInstanceId();
  }, []);

  const sendMessage = (msg: any) => {
    if (socket) {
      console.log('msg::000000', msg);
      // socket?.send(imageBase64, chatInstanceId, usernameCookie, 'image');
      socket?.send(JSON.stringify(msg));
    }
  };

  return {
    sendMessage,
    chatData,
    setChatData,
    usernameCookie,
    isLoading,
    setisLoading,
  };
};

export default useWebSocket;
