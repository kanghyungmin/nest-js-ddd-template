import { Injectable } from "@nestjs/common";
import EventEmitter from "events";
import { Observable } from "rxjs";


export type User = {
    age: number;
}

type EventMap<T> = Record<string, T[]>;

@Injectable()
export class UserService {
    private readonly users = new Map<number, User>();
    private readonly userCreated = new EventEmitter<EventMap<User>>();


    createUser(user: any) {
        const id = Math.max(...this.users.keys()) + 1;
        const newUser = { id, ...user };
        this.users.set(id, newUser);
        this.userCreated.emit(newUser);
        return newUser;
      }
    
      onUserCreated(): any {
        return //Observable.fromEvent(this.userCreated, 'userCreated');
      }
    

}