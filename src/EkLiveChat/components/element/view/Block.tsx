import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  flex?: any;
  row?: boolean;
  center?: boolean;
  middle?: boolean;
  right?: boolean;
  space?: string;
  style?: React.CSSProperties | number | string | {};
  children?: ReactNode;
  mt?: Number;
  mb?: Number;
  ml?: Number;
  mr?: Number;
  mh?: Number;
  mv?: Number;
  pt?: Number;
  pb?: Number;
  pl?: Number;
  pr?: Number;
  ph?: Number;
  pv?: Number;
  flexBox?: Number;
  gap?: Number;
  borderColor?: string;
}

const Block: React.FC<Props> = ({
  flex,
  row,
  center,
  middle,
  right,
  space,
  children,
  style,
  mt,
  mb,
  ml,
  mr,
  mv,
  mh,
  pt,
  pb,
  pl,
  pr,
  pv,
  ph,
  flexBox,
  gap,
  borderColor,
  ...rest
}) => {
  const blockStyles = [
    styles.block,
    flex && {display: 'flex'},
    flex === 'disabled' && {flex: 0},
    flexBox && {flex: flexBox},
    center && styles.center,
    middle && styles.middle,
    right && styles.right,
    space && {justifyContent: `space-${space}`},
    row && styles.row,
    gap && {gap: gap},
    mt && {marginTop: mt},
    mb && {marginBottom: mb},
    ml && {marginLeft: ml},
    mr && {marginRight: mr},
    mv && {marginVertical: mv},
    mh && {marginHorizontal: mh},
    pt && {paddingTop: pt},
    pb && {paddingBottom: pb},
    pl && {paddingLeft: pl},
    pr && {paddingRight: pr},
    pv && {paddingVertical: pv},
    ph && {paddingHorizontal: ph},
    borderColor && {borderColor: borderColor},
    borderColor && styles.boderDesign,
    style,
  ];
  return (
    <View style={blockStyles} {...rest}>
      {children}
    </View>
  );
};


const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
  boderDesign: {
    borderWidth: 1,
  },
});

export default Block;
