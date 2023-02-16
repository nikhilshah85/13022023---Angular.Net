import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gendergreet'
})
export class GendergreetPipe implements PipeTransform {

  transform(value: string, empGender:string) {
    if(empGender == 'Male')
    {
      return 'Mr.' + value;
    }
    return 'Miss.' + value;
  }

}
