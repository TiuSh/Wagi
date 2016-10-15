import * as React from 'react';
import { StatelessComponent } from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Event, { EventTypes } from '../../models/Event';

export interface EventRowProps {
  event: Event,
};

interface EventStyleType {
  [type: string]: { // EventTypes
    icon: string,
    color: string,
  },
};

const styles = EStyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  rowLeft: {
    flex: 0,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowRight: {
    flex: 1,
    paddingLeft: 10,
  },
  iconContainer: {
    borderRadius: 100,
    overflow: 'hidden',
    paddingTop: 10,
    paddingBottom: 10,
    width: 50,
    height: 50,
  },
  iconContainerFood: {
    backgroundColor: '$color.red',
  },
  iconContainerMood: {
    backgroundColor: '$color.green',
  },
  iconContainerSport: {
    backgroundColor: '$color.yellow',
  },
  time: {
    fontSize: 11,
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    paddingTop: 5,
    paddingLeft: 10,
  },
  contentItem: {
  },
});

const EventStyle: EventStyleType = {
  food: {
    icon: 'ios-restaurant',
    color: '$color.red',
  },
  mood: {
    icon: 'ios-happy',
    color: '$color.green',
  },
  sport: {
    icon: 'ios-bicycle',
    color: '$color.yellow',
  },
};

export const EventRow: StatelessComponent<EventRowProps> = (props) => {
  const event = props.event;
  const eventStyle = EventStyle[event.type];

  return (
    <View>
      <View style={styles.row}>
        <View style={styles.rowLeft}>
          <View style={[styles.iconContainer, { backgroundColor: EStyleSheet.value(eventStyle.color, 'color') }]}>
            <Icon
              name={eventStyle.icon}
              size={30}
              color="#FFFFFF"
              style={{ textAlign: 'center' }}
            />
          </View>
        </View>
        <View style={styles.rowRight}>
          <Text style={styles.time}>{moment(event.date).format('HH:mm')}</Text>
          <Text style={styles.title}>{event.title}</Text>
          <View style={styles.content}>
            {event.content.map(text => (
              <Text key={text} style={styles.contentItem}>
                - {text}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

