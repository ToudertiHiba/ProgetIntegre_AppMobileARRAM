import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableNativeFeedback } from 'react-native';

function Theme(props) {
  return (
    <TouchableNativeFeedback onPress={() => props.navigation.navigate('Discussions')}>
      <View style={styles.container}>
        <ImageBackground imageStyle={styles.imageStyle} style={styles.imageDimensions} source={{ uri: props.url }}>
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {props.titre}
              {"\n"}
            </Text>
            {props.description}
          </Text>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
}

const width = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
  container: {
    height: 200,
    width: width,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  baseText: {
    fontSize: 12,
    color: '#111111',
    textAlign: 'center',
    marginTop: 140,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imageStyle: {
    borderRadius: 10,
  },
  imageDimensions: {
    height: 200,
    width: 200,
    marginVertical: 5,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 15,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
export default Theme;