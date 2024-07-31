import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const LiveChat = () => {
  return (
    <SafeAreaView style={styles.webViewStyle}>
      <WebView
        source={{
          uri: 'https://chat.orbit360.cx:8443/chat/fd0caaa3-f1cb-4d0a-a452-171f21ec16ee',
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        allowsBackForwardNavigationGestures={true}
        style={styles.webViewStyle}
        androidLayerType="software"
      />
    </SafeAreaView>
  );
};

export default LiveChat;

const styles = StyleSheet.create({
  webViewStyle: {
    flex: 1,
  },
});
