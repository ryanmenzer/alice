import {Component} from 'angular2/core';
import {ChatNavBar} from '../dashboard/nav-bar';
import {ChatThreads} from './ChatThreads';
import {ChatWindow} from './ChatWindow';

import {
  MessagesService,
  ThreadsService,
  UserService
} from '../services';

import {ChatExampleData} from './ChatExampleData';

@Component({
  template:`
  <div>
    <nav-bar></nav-bar>
    <div class="container">
      <chat-threads></chat-threads>
      <chat-window></chat-window>
    </div>
  </div>
  `,
  directives: [ChatNavBar, ChatThreads, ChatWindow]
})

export class ChatComponent {
  constructor(
    public messagesService: MessagesService,
    public threadsService: ThreadsService,
    public userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }
}
