'use strict';
    import React from 'react';
    import {
      AppRegistry,
      StyleSheet,
      Text,
      View,
      NativeModules,
    } from 'react-native';
    class Splan extends React.Component{

        render(){
            return (
                <View style={styles.me}>我的界面</View>
            );
        }
    }

    var styles = StyleSheet.create({
        me:{
            fontSize:'20'
        }

    });
    export default Splan;
