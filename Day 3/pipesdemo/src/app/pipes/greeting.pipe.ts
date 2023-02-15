import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting'
})
export class GreetingPipe implements PipeTransform {

  transform(value:string) {
    //if condition, switch, variables, method calls, api calls anything u can do
    return 'Hello and Welcome ' + value;
  }

}
