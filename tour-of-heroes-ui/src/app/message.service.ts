import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  messages : string[] = [];
  add(message : string) {
    this
      .messages
      .push(message);
  }
  clear() {
    this.messages = [];
  }
  delete(message : string) {
    this.messages = this
      .messages
      .filter(m => m !== message);
  }
}
