declare module 'react-native-extended-stylesheet' {
  // Type definitions for react-native-extended-stylesheet
  // Project: https://github.com/vitalets/react-native-extended-stylesheet
  // Definitions by: Mathieu Masy <https://github.com/tiush>
  // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

  namespace Api {
    function create(source: any): any;
    function build(globalVars: any): void;
    function value(value: any, prop: string): any;
    function memoize(fn: () => any): () => any;
    function child( styles: any, styleName: string, index: number, count: number): Array<any> | any;
    function subscribe(event: string, listener: () => void): void;
  }

  export default Api;
}
