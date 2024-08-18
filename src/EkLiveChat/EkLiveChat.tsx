import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Block, Editor, Header} from './components/element';
import MyMessage from './components/chat/MyMessage';
import OtherMessage from './components/chat/OtherMessage';
import {appendChatMsg} from './helper';
import useWebSocket from './hooks/useWebsocket';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  channelId: string;
};

const EkLiveChat: React.FC<Props> = ({channelId}) => {
  const scrollViewRef = useRef<FlatList>(null);
  const [chatInstanceId, setChatInstanceId] = useState<any>(null);

  const [chatData, setChatData] = useState<any>([]);
  const [usernameCookie, setUsernameCookie] = useState(null);
  const {sendMessage, isLoading} = useWebSocket(
    channelId,
    chatInstanceId,
    setChatInstanceId,
    chatData,
    setChatData,
    usernameCookie,
    setUsernameCookie,
  );
  const handleSendMsg = (message: any) => {
    if (message?.type == 'text') {
      sendMessage({
        firstMsg: message?.message,
        usernameCookie: usernameCookie,
        message: message?.message,
        chatInstanceId: chatInstanceId,
        channelID: channelId,
        type: 'text',
      });
      setChatData(
        appendChatMsg(
          {
            channelID: channelId,
            chatMessage: {
              chatSide: 'incomming',
              displayType: 'text',
              message: message?.message,
            },
            destinationInfo: {
              entityType: 'chatServer',
              userInfo: null,
            },
            instanceId: chatInstanceId,
            messageId: chatInstanceId || '' + Math.random(),
            sourceInfo: {
              entityType: 'client',
              userInfo: {
                ipAddress: '202.51.80.194',
                user_name: null,
                usernameCookie: usernameCookie,
              },
            },
            timestamp: new Date().getTime() / 1000,
          },
          [...chatData],
        ),
      );
    } else {
      sendMessage({
        firstMsg: message?.url,
        usernameCookie: usernameCookie,
        message: message?.url,
        chatInstanceId: chatInstanceId,
        channelID: channelId,
        type: 'image',
      });
      setChatData(
        appendChatMsg(
          {
            channelID: channelId,
            chatMessage: {
              chatSide: 'incomming',
              displayType: 'image',
              message: '',
              filteName: message?.url,
            },
            destinationInfo: {
              entityType: 'chatServer',
              userInfo: null,
            },
            instanceId: chatInstanceId,
            messageId: chatInstanceId || '' + Math.random(),
            sourceInfo: {
              entityType: 'client',
              userInfo: {
                ipAddress: '202.51.80.194',
                user_name: null,
                usernameCookie: usernameCookie,
              },
            },
            timestamp: new Date().getTime() / 1000,
          },
          [...chatData],
        ),
      );
    }
  };

  useEffect(() => {
    if (chatData?.length) {
      scrollViewRef.current?.scrollToEnd({animated: true});
    }
  }, [chatData]);

  return (
    <SafeAreaView style={styles.container}>
      <Block flex="disabled">
        <Header />
      </Block>
      {isLoading ? (
        <Block center middle>
          <ActivityIndicator size="large" color="#ff2200" />
        </Block>
      ) : (
        <>
          <Block>
            <Block flex="disabled" ph={20} pt={5}>
              <Button
                title="Click me"
                onPress={() => {
                  const msg = {
                    firstMsg: 'client',
                    usernameCookie: usernameCookie,
                    message: 'Click Me',
                    chatInstanceId: chatInstanceId,
                    channelID: channelId,
                    type: 'text',
                  };
                  sendMessage(msg);
                }}
              />
            </Block>
            <Block ph={20} pt={10}>
              <FlatList
                // data={[]}
                ref={scrollViewRef}
                data={chatData}
                showsVerticalScrollIndicator={false}
                onContentSizeChange={() =>
                  scrollViewRef.current?.scrollToEnd({animated: true})
                }
                renderItem={({item}: {item: any}) => (
                  <Block>
                    {item?.chatMessage?.chatSide == 'outgoing' ? (
                      <OtherMessage
                        message={item?.message || item?.chatMessage?.message}
                        timeStamp={item?.timestamp}
                        displayType={item?.chatMessage?.displayType}
                        fileName={item?.chatMessage?.filteName}
                      />
                    ) : (
                      <MyMessage
                        message={item?.message || item?.chatMessage?.message}
                        isSending={false}
                        isError={false}
                        timeStamp={item?.timestamp}
                        displayType={item?.chatMessage?.displayType}
                        fileName={item?.chatMessage?.filteName}
                      />
                    )}
                  </Block>
                )}
                keyExtractor={(item: any, index: any) => index.toString()}
                ListFooterComponent={<Block style={{height: 8}} />}
              />
            </Block>
          </Block>
          <Editor handleSendMsg={handleSendMsg} />
        </>
      )}
    </SafeAreaView>
  );
};

export default EkLiveChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6f6',
  },
});
