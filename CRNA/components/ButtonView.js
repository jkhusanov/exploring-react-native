import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#F6F6F6',
    }
  }
  handleClick = () => {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    this.setState({
      backgroundColor: randomColor
    })
  }
  render() {
    return (
      <View
        style={styles.toggleContainer}
        backgroundColor={this.state.backgroundColor}
      >
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={this.handleClick}
        >
          <Text style={styles.toggleText}> Change background color </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toggleContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
  toggleText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'blue',
  },
});
