import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Block, Editor, Header} from './components/element';

const EkLiveChat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Block>
        <Header />
      </Block>

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
