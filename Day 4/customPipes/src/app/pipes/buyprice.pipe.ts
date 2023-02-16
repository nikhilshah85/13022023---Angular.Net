import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buyprice'
})
export class BuypricePipe implements PipeTransform {

  transform(value: number, category:string) {
  
    if(category == 'Electronics')
    {
      return (value - ((value * 15) / 100)) + (value * 12) / 100;
    }
    else if(category == 'Shoes')
    {
      return (value - ((value * 15) / 100)) + (value * 18) / 100;
    }
    else if(category == 'Cold-Drink')
    {
      return (value - ((value * 15) / 100)) + (value * 5) / 100;
    }
    return value;




  }

}
