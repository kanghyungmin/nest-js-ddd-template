import { Injectable } from '@nestjs/common';


abstract class MyBaseController {
    async handleRequest() {
        this. validateRequest();
        const result = await this.processRequest();
        this.sendResponse(result);
    }

    protected abstract validateRequest(): void;
    protected abstract processRequest(): Promise<any>;
    protected abstract sendResponse(result: any): void;

}


@Injectable()
class MyController extends MyBaseController {
  protected validateRequest() {
    console.log('Validating request...');
  }

  protected async processRequest(): Promise<any> {
    console.log('Processing request...');
    return { data: 'response' };
  }

  protected sendResponse(result: any) {
    console.log('Sending response...');
    console.log(result);
  }
}