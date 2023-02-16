import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offerprice'
})
export class OfferpricePipe implements PipeTransform {

  transform(value: number): unknown {
    return value - ((value * 15) / 100);
  }

}
