import React from 'react';
import { Image, Button } from 'react-native';


export default class MyHomeScreen extends React.Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="Open Drawer"
      />
    );
  }
}
