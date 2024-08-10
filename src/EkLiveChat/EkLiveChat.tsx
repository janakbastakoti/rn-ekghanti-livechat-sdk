import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Block, Editor, Header} from './components/element';
import MyMessage from './components/chat/MyMessage';
import OtherMessage from './components/chat/OtherMessage';
import useSocket from './hooks/useSocket';
import {appendChatMsg} from './helper';
import useWebSocket from './hooks/useWebsocket';

type Props = {
  channelId: string;
};

const EkLiveChat: React.FC<Props> = ({channelId}) => {
  const [chatInstanceId, setChatInstanceId] = useState(null);
  const {sendMessage, chatData, setChatData} = useWebSocket(
    channelId,
    chatInstanceId,
    setChatInstanceId,
  );
  // const { } = useWebSocket();
  // const {height} = Dimensions.get('window');

  // console.log(chatData, '************');

  const handleSendMsg = (msgObj: any) => {
    setChatData(appendChatMsg(msgObj, [...chatData]));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Block flex="disabled">
        <Header />
      </Block>
      <Block>
        <Block flex="disabled" ph={20} pt={5}>
          <Button
            title="Click me"
            onPress={() => {
              const msg = {
                firstMsg: 'null',
                usernameCookie: 'bb0dd1faa575',
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
            data={chatData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}: {item: any}) => (
              <Block>
                {item?.chatMessage?.chatSide == 'incomming' ? (
                  <OtherMessage
                    message="from chat messsage"
                    timeStamp="1722736037"
                  />
                ) : (
                  <MyMessage
                    message={item?.message || item?.chatMessage?.message}
                    isSending={false}
                    isError={false}
                    timeStamp="1722736037"
                  />
                )}
              </Block>
            )}
            keyExtractor={(item: any, index: any) => index.toString()}
            ListFooterComponent={<Block style={{height: 8}} />}
            // ListEmptyComponent={<Block style={{height: 8}}/>}
            // refreshControl={
            //   <RefreshControl
            //     colors={[theme.colors.primaryTextColor]}
            //     refreshing={isFetching}
            //     onRefresh={refetch}
            //   />
            // }
          />
        </Block>
      </Block>
      <Editor handleSendMsg={handleSendMsg} />
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
