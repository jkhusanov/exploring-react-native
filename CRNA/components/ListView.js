import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, WebView, Modal, Image, Button} from 'react-native';

import FlatListData from './FlatListData';

export default class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWebView: false,
      uri: '',
      modalVisible: false,
    }
  }
  renderMembers(member) {
    return (
      <View>
      { this.state.showWebView && this.renderContent() }
      <TouchableHighlight
        style={styles.button}
        onPress={() => this.setState(
          {showWebView: true},
          this.setState({uri:'https://github.com/'+member.github_username}), 
          console.log("Profile View pressed"),
          this.openModal())}
        >
        <View style={styles.membersRowContainer} key={member}>
          <Image source={{ url: member.image }} style={styles.avatar} />
          <Text style={styles.nameLabel}>{member.name}</Text>
          <Text style={styles.githubUsernameLabel}>@{member.github_username}</Text>
        </View>
    </TouchableHighlight>
    </View>
    )
  }
  renderContent() {
    const { showWebView, uri } = this.state
      if(showWebView) {
        console.log("Website is active")
        return (
          <View style = {styles.container}>
          <WebView
            source = {{ uri}}
          />
          </View>
        )
    }
  }
  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }
  render() {
    return (
      <View>
      <View style={styles.flatListContainer}>
          <FlatList
            data={FlatListData}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => this.renderMembers(item)}
          />
        </View>
        <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
          {this.renderContent()}
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Button
                onPress={() => this.closeModal()}
                title="Close GitHub"
              >
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
 modalContainer: {
  justifyContent: 'center',
  borderColor: 'blue',
  borderWidth: 1,
},
container: {
  flex: 1,
},
innerContainer: {
  alignItems: 'center',
},
});



