import * as React from 'react';
import { Component } from 'react';
import { ListView, ListViewDataSource, View } from 'react-native';

import Event from '../../models/Event';
import { EventRow } from './EventRow';

export interface EventListState {
  dataSource: ListViewDataSource,
};

export class EventList extends Component<{}, EventListState> {
  constructor() {
    super();

    const dataSource = new ListView.DataSource({
      rowHasChanged(r1, r2) {
        return r1 !== r2;
      },
    });

    this.state = {
      dataSource: dataSource.cloneWithRows([new Event({
        type: 'food',
        date: new Date(),
        title: 'Vapiano',
        content: ['Risotto', 'Tiramisu'],
      }), new Event({
        type: 'mood',
        date: new Date(),
        title: 'Mal au ventre',
      }), new Event({
        type: 'sport',
        date: new Date(),
        title: 'Piscine',
      })]),
    };
  }

  _renderRow(
    rowData: Event,
  ) {
    return (
      <EventRow event={rowData} />
    );
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: boolean) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: 1,
          backgroundColor: '#CCCCCC',
        }}
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
      />
    );
  }
}
