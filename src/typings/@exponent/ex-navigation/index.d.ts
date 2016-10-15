/// <reference path="../../../globals/react/index.d.ts" />

declare module '@exponent/ex-navigation' {
  // Type definitions for @exponent/ex-navigation
  // Project: https://github.com/exponentjs/ex-navigation
  // Definitions by: Mathieu Masy <https://github.com/tiush>
  // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

  import * as React from 'react';

  namespace NavigationProvider {

    type ExNavigationContext = any;

    interface props {
      router: ExNavigationRouter<any>,
      context?: ExNavigationContext,
      children?: any
    }

  }

  export class NavigationProvider extends React.Component<NavigationProvider.props, any> {}

  namespace NavigationContext {

    type ExNavigatorContext<T> = any;
    type ExNavigationStore = any;
    type ExNavigationRoute = any;
    type ExNavigationState = any;

  }

  export class NavigationContext {
    readonly store: NavigationContext.ExNavigationStore;
    readonly navigationStateKey: string;
    readonly dispatch: (action: any) => any;
    readonly router: ExNavigationRouter<any>;
    readonly navigationState: NavigationContext.ExNavigationState | null;

    constructor({}: {
      store?: NavigationContext.ExNavigationStore,
      router: ExNavigationRouter<any>
    })/*{}*/;

    getNavigator(navigatorId: string): NavigationContext.ExNavigatorContext<any>/*{}*/;
    getNavigatorByUID(navigatorUID: string): NavigationContext.ExNavigatorContext<any>/*{}*/;
    getCurrentNavigatorUID(): string | null/*{}*/;
    getFocusedRoute(): NavigationContext.ExNavigationRoute | null/*{}*/;
    registerNavigatorContext(
      navigatorUID: string,
      navigatorContext: NavigationContext.ExNavigatorContext<any>
    ): void/*{}*/;
    unregisterNavigatorContext(navigatorUID: string): void/*{}*/;
  }

  namespace StackNavigation {

    type ExNavigationConfig = any;
    type ExNavigationRoute = any;

    interface props {
      defaultRouteConfig?: ExNavigationConfig,
      id?: string,
      initialRoute?: ExNavigationRoute,
      initialStack?: Array<ExNavigationRoute>,
      navigationState?: any,
      onTransitionEnd?: () => void,
      onTransitionStart?: () => void,
    }

  }

  export class StackNavigation extends React.Component<StackNavigation.props, any> {}

  namespace NavigationRouter {

    type ExNavigationRouteDefinition = any;

    type RouteCreator = {
      [key: string]: () => ExNavigationRouteDefinition
    }

  }

  type ExNavigationRouter<T> = any;

  export function createRouter(routesCreator: () => NavigationRouter.RouteCreator): ExNavigationRouter<NavigationRouter.RouteCreator>;

  // export var TabNavigation: any;
  // export var TabNavigationItem: any;
  // export var TabBadge: any;
  // export var SlidingTabNavigation: any;
  // export var SlidingTabNavigationItem: any;
  // export var DrawerNavigation: any;
  // export var DrawerNavigationItem: any;
  // export var NavigationBar: any;
  // export var createNavigationEnabledStore: any;
  // export var NavigationActions: any;
  // export var NavigationReducer: any;
  // export var NavigationStyles: any;
  // export var withNavigatio: any;
  // export var createFocusAwareComponent: any;
  // export var getBackButtonManager: any;
  // export var AndroidBackButtonBehavior: any;
}

