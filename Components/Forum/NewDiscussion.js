import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView } from 'react-native';
import { Divider, Button } from 'react-native-elements';


const NewDiscussion = (props) => {
    const [titre, setTitre] = useState("")
    const [inputValue, setInputValue] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.discussion}>
                <View >
                    <Text>Titre: </Text>
                    <TextInput value={titre} onChangeText={setTitre} />
                </View>
                <Divider style={{ backgroundColor: 'black' }} />
                <View>
                    <Text>Description: </Text>
                    <ScrollView style={{ height: 80 }}>
                        <TextInput
                            value={inputValue}
                            onChangeText={setInputValue}
                            multiline
                        />
                    </ScrollView>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                    <Button
                        icon={{
                            name: "delete",
                            size: 20,
                            color: "black"
                        }}
                        type="solid"
                        raised
                        onPress={ () => {
                            props.navigation.navigate('Discussions')
                        }}
                    />
                    <Button
                        icon={{
                            name: "send",
                            size: 20,
                            color: "black"
                        }}
                        type='outline'
                        raised
                        onPress={ () => {
                            props.navigation.navigate('Discussions')
                        }}
                    />
                </View>
            </View>
        </View>
    );
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
    textStyle: {
        textAlign: 'center',
        fontSize: 40,
        marginVertical: 15,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});
export default NewDiscussion