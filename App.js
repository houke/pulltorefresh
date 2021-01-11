import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Animated,
} from 'react-native';
import { SpringScrollView } from './SprintScrollView';
import { Header } from './Header';
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [offset, setOffset] = React.useState(new Animated.Value(0));

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
      this._scrollView.endRefresh();
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRefreshing(true);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpringScrollView
        refreshHeader={Header}
        ref={(ref) => (this._scrollView = ref)}
        onRefresh={onRefresh}
        refreshing={refreshing}
      >
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
        <Text> TEST2 </Text>
      </SpringScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
