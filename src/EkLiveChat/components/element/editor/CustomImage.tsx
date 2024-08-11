import {
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Block from '../view/Block';
import {reloadIcon} from '../../../../assets';

type Props = {
  img?: string;
  loading?: boolean;
  error?: boolean;
  onError?: any;
};
const CustomImage: React.FC<Props> = ({img, loading, error, onError}) => {
  return (
    <Block>
      <Image source={{uri: img}} style={styles.imagStyle} />
      {loading && (
        <Block style={styles.loading} center middle>
          <ActivityIndicator size="small" color="red" />
        </Block>
      )}
      {error && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onError}
          style={styles.loading}>
          <Block center middle>
            <Image source={reloadIcon} style={styles.errorIcon} />
          </Block>
        </TouchableOpacity>
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
  errorIcon: {
    height: 20,
    width: 20,
    tintColor: 'red',
  },
});
