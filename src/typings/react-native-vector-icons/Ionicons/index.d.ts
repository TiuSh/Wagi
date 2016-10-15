/// <reference path="../../../globals/react/index.d.ts" />

declare module 'react-native-vector-icons/Ionicons' {
  // Type definitions for react-native-vector-icons/Ionicons
  // Project: https://github.com/oblador/react-native-vector-icons
  // Definitions by: Mathieu Masy <https://github.com/tiush>
  // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

  import * as React from 'react';

  interface props extends React.HTMLProps<Ionicons> {
    name: string,
    size?: number,
    color?: string
  }

  export default class Ionicons extends React.Component<props, any> {}
}
