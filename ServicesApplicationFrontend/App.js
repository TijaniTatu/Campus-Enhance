import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from './Index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en-GB', enGB);

Stack = createNativeStackNavigator();
const noHeader = { headerShown: false };

import Login from './Screens/Login';
import Register from './Screens/Register';
import BuildProfile from './Screens/BuildProfile';
import Home from './Screens/Home';

export default function App() {
  return (
    <Index />
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
