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

// #FFCD4A

// Call: FontAwesome5, taxi
// Reservation: MaterialCommunityIcons, calendar-clock
// My Taxido: FontAwesome, black-tie
// Profile: AntDesign, profile

//RESERVATION------------------------------------------------------------------------------------------------

function ReservationScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ReservationScreen!</Text>
    </View>
  );
}

function ReservationScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions="Reservation">
      <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
    </Stack.Navigator>
  );
}

//RESERVATION------------------------------------------------------------------------------------------------

//CALL------------------------------------------------------------------------------------------------

function CallScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CallScreen!</Text>
    </View>
  );
}

function CallScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions="Call">
      <Stack.Screen name="CallScreen" component={CallScreen} />
    </Stack.Navigator>
  );
}
//CALL------------------------------------------------------------------------------------------------

//MyTaxido------------------------------------------------------------------------------------------------

function MyTaxidoScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MyTaxidoScreen!</Text>
    </View>
  );
}

function MyTaxidoScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions="My Taxido">
      <Stack.Screen name="MyTaxidoScreen" component={MyTaxidoScreen} />
    </Stack.Navigator>
  );
}
//MyTaxido------------------------------------------------------------------------------------------------

//MyTaxido------------------------------------------------------------------------------------------------

function ProfileScreen() {
  const Stack = createStackNavigator();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileScreen!</Text>
    </View>
  );
}

function ProfileScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions="Profile">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

//MyTaxido------------------------------------------------------------------------------------------------

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Reservation"
          component={ReservationScreenStack}
          options={{
            tabBarLabel: 'Reservation',
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
