
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './screens/TabScreen';

export default function App() {

  return (
    <NavigationContainer>
      <TabScreen />
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
