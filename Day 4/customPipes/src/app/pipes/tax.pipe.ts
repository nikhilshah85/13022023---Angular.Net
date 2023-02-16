import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: number, category:string) {
      if(category == 'Electronics')
      {
        return (value * 12) / 100;
      }
      else if(category == 'Shoes')
      {
        return (value * 18) / 100;
      }
      else if(category == 'Cold-Drink')
      {
        return (value * 5) / 100;
      }
      return value;


  }

}
