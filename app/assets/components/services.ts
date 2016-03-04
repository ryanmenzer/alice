import {messagesServiceInjectables} from './messages/messages.service';
import {threadsServiceInjectables} from './messages/threads.service';
import {userServiceInjectables} from './user/user.service';

export * from './messages/messages.service';
 export * from './messages/threads.service';
export * from './user/user.service';

export var servicesInjectables: Array<any> = [
  messagesServiceInjectables,
  threadsServiceInjectables,
  userServiceInjectables
];
