import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Block, Text} from '../element';
import {timeAgo} from '../../helper';

interface Props {
  message?: string;
  isSending?: boolean;
  isError?: boolean;
  timeStamp?: any;
  displayType?: string;
  fileName?: string;
}

const MyMessage: React.FC<Props> = ({
  message,
  isSending,
  isError,
  timeStamp,
  displayType,
  fileName,
}) => {
  return (
    <Block style={styles.msgContainer} flex="disabled" row gap={5}>
      <Block style={styles.msgContent} flex="disabled">
        {displayType == 'image' ? (
          <Image src={fileName} style={styles.imgStyle} />
        ) : (
          <Text font="Regular" size={14} color="#000">
            {message}
          </Text>
        )}
        <Block style={styles.timeView} flex="disabled" mt={3}>
          {isSending ? (
            <></>
          ) : isError ? (
            <Text font="Regular" size={13} color="red" left>
              Not Delivered
            </Text>
          ) : (
            <Text font="Regular" size={14} color="#666" left>
              {timeAgo(timeStamp && parseInt(timeStamp) * 1000)}
            </Text>
          )}
        </Block>
      </Block>
    </Block>
  );
};

export default MyMessage;

const styles = StyleSheet.create({
  msgContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginVertical: 3,
  },
  ProifleImg: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  msgContent: {
    backgroundColor: '#d5d5d5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    maxWidth: '84%',
    minWidth: 80,
  },
  timeView: {
    alignItems: 'flex-end',
    height: 14,
  },
  imgStyle: {
    height: 130,
    width: 200,
    borderRadius: 5,
  },
});
