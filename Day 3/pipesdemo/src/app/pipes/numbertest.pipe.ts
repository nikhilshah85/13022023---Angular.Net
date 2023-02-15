import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbertest'
})
export class NumbertestPipe implements PipeTransform {

  transform(value:number) {
    if( value > 0 && value < 10)
    {
      return 'Very Poor Number';
    }
    else if(value > 10 && value < 25)
    {
      return 'Average Number';
    }
    else if(value > 25 && value < 50)
    {
      return 'Good Number';
    }
    else if(value > 50)
    {
      return 'Excellent Number';
    }
    return 'Please enter Number between 1 and 100 or more than 100';
  }

}
