import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Keyboard} from 'react-native';


export default class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      phrase: '',
    }
  }
  handleSubmit = () => {
    const {phrase}  = this.state
    //Display alert
    if (phrase === 'Apple' || phrase === 'Tesla') {
      Keyboard.dismiss
      console.log("Correct Phrase Entered")
      Alert.alert(
        'Success',
        'You entered correct phrase!',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    } else {
      Keyboard.dismiss
      console.log("Incorrect Phrase Entered")
      Alert.alert(
        'Invalid',
        'You entered the wrong phrase, try "Apple"!',
        [
          {text: 'Try Again', onPress: () => console.log('Try Again Pressed')},
        ],
        { cancelable: false }
      )
    }
  }
  render() {
    return (
      <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        value={this.state.phrase}
        placeholder="Enter secret phrase"
        placeholderTextColor="white"
        selectionColor="white"
        onChangeText={(text) => this.setState({phrase: text})}
        onSubmitEditing={this.handleSubmit}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    padding: 50,
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },
});
