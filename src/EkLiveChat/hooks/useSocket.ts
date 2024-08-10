import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appendChatMsg} from '../helper';

const useSocket = () => {
  const [chatData, setChatData] = useState<any>([]);
  const [chatInstanceId, setChatInstanceId] = useState();
  const [socket, setSocket] = useState<any>();

  const socketConnection = () => {
    // let aa = [] as any;
    // const ws = new WebSocket(`wss://chat.orbit360.cx:8443/`);
    // ws://https://chat.orbit360.cx:18000
    const ws = new WebSocket(`ws://192.168.86.115:8080`);
    setSocket(ws);

    ws.onopen = () => {
      console.log('xyzLl socket connection success');
      var msg = {
        firstMsg: 'client',
        usernameCookie: '',
        message: null,
        chatInstanceId: null,
        channelID: 'a780347f-caf9-4a09-b3fa-63474c6c3911',
      };
      sendMessage(msg)
    };

    ws.onmessage = event => {
      let temp = JSON.parse(event?.data);
      console.log('message received------====', event);
      // if (temp?.channelID) {
      //   // console.log(appendChatMsg(temp, chatData), '999999')
      // }
      // setChatData(appendChatMsg(temp, [...chatData]));

      // aa = [...aa, {temp}];

      // console.log('******', aa);
    };

    ws.onerror = error => {
      // console.log('xyzLl socket connection error', error);
      // reloadSocketConnection();
    };

    ws.onclose = () => {
      console.log('xyzLl socket connection close');
      // reloadSocketConnection();
    };
  };

  const sendMessage = (msg: any) => {
    // const msg = {
    //   firstMsg: 'null',
    //   usernameCookie: 'b5d4624a096f',
    //   message: 'Click Me',
    //   chatInstanceId: '080fe801-bb89-4331-95bf-5bc4e73525b8',
    //   channelID: 'fd0caaa3-f1cb-4d0a-a452-171f21ec16ee',
    //   type: 'text',
    // };
    // console.log(msg, 'dhdhhdhdh');
    socket?.send(JSON.stringify(msg));
  };

  useEffect(() => {
    socketConnection();
  }, []);
  return {
    sendMessage,
    chatData,
    setChatData,
  };
};

export default useSocket;

const styles = StyleSheet.create({});
