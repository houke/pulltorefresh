import React from 'react';
import { ActivityIndicator, Animated, Image, Text, View } from 'react-native';
import { RefreshHeader } from 'hangry-react-native-spring-scrollview/RefreshHeader';

export class Header extends RefreshHeader {
  constructor(props) {
    super(props);
    this.state = { status: 'waiting' };
  }

  componentDidUpdate(props) {}

  changeToState(newStatus) {
    console.log(newStatus);
    this.state.status !== newStatus &&
      this.onStateChange(this.state.status, newStatus);
  }

  onStateChange(oldStatus, newStatus) {
    // console.log("newStatus", newStatus);
    this.setState({ status: newStatus });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f00',
        }}
      >
        <Text style={{ fontSize: 18 }}>Status: {this.state.status}</Text>
        <Animated.View
          style={{
            width: 10,
            height: 10,
            backgroundColor: 'green',
          }}
        />
      </View>
    );
  }
}
