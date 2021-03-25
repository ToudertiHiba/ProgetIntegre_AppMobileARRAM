import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Divider, Button } from 'react-native-elements';

const Discussion = (props) => {
  return (
    <View style={styles.discussion}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{//backgroundColor: 'blue'
        }}>
          <Image
            style={styles.imageStyle}
            source={{ uri: props.url }}
          />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text>{props.nom} {props.prenom}</Text>
          <Text>{props.date}, {props.heure}</Text>
        </View>
        <View>
          <Text>{props.reponse} </Text>
        </View>
      </View >

      <Divider style={{ backgroundColor: 'red' }} />
      <View>
        <Text style={styles.titleText}> {props.titre}</Text>
        <Text style={styles.baseText}> {props.description}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Button
          buttonStyle={{ marginHorizontal: 2 }}
          icon={{
            name: "edit",
            size: 20,
            color: "black"
          }}
          type="outline"
          raised
        />
        <Button
          buttonStyle={{ marginHorizontal: 2 }}
          icon={{
            name: "delete",
            size: 20,
            color: "black"
          }}
          type="outline"
          raised
        />
        <Button
          buttonStyle={{ marginHorizontal: 2 }}
          icon={{
            name: "reply",
            size: 20,
            color: "black"
          }}
          type='outline'
          raised
          onPress={() => {
            props.navigation.navigate('Replies')
          }}
        />
      </View>
    </View>
  )
}


const width = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discussion: {
    padding: 10,
    width: width - 10,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderRadius: 10,
    marginVertical: 5,
  },
  baseText: {
    fontSize: 16,
    color: '#000000',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#000000',
  },
  imageStyle: {
    height: 48,
    width: 48,
    borderRadius: 24,
    flex: 1,
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
export default Discussion;