import {
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Text, Block} from '..';
import {btnBg, btnImg, file, send} from '../../../../assets';

interface Props {
  handleSendMsg?: any;
}

const Editor: React.FC<Props> = ({handleSendMsg}) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message) {
      handleSendMsg({
        channelID: 'fd0caaa3-f1cb-4d0a-a452-171f21ec16ee'+ Math.random(),
        chatMessage: {
          chatSide: 'incoming',
          displayType: 'text',
          message: message,
        },
        destinationInfo: {
          entityType: 'chatServer',
          userInfo: null,
        },
        instanceId: '080fe801-bb89-4331-95bf-5bc4e73525b8',
        messageId: '73d2454d-0b73-4937-ba8b-d2b20b7172d7',
        sourceInfo: {
          entityType: 'client',
          userInfo: {
            ipAddress: '202.51.80.194',
            user_name: null,
            usernameCookie: 'f03be31a66f5',
          },
        },
      });
      setMessage('')
    }
  };

  return (
    <Block
      flex="disabled"
      style={styles.editorContainer}
      ph={15}
      pv={9}
      row
      center>
      <TouchableOpacity style={styles.fileBtn} activeOpacity={0.7}>
        <Image source={file} style={styles.fileImg} />
      </TouchableOpacity>

      <Block style={styles.container}>
        <TextInput
          placeholder="Message..."
          onChangeText={(text: string) => setMessage(text)}
          // onChangeText={handleSendMsg}
          value={message}
          style={styles.input}
          placeholderTextColor="#6D6E7A"
          multiline
        />
      </Block>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.sendBtn}
        onPress={handleSend}>
        <Image source={btnImg} style={styles.sendBtnImg} />
      </TouchableOpacity>
    </Block>
  );
};

export default Editor;

const styles = StyleSheet.create({
  editorContainer: {
    minHeight: 60,
    maxHeight: 430,
  },
  fileBtn: {
    paddingRight: 6,
    paddingVertical: 4,
    alignSelf: 'flex-end',
  },
  fileImg: {
    height: 28,
    width: 28,
  },
  sendBtnImg: {
    height: 34,
    width: 34,
    borderRadius: 5,
  },
  sendBtn: {
    marginLeft: 10,
    alignSelf: 'flex-end',
    marginBottom: 3,
    // backgroundColor: 'green'
  },
  container: {
    paddingHorizontal: 7,
    alignItems: 'flex-start',
    backgroundColor: '#E1E1E1',
    borderRadius: 8,
  },
  input: {
    paddingVertical: 6,
    color: '#0E0F29',
    fontSize: 14,
    maxHeight: 250,
    width: '100%',
  },
});
