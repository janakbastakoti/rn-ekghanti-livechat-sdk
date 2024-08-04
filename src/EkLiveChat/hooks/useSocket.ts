import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const useSocket = () => {
    const [socket, setSocket] = useState<any>()
  const socketConnection = () => {
    const ws = new WebSocket(
      `wss://chat.orbit360.cx:8443/`,
    );
    setSocket(ws)
    // ws://https://chat.orbit360.cx:18000
    // const ws = new WebSocket(`ws://192.168.86.115:8080`);

    ws.onopen = () => {
      console.log('xyzLl socket connection success');
    };

    ws.onmessage = event => {
      console.log('xyzLl socket connection on message');
      // dispatch(updateCount(1));
      // onDisplayNotification();
    };

    ws.onerror = error => {
      console.log('xyzLl socket connection error', error);
      // reloadSocketConnection();
    };

    ws.onclose = () => {
      console.log('xyzLl socket connection close');
      // reloadSocketConnection();
    };
  };

  const sendMessage = () => {
    var msg = {
        firstMsg: null,
        usernameCookie: 'f03be31a66f5',
        message: 'hello',
        chatInstanceId: 'ebc4f75f-6e62-4b96-86e6-27277c7b799d',
        channelID: 'fd0caaa3-f1cb-4d0a-a452-171f21ec16ee',
      };
      console.log(msg, 'dhdhhdhdh')
    socket?.send(JSON.stringify(msg))
  };

  useEffect(() => {
    socketConnection();
  }, []);
  return {
    sendMessage,
  };
};

export default useSocket;

const styles = StyleSheet.create({});
