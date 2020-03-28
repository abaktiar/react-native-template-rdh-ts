import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CS} from '../../../Styles';
import {View, Text} from 'react-native';
import {Center} from '../../ReusableComponents';

export interface SplashProps {}

const Splash: React.FC<SplashProps> = () => {
  return (
    <SafeAreaView style={CS.container}>
      <Center>
        <Text>Splash Screens</Text>
      </Center>
    </SafeAreaView>
  );
};

export default Splash;
