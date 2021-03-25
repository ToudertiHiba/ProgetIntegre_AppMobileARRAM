import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Discussions from './Discussions';
import Replies from './Replies';
import Themes from './Themes';
import NewDiscussion from './Forum/NewDiscussion'

function ThemesScreen({ navigation }) {
  return (
    <Themes navigation={navigation} />
  );
}

function DiscussionsScreen({ navigation }) {
  return (
    <Discussions navigation={navigation} />
  );
}

function NewDiscussionScreen({ navigation}) {
  return (
    <NewDiscussion navigation={navigation}/>
  );
}

function RepliesScreen() {
  return (
    <Replies />
  );
}

const Stack = createStackNavigator();
function Forum() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Themes">
        <Stack.Screen name="Themes" component={ThemesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Replies" component={RepliesScreen} />
        <Stack.Screen name="NewDiscussion" component={NewDiscussionScreen} />
        <Stack.Screen name="Discussions" component={DiscussionsScreen} options={{ title: 'Discussions', headerStyle: { backgroundColor: '#111111' }, headerTintColor: '#fff' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Forum;