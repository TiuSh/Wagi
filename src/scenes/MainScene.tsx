import * as React from 'react';
import { Component } from 'react';
import { View, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { EventList } from '../components/event/EventList';

const styles = EStyleSheet.create({
  scene: {
    paddingTop: 20,
    flex: 1,
    flexDirection: 'column',
  },
  chartContainer: {
    flex: 1,
    backgroundColor: '$color.red',
  },
  eventListContainer: {
    flex: 2,
  },
});

export class MainScene extends Component<{}, {}> {
  static route = {
    NavigationBar: {
      title: 'Home',
    },
  }

  render() {
    return (
      <View style={styles.scene}>
        <View style={styles.chartContainer} />
        <ScrollView style={styles.eventListContainer}>
          <EventList />
        </ScrollView>
      </View>
    );
  }
}
