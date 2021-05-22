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

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from './ProfileScreen';

const ICON_COLOR = '#FFCD4A';
const THEME_COLOR = '#242424';

export default function ProfileScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Profile',
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
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
