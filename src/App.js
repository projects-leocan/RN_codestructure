import React, { PureComponent } from 'react';
import { View, LogBox, StatusBar, Platform } from 'react-native';
import { BaseNavigator } from "./navigation";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isConnected: true
    }
  }

  componentDidMount() {
    LogBox.ignoreAllLogs();
    StatusBar.setBarStyle("dark-content");
    Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
    Platform.OS === 'android' && StatusBar.setTranslucent(true);
  }

  render() {
    const { isConnected } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <BaseNavigator />
      </View>
    );
  }
}
