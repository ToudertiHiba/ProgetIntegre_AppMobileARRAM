import * as React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import SBar from './Forum/SearchBar'
import Discussion from './Forum/Discussion'
import ActionButton from 'react-native-action-button';

function Discussions(props) {

  const Dis = [
    ["Titre discussion 1", "Description 1", "https://images.philips.com/is/image/PhilipsConsumer/AE1850_00-IMS-fr_MA?$jpglarge$&wid=960", "nom", "prenom", "date", "heure", "5 réponses"],
    ["Titre discussion 2", "Description 2", "https://images.philips.com/is/image/PhilipsConsumer/AE1850_00-IMS-fr_MA?$jpglarge$&wid=960", "nom", "prenom", "date", "heure", "7 réponses"],
    ["Titre discussion 3", "Description 3", "https://images.philips.com/is/image/PhilipsConsumer/AE1850_00-IMS-fr_MA?$jpglarge$&wid=960", "nom", "prenom", "date", "heure", "13 réponses"],
    ["Titre discussion 4", "Description 4", "https://images.philips.com/is/image/PhilipsConsumer/AE1850_00-IMS-fr_MA?$jpglarge$&wid=960", "nom", "prenom", "date", "heure", "2 réponses"],
    ["Titre discussion 3", "Description 3", "https://images.philips.com/is/image/PhilipsConsumer/AE1850_00-IMS-fr_MA?$jpglarge$&wid=960", "nom", "prenom", "date", "heure", "13 réponses"],
    ["Titre discussion 4", "Description 4", "https://images.philips.com/is/image/PhilipsConsumer/AE1850_00-IMS-fr_MA?$jpglarge$&wid=960", "nom", "prenom", "date", "heure", "2 réponses"],
  ]

  let ensDis = []
  for (let i = 0; i < Dis.length; i++) {
    ensDis.push(
      <Discussion titre={Dis[i][0]} description={Dis[i][1]} url={Dis[i][2]} nom={Dis[i][3]} prenom={Dis[i][4]} date={Dis[i][5]} heure={Dis[i][6]} reponse={Dis[i][7]} navigation={props.navigation} key={i}/>
    )
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      {/* <Heading> Discussions</Heading> */}

      <ScrollView>
        <View style={{ backgroundColor: '#111111', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
          <SBar />
        </View>
        <View style={styles.container}>
          {ensDis}
        </View>

      </ScrollView>
      <ActionButton
        buttonColor="rgba(76,60,231,1)"
        onPress={ () => {
          console.log("hi") 
            props.navigation.navigate('NewDiscussion')
        }}
      />
    </View>
  );

};



const width = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Discussions