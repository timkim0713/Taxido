import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {createStackNavigator} from '@react-navigation/stack';

import MyTaxidoScreen from './MyTaxidoScreen';

const ICON_COLOR = '#FFCD4A';
const THEME_COLOR = '#242424';

export default function MyTaxidoScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions="My Taxido"
      screenOptions={{
        title: 'My Taxido',
        // headerTitle: (props) => (
        //     <BuckeyHeaderComponent title={THREAD} color='primary' />
        // ),
        headerStyle: {
          // backgroundColor: 'white',
          // alignItems: 'center',
        },
        headerTitleAlign: 'center',
        // headerTintColor: ICON_COLOR,

        // headerTintColor: ICON_COLOR,
      }}>
      <Stack.Screen name="MyTaxidoScreen" component={MyTaxidoScreen} />
    </Stack.Navigator>
  );
}
