import {Image, StyleSheet, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import Block from '../view/Block';

type Props = {
  img?: string;
  loading?: boolean;
};
const CustomImage: React.FC<Props> = ({img, loading}) => {
  return (
    <Block>
      <Image source={{uri: img}} style={styles.imagStyle} />
      {loading && (
        <Block style={styles.loading} center middle>
          <ActivityIndicator size="small" color="red" />
        </Block>
      )}
    </Block>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imagStyle: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  loading: {
    height: 50,
    width: 50,
    position: 'absolute',
  },
});
