import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import PhoneConfirm from './src/screens/PhoneConfirm';

import { store } from './src/store';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhoneConfirm"
        component={PhoneConfirm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
