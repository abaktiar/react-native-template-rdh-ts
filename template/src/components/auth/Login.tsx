import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Center } from '../../ReusableComponents';
import { Button } from 'react-native-paper';
import { CS } from '../../../Styles';
import { AuthContext } from '../../../App';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={[CS.container]}>
      <Center>
        <Button mode='contained' onPress={() => signIn()}>
          Click here to Login
        </Button>
      </Center>
    </SafeAreaView>
  );
};

export default Login;
