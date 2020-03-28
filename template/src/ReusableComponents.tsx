import * as React from 'react';
import {View, ViewStyle} from 'react-native';

interface IProps {
  styles?: ViewStyle;
}

export const Container: React.FC<IProps> = (props) => (
  <View style={[{flex: 1}, props.styles]}>{props.children}</View>
);
export const Row: React.FC<IProps> = (props) => (
  <View style={[{flexDirection: 'row'}, props.styles]}>{props.children}</View>
);

export const Center: React.FC<IProps> = (props) => (
  <View
    style={[
      {flex: 1, justifyContent: 'center', alignItems: 'center'},
      props.styles,
    ]}>
    {props.children}
  </View>
);
