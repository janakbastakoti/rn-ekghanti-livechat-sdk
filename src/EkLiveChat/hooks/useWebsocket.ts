import {useState, useEffect} from 'react';
const imageBase64 = 'data:image/png;base64,iVBORw0K...';

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
  // const [isConnected, setIsConnected] = useState(false);
  const socketConnection = () => {
    // const websocket = new WebSocket('ws://192.168.86.115:8080');
    const websocket = new WebSocket(`wss://chat.orbit360.cx:8443/`);
    setSocket(websocket);
    websocket.onopen = () => {
      console.log('connected');
      var msg = {
        firstMsg: 'client',
        usernameCookie: '',
        message: null,
        chatInstanceId: chatInstanceId,
        channelID: channelId,
      };
      websocket.send(JSON.stringify(msg));
    };

    websocket.onclose = () => {};

    websocket.onmessage = event => {
      let temp = JSON.parse(event?.data);
      setChatInstanceId(temp?.instanceId);
      setUsernameCookie(temp?.destinationInfo?.userInfo?.usernameCookie);
      setChatData((prevList: any) => [...prevList, temp]);
    };
  };

  useEffect(() => {
    socketConnection();
  }, []);

  const sendMessage = (msg: any) => {
    if (socket) {
      // socket?.send(imageBase64, chatInstanceId, usernameCookie, 'image');
      socket?.send(JSON.stringify(msg));
    }
  };

  return {sendMessage, chatData, setChatData, usernameCookie};
};

export default useWebSocket;
