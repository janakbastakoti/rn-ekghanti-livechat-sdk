import React, {ReactNode} from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  center?: boolean;
  right?: boolean;
  font?: string;
  color?: string;
  size?: Number;
  height?: Number;
  weight?: Number;
  spacing?: Number;
  style?: React.CSSProperties | number | string | {};
  children?: ReactNode;
  mt?: Number;
  mb?: Number;
  ml?: Number;
  mr?: Number;
  pt?: Number;
  pb?: Number;
  pl?: Number;
  pr?: Number;
  ph?: Number;
  pv?: Number;
  line?: Number;
  justify?: boolean;
  left?: boolean;
  upper?: boolean;
}

const Index: React.FC<Props> = ({
  center,
  font,
  right,
  color,
  size,
  height,
  weight,
  spacing,
  children,
  style,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  pv,
  ph,
  justify,
  line,
  left,
  upper,
  ...rest
}) => {
  const textStyles = [
    styles.textStyle,
    height && {lineHeight: height},
    weight && {fontWeight: weight},
    font && {fontFamily: `Poppins-${font}`},
    spacing && {letterSpacing: spacing},
    center && styles.center,
    right && styles.right,
    left && styles.left,
    justify && styles.justify,
    color && {color},
    size && {fontSize: size},
    mt && {marginTop: mt},
    mb && {marginBottom: mb},
    ml && {marginLeft: ml},
    mr && {marginRight: mr},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    pv && {paddingVertical: pv},
    ph && {paddingHorizontal: ph},
    line && {numberOfLines: line},
    upper && styles.upper,
    style,
  ];
  return (
    <Text style={textStyles} {...rest} adjustsFontSizeToFit={true}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    includeFontPadding: false,
    color: '#000',
    // fontFamily: 'Poppins-Light',
  },
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  left: {textAlign: 'left'},
  justify: {textAlign: 'justify'},
  upper: { textTransform: 'uppercase'}
});

export default Index;
