import {DefaultTheme, Theme} from 'react-native-paper';
import {
  DefaultTheme as NavigatorDefaultTheme,
  Theme as NavTheme,
} from '@react-navigation/native';

export const THEME: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#996cfd',
    accent: '#dbb2fe',
  },
};

export const NAV_THEME: NavTheme = {
  ...NavigatorDefaultTheme,
  colors: {
    ...NavigatorDefaultTheme.colors,
    primary: THEME.colors.primary,
  },
};

export const CS = {
  container: {
    flex: 1,
  },
  textWhite: {
    color: '#fff',
  },
};
