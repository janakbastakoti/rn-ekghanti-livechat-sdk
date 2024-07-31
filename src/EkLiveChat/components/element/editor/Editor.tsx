import {
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Text, Block} from '..';
import {btnBg, btnImg, file, send} from '../../../../assets';

const Editor = () => {
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
          // onChangeText={(text: string) => setMessage(text)}
          // value={message}
          style={styles.input}
          placeholderTextColor="#6D6E7A"
          multiline
        />
      </Block>
      <TouchableOpacity activeOpacity={0.7} style={styles.sendBtn}>
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
