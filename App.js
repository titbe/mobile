import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login, { LoginScreen } from './screens/LoginScreen';
import Success, { SuccessScreen } from './screens/SuccessScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingScreen } from './screens/onBoardingScreen';
import { LandingScreen } from './screens/landingScreen';
import { SignUpScreen } from './screens/signUpScreen';
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name='LandingScreen' component={LandingScreen} options={{headerShown:false}} />
        <Stack.Screen name='Log In' component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name='Sign Up' component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name='Success' component={SuccessScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


