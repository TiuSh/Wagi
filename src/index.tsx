import * as React from 'react';
import { Component } from 'react';
import { AppRegistry, StatusBar, } from 'react-native';
import { NavigationProvider, StackNavigation } from '@exponent/ex-navigation';

// Build style with global variables
import './style/build';

// Import main app router
import { MainRouter } from './lib/MainRouter';

class Wagi extends Component<{}, {}> {
  render() {
    return (
      <NavigationProvider router={MainRouter}>
        <StatusBar />
        <StackNavigation initialRoute={MainRouter.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('Wagi', () => Wagi);
