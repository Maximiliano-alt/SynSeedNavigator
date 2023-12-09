import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Provider as MaterialProvider } from '@react-native-material/core';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <MaterialProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
        <Button title="Click me" onPress={() => console.log('Clicked!')} />
        </SafeAreaView>
    </MaterialProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
