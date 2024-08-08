import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Block, Text} from '../element';
import { timeAgo } from '../../helper';
// import {Block, Text} from '../../../../../elements';
// import {theme} from '../../../../../../utils/theme';
// import CommonIcon from '../../../../../../assets/icons/common/CommonIcon';
// import { timeAgo } from '../../../../../../utils/helper';

interface Props {
  message?: string;
  isSending?: boolean;
  isError?: boolean;
  timeStamp?: any;
}

const MyMessage: React.FC<Props> = ({
  message,
  isSending,
  isError,
  timeStamp,
}) => {
  return (
    <Block style={styles.msgContainer} flex="disabled" row gap={5}>
      <Block style={styles.msgContent} flex="disabled">
        <Text
          font="Regular"
          size={16}
          color='#000'>
          {message}
        </Text>
        <Block style={styles.timeView} flex="disabled" mt={3}>
          {isSending ? (
            <>{/* // <CommonIcon.Pending width={10} height={10} /> */}</>
          ) : isError ? (
            <Text
              font="Regular"
              size={13}
              color='red'
              left>
              Not Delivered
            </Text>
          ) : (
            <Text
              font="Regular"
              size={16}
              color='#666'
              left>
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
});
