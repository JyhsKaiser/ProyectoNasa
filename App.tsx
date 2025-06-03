import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Routes from './src/routes/Routes';

function App() {
  return (
    <SafeAreaView style={styles.container} >

      <Routes />



      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7, 26, 93, 255)',
  }
});

export default App;