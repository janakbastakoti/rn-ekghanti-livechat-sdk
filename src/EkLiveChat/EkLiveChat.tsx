import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Block, Editor, Header} from './components/element';
import MyMessage from './components/chat/MyMessage';
import OtherMessage from './components/chat/OtherMessage';
import useSocket from './hooks/useSocket';

const EkLiveChat = () => {
  const {sendMessage} = useSocket();
  const {height} = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <Block>
        <Header />
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{height: height - 177}}>
        <Button
          title="Click me"
          onPress={sendMessage}
          // style={{
          //   margin
          // }}
        />
        <Block ph={20} pt={10} flex="disabled">
          <OtherMessage message="from chat messsage" timeStamp="1722736037" />

          <MyMessage
            message="this is test"
            isSending={false}
            isError={false}
            timeStamp="1722736037"
          />
        </Block>
      </ScrollView>
      <Editor />
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
