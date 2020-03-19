import { User } from "./user";
import { Action } from "./action";

export interface Message {
  from?: User;
  date: object;
  content?: string;
  action?: Action;
}
