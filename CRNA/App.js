import React from 'react';
import { StyleSheet, Text, View, ScrollView,} from 'react-native';

import FlatListData from './components/FlatListData';
import ImageView from './components/ImageView';
import ButtonView from './components/ButtonView';
import InputView from './components/InputView';
import ListView from './components/ListView';

export default class App extends React.Component {
  render() {
    return (
      //ScrollView - Flex Column
      <ScrollView style={styles.scrollView}>
        <ImageView />
        <ButtonView />
        <InputView />
        <ListView />
        <View>
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
});
