import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1, paddingTop: 50}}>
       <Routes />
      </View>
    );
  }
}


