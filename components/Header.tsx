import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';

import {FONTS} from '../constants';

const Header: React.FC<{
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
}> = ({title, containerStyle, leftComponent, rightComponent}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        ...(containerStyle as Object),
      }}>
      {/** Left */}
      {leftComponent}

      {/** Title */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{...FONTS.h3}}>{title}</Text>
      </View>

      {/** Right */}
      {rightComponent}
    </View>
  );
};

export default Header;
