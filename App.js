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

import CallScreenStack from './application/BottomTabScreens/Call/CallScreenStack';
import MyTaxidoScreenStack from './application/BottomTabScreens/MyTaxido/MyTaxidoScreenStack';
import ReserveScreenStack from './application/BottomTabScreens/Reserve/ReserveScreenStack';
import ProfileScreenStack from './application/BottomTabScreens/Profile/ProfileScreenStack';

const ICON_COLOR = '#FFCD4A';
const THEME_COLOR = '#242424';

// Call: FontAwesome5, taxi
// Reserve: MaterialCommunityIcons, calendar-clock
// My Taxido: FontAwesome, black-tie
// Profile: AntDesign, profile

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: ICON_COLOR,
          inactiveTintColor: THEME_COLOR,
          labelPosition: 'below-icon',
          style: {
            height: Platform.OS == 'android' ? 70 : 70,
            paddingBottom: Platform.OS == 'android' ? 15 : 20,
            paddingTop: Platform.OS == 'android' ? 8 : 6,
            // backgroundColor: THEME_COLOR,-------------------------------------DARK MODE
          },
          labelStyle: {
            fontSize: Platform.OS == 'android' ? 12 : 10,
          },
        }}>
        <Tab.Screen
          name="Reserve"
          component={ReserveScreenStack}
          options={{
            tabBarLabel: 'Reserve',
            tabBarIcon: ({color, size}) => (
              <MaterialIcon name="calendar-clock" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Call"
          component={CallScreenStack}
          options={{
            tabBarLabel: 'Call',
            tabBarIcon: ({color, size}) => (
              <FA5Icon name="taxi" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="My Taxido"
          component={MyTaxidoScreenStack}
          options={{
            tabBarLabel: 'My Taxido',
            tabBarIcon: ({color, size}) => (
              <FAIcon name="black-tie" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreenStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <AntIcon name="profile" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
