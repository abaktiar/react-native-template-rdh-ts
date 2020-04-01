import * as React from 'react';
import { View, ViewStyle, Text, TextStyle } from 'react-native';
import { THEME } from '../Styles';
import { Colors } from 'react-native-paper';

interface IProps {
  styles?: ViewStyle;
}

export const Container: React.FC<IProps> = props => (
  <View style={[{ flex: 1 }, props.styles]}>{props.children}</View>
);
export const Row: React.FC<IProps> = props => (
  <View style={[{ flexDirection: 'row' }, props.styles]}>{props.children}</View>
);

export const Center: React.FC<IProps> = props => (
  <View
    style={[
      { flex: 1, justifyContent: 'center', alignItems: 'center' },
      props.styles
    ]}>
    {props.children}
  </View>
);

interface ITextProps {
  varint?: 'caption';
  color?: 'primary' | 'accent' | 'dark' | 'white';
  textStyles?: TextStyle;
}
export const Typography: React.FC<ITextProps> = props => {
  const varint = props.varint;
  const color = props.color;
  const textStyles = props.textStyles;

  let styles: TextStyle = {};

  if (varint === 'caption') {
  }

  if (color != null) {
    switch (color) {
      case 'primary':
        styles.color = THEME.colors.primary;
        break;
      case 'accent':
        styles.color = THEME.colors.accent;
        break;
      case 'dark':
        styles.color = Colors.black;
        break;
      case 'white':
        styles.color = Colors.white;
        break;
      default:
        styles.color = color;
    }
  }

  if (textStyles != null && typeof textStyles === 'object') {
    styles = { ...styles, ...textStyles };
  }

  return <Text style={styles}>{props.children}</Text>;
};
