import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {timeAgo} from '../../helper';
import {Block, Text} from '../element';

interface Props {
  message?: string;
  userName?: string;
  userProfile?: string;
  timeStamp?: string;
  displayType?: string;
  fileName?: string;
}

const OtherMessage: React.FC<Props> = ({
  message,
  userProfile,
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
          <Text font="Regular" size={16} color="#fff">
            {message}
          </Text>
        )}
        <Block style={styles.timeView} flex="disabled" mt={3}>
          <Text font="Regular" size={13} color="#fff" left>
            {timeAgo(timeStamp && parseInt(timeStamp) * 1000)}
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default OtherMessage;

const styles = StyleSheet.create({
  msgContainer: {
    alignItems: 'flex-end',
    maxWidth: '84%',
    marginVertical: 3,
  },
  ProifleImg: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  msgContent: {
    backgroundColor: '#4628d9b8',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomRightRadius: 10,
  },
  timeView: {
    alignItems: 'flex-start',
  },
  imgStyle: {
    height: 130,
    width: 200,
    borderRadius: 5,
  },
});
