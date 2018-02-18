import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Working!</Text>
        <Text>Jakhongir Khusanov</Text>
        <Text>MobileSpace is cool!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
