'use strict';
// import React from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   NativeModules,
//   TouchableOpacity,
//   ToastAndroid,
// } from 'react-native';
// import Navigator from 'react-navigation';
// import Splan from './index'
// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.hello} onPress={() => this.onClick()}>Hello, World</Text>
//         <Text style={styles.hello} onPress={() => this.onClick()}>goto react</Text>
//       </View>
//     )
//   }
//
//   onClick() {
//     ToastAndroid.show(Navigator, ToastAndroid.SHORT);
//     NativeModules.MyMapIntentModule.startActivityByClassname('com.pty.react.activity.MyActivity');
//   }
//
//   gotoMe() {
//   }
//
// }
// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   hello: {
//     fontSize: 14,
//     textAlign: 'center',
//     margin: 10,
//   },
// });
// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';


import App from './js/main';

class HelloWorld extends React.Component {
  render() {
    return (
      <App/>
    )
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);


