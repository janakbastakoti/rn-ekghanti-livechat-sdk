# rn-ekghanti-livechat-sdk

`rn-ekghanti-livechat-sdk` is a React Native SDK that allows you to easily integrate live chat functionality into your mobile application. This package provides components for both standard and WebView-based live chat implementations.

## Installation

To install the package, you can use npm:

```bash
npm install rn-ekghanti-livechat-sdk



To use livechat using component

import {View} from 'react-native';
import React from 'react';
import {EkLiveChat} from 'rn-ekghanti-livechat-sdk';

const App = () => {
  return (
    <View>
      <EkLiveChat channelId="YOUR_CHAT_CHANNEL_ID" />
    </View>
  );
};

export default App;

To use livechat using web view

import {View} from 'react-native';
import React from 'react';
import {LiveChat} from 'rn-ekghanti-livechat-sdk';

const App = () => {
  return (
    <View>
      <LiveChat url="YOUR_LIVECHAT_URL" />
    </View>
  );
};

export default App;


```
