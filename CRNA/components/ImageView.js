import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ROADSTER_FRONT from '../images/roadster.png';
import ROADSTER_BACK from '../images/tesla-roadster-back.jpg';
import ROADSTER_SPACE from '../images/roadster-in-space.png';

export default class ImageView extends React.Component {
  render() {
    return (
      <View>

        {/* Big Image Container - Flex Row*/ }
        < View style = { styles.bigImageContainer } >
          <Image
            source={ROADSTER_FRONT}
            style={styles.bigImage}
          />
        </View >

        {/* Small Image Container - Flex Row*/ }
        < View style = { styles.smallImageContainer } >
          <Image
            source={ROADSTER_BACK}
            style={styles.smallImage}
          />
          <Image
            source={ROADSTER_SPACE}
            style={styles.smallImage}
          />
        </View >

      </View>
        );
  }
}

const styles = StyleSheet.create({
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
});
