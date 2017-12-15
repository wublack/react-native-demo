/**
 * Created by admin on 2017/12/15.
 */
import React,{Component} from 'react';
import  {Text,StyleSheet,View,Button} from 'react-native';
import {StackNavigator} from  'react-navigation';
const BackIcon = require('../image/left_arrow.png')

const  HomeScreen = ({navigation})=>(
  <View style = {styles.home}>
    <Text>Home Screen</Text>
    <Button title="Go to details" onPress={()=>navigation.navigate('Order')}/>
  </View>
);

const  OrderScreen = require('./order/orderindex');
const OrderDetail = require('./order/orderDetail');

const styles = StyleSheet.create({
  home:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});

const RootNavigator = StackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions:{
      headerTitle:'Home'
    }
  },
  Order:{
    screen: OrderScreen,
    navigationOptions:{
      headerTitle:'Order',
      tabBarIcon:BackIcon
    }
  },
  Detail:{
    screen:OrderDetail,
    navigationOptions:{
      headerTitle:'Detail'
    }
  }
})

export  default RootNavigator;




