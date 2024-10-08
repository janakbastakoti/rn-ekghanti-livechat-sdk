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
import CustomImage from './CustomImage';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isCancel,
  isInProgress,
  types,
} from 'react-native-document-picker';

interface Props {
  handleSendMsg?: any;
}

const Editor: React.FC<Props> = ({handleSendMsg}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState<string>();
  const [error, setError] = useState(false);

  const [result, setResult] = React.useState<
    | Array<DocumentPickerResponse>
    | DirectoryPickerResponse
    | undefined
    | null
    | any
  >();

  console.log(result);

  const uploadImage = (image_data: any) => {
    setIsLoading(true);
    setError(false);
    var formData = new FormData();
    formData.append('sending_file', {
      name: image_data[0]?.name,
      type: image_data[0]?.type,
      uri: image_data[0]?.uri,
    });

    fetch('https://chat.orbit360.cx:8443/uploadImage', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(filePath => {
        setIsLoading(false);
        if (filePath?.startsWith('https://chat')) setUploadedUrl(filePath);
        else setError(true);
      })
      .catch(error => {
        setIsLoading(false);
        setError(true);
        console.error('Error uploading file:', error);
      });
  };

  const handleSend = () => {
    if (message || result[0].uri) {
      handleSendMsg({
        message: message,
        url: uploadedUrl ? uploadedUrl : null,
        type: result ? 'image' : 'text',
      });
      setMessage('');
      setResult(null);
    }
  };

  const handleError = (err: unknown) => {
    if (isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };

  return (
    <Block flex="disabled">
      {result && (
        <Block flex="disabled" row ph={20}>
          <CustomImage
            img={result[0].uri}
            loading={isLoading}
            error={error}
            onError={() => {
              uploadImage(result);
            }}
          />
        </Block>
      )}
      <Block
        flex="disabled"
        style={styles.editorContainer}
        ph={15}
        pv={9}
        row
        center>
        <TouchableOpacity
          style={styles.fileBtn}
          activeOpacity={0.7}
          onPress={() => {
            DocumentPicker.pick({
              allowMultiSelection: false,
              type: [types.images],
            })
              .then((data: any) => {
                uploadImage(data);
                setResult(data);
              })
              .catch(handleError);
          }}>
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
          onPress={handleSend}
          disabled={isLoading || error}>
          <Image source={btnImg} style={styles.sendBtnImg} />
        </TouchableOpacity>
      </Block>
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
