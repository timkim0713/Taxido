import React from 'react';
import { useState, useEffect } from 'react';

import { StyleSheet, ScrollView, Alert, RefreshControl, ActivityIndicator, Image, View } from 'react-native';
import { ListItem, Avatar, Badge, Chevron } from 'react-native-elements'
// import {
//   Button,
//   View,
//   Container,
//   Text,
//   Item,
//   Header,
//   Title,
//   Content,
//   Input,
//   Left,
//   Right,
//   Body,
//   Icon,
//   ListItem,
//   Thumbnail,
// } from 'native-base';

import DRIVER_LIST from './DriverList.json';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const ICON_COLOR = '#FFCD4A';
const THEME_COLOR = '#242424';

// Pregnant: MaterialCommunityIcons, human-pregnant
// Pet: Foundation, guide-dog
// WheelChair: FontAwesome5, FontAwesome, wheelchair
// Blind: FontAwesome, blind
// 

export default function MyTaxidoScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View>
        {
          DRIVER_LIST.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <View style={styles.subtitleView}>
                  <ListItem.Subtitle>{l.review}</ListItem.Subtitle>
                </View>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
      </View>
    </ScrollView>


  );
}
styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})










