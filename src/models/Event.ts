export type EventTypes = string;// & ('food' | 'mood' | 'sport');

namespace EventData {
  export type type = EventTypes;
  export type date = Date;
  export type title = string;
  export type content = string[];
}

export interface EventInterface {
  type: EventData.type,
  date: EventData.date,
  title: EventData.title,
  content?: EventData.content,
};

export default class Event {
  type: EventData.type;
  date: EventData.date;
  title: EventData.title;
  content: string[];

  constructor({
    type,
    date,
    title,
    content = [],
  }: EventInterface) {
    this.type = type;
    this.date = date;
    this.title = title;
    this.content = content;
  }
}
