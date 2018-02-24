import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Alert} from 'react-native';

import ROADSTER_FRONT from './images/roadster.png';
import ROADSTER_BACK from './images/tesla-roadster-back.jpg';
import ROADSTER_SPACE from './images/roadster-in-space.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#F6F6F6',
      text: '',
      phrase: '',
    }
  }

  handleClick = () => {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    this.setState({
    backgroundColor: randomColor
    })
  }
  handleSubmit = () => {
    const {phrase}  = this.state
    //Display alert
    if (phrase === 'Apple' || phrase === 'APPLE') {
      console.log("Correct Phrase Entered")
      Alert.alert(
        'Success',
        'You entered correct phrace!',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    } else {
      console.log("Incorrect Phrase Entered")
      Alert.alert(
        'Invalid',
        'You entered wrong phrace, try "Apple"!',
        [
          {text: 'Try Again', onPress: () => console.log('Try Again Pressed')},
        ],
        { cancelable: false }
      )
    }
  }

  
  render() {
    return (
      //ScrollView - Flex Column
      <ScrollView style={styles.scrollView}>
        {/* Big Image Container - Flex Row*/}
        <View style={styles.bigImageContainer}>
        <Image 
          source={ROADSTER_FRONT}
          style={styles.bigImage}
        />
        </View>
         {/* Small Image Container - Flex Row*/}
        <View style={styles.smallImageContainer}>
          <Image 
            source={ROADSTER_BACK}
            style={styles.smallImage}
          />
          <Image 
            source={ROADSTER_SPACE }
            style={styles.smallImage}
          />
        </View>
         {/* Change Background Container*/}
        <View 
          style={styles.toggleContainer}
          backgroundColor={this.state.backgroundColor}
        >
          <Button 
            style={styles.toggleButton}
            title="Change background color"
            onPress={this.handleClick}
          /> 
        </View>
        {/* Input Container*/}
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


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#0066ff',
    flexDirection: 'column',
  },
  bigImageContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  smallImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#003366',
  },
  bigImage: {
    flex: 1,
    width: 150,
    height: 200,
  },
  smallImage: {
    width: 150,
    height: 120,
    borderRadius: 15,
    borderWidth: 1,
  },
  toggleContainer: {
    height: 200,
    justifyContent: 'center',
  },
  toggleButton: {
    flex: 1,
  },
  textInputContainer: {
    padding: 50,
    height: 400,
    alignContent: 'center',
    // justifyContent: 'center',

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
