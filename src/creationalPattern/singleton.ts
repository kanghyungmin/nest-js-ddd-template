import { Injectable, Scope } from "@nestjs/common";


@Injectable({ scope: Scope.DEFAULT })
export class LoggerService {
  constructor() {
    this.log("LoggerService created");
  }
  log(message: string) {
    console.log(message);
  }
}