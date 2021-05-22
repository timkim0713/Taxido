import React from 'react';
import { useState, useEffect } from 'react';

import { StyleSheet, ScrollView, Alert, RefreshControl, ActivityIndicator, Image } from 'react-native';

import {
  Button,
  View,
  Container,
  Text,
  Item,
  Header,
  Title,
  Content,
  Input,
  Left,
  Right,
  Body,
  Icon,
  ListItem,
  Thumbnail,
} from 'native-base';


import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const ICON_COLOR = '#FFCD4A';
const THEME_COLOR = '#242424';

export default function MyTaxidoScreen() {
  return (
    <Container>
      <Header searchBar rounded
        androidStatusBarColor='white'
        style={{ backgroundColor: 'transparent' }}
      >
        <Item style={Styles.searchBar}>
          <Icon name='search' />
          <Input
            placeholder="상품을 검색 해보세요"
            placeholderTextColor={THEME_COLOR}
            selectionColor={ICON_COLOR}
            onChangeText={text => searchItem(text)} />
        </Item>
      </Header>
           
            <View>
              {itemsFiltered.map((item, index) => (
                <ListItem key={index} style={{ flexDirection: 'column', alignItems: 'flex-start' }} onPress={() => { toggleModal(item); setPausePressable(true); }}>
                  {item.label == 'New' ?
                    <Text color="primary" size="xx-small" boldness="normal" >{item.label.toUpperCase()}</Text>
                    : <></>}
                  <Text color="dark" size="medium" boldness="normal" >{item.name}</Text>
                  <Text color="grey" size="small" boldness="normal">재고: {item.inventoryCount}개</Text>
                  <Text color="lightGrey" decoration='strike-through'>가격: {currencyFormat(item.parentPrice)}원</Text>
                  <Text color='dark'>가격: {currencyFormat(item.price)}원</Text>
                </ListItem>

              ))}
            </View>
    </Container >
    
  );
}












