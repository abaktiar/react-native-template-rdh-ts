import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';

import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {THEME, NAV_THEME} from './Styles';
import Splash from './src/components/common/Splash';
import Login from './src/components/auth/Login';
import Main from './src/Main';

/**
 * auth logic...
 * return auth screens or home screens based on auth :)
 */

export const AuthContext = React.createContext(null);

const App = () => {
  const Stack = createStackNavigator();

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        // store token
        await AsyncStorage.setItem('userToken', 'dummy-auth-token');

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  if (state.isLoading === true) {
    return (
      <SafeAreaProvider>
        <Splash />;
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={THEME}>
        <NavigationContainer theme={NAV_THEME}>
          <AuthContext.Provider value={authContext}>
            <Stack.Navigator headerMode="none">
              {state.userToken == null ? (
                <Stack.Screen name="Login" component={Login} />
              ) : (
                <Stack.Screen name="Main" component={Main} />
              )}
            </Stack.Navigator>
          </AuthContext.Provider>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
