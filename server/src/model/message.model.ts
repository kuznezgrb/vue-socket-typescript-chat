import {UserModel} from './user.model';

export class MessageModel {
  constructor(private from: UserModel, private content: string) {}
}
