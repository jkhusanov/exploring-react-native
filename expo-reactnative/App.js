import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>Hello again!</Text>
        <Text style={styles.containerText}>This is Jakhongir Khusanov.</Text>
        <Text style={styles.containerText}>I am working with Expo XDE, and it seems very easy and cool!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
