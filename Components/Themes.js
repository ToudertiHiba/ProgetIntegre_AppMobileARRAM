import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import Theme from './Forum/Theme'
import Heading from './Forum/Heading'
import SBar from './Forum/SearchBar'

const Th = [
  ["Theme X", "Desccription", "https://images.philips.com/is/image/PhilipsConsumer/AE1850_00-IMS-fr_MA?$jpglarge$&wid=960"],
  ["Theme Y", "Desccription", "https://images.philips.com/is/image/PhilipsConsumer/AE1850_00-IMS-fr_MA?$jpglarge$&wid=960"],
  ["Theme Z", "Desccription", "https://images.philips.com/is/image/PhilipsConsumer/AE1850_00-IMS-fr_MA?$jpglarge$&wid=960"],
]
const Themes = (props) => {
  let ensThemes = []
  for (let i = 0; i < Th.length; i++) {
    ensThemes.push(
      <Theme url={Th[i][2]} titre={Th[i][0]} description={Th[i][1]} navigation={props.navigation} key={i}/>
    )
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Heading>Themes</Heading>
      <ScrollView>
        <View style={{ backgroundColor: '#111111', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <SBar />
        </View>
        <View style={styles.container}>
          {ensThemes}
        </View>
      </ScrollView>
    </View>
  );
}

const width = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#000000',
    borderRadius: 0,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Themes;