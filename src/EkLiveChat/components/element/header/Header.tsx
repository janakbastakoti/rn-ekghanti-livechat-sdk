import {Dimensions, Image, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import Block from '../view/Block';
import {Text} from '..';
import {bg, logo} from '../../../../assets';

const isLandscape = () => {
  const {height, width} = Dimensions.get('window');
  if (height >= width) return 10;
  else return 100;
};
const Header = () => {
  console.log('xyz:00:', isLandscape());
  return (
    <ImageBackground source={bg} imageStyle={styles.bg}>
      <Block
        flex="disabled"
        style={styles.headerContainer}
        ph={20}
        row
        center
        gap={8}>
        <Image source={logo} style={styles.imgStyle} />
        <Text color="#fff" size={18} weight={500}>
          Ekghanti Help Desk
        </Text>
      </Block>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  bg: {
    marginLeft: -10,
    backgroundColor: '#ff2200',
  },
  headerContainer: {
    height: 58,
  },
  imgStyle: {
    height: 30,
    width: 30,
  },
});
