import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Alert, FlatList} from 'react-native';
import FlatListData from './components/FlatListData';

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
    if (phrase === 'Apple' || phrase === 'Tesla') {
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
  renderMembers(member) {
    return (
      <View style={styles.membersRowContainer} key={member}>
        <Image source={{ url: member.image }} style={styles.avatar} />
        <Text style={styles.nameLabel}>{member.name}</Text>
        <Text style={styles.githubUsernameLabel}>@{member.github_username}</Text>
      </View>
    )
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
        {/* FlatList Container*/}
        <View style={styles.flatListContainer}>
          <FlatList
            data={FlatListData}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => this.renderMembers(item)}
            onPress={this.handleOpen}
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
  membersRowContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  flatListContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    marginBottom: 50
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 22,
    marginLeft: 5
  },
  nameLabel: {
    fontSize: 18,
    color: '#003366',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  githubUsernameLabel: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
    color: '#4da6ff',
    marginRight: 20,
  },
});
