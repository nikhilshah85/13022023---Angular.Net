import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateings'
})
export class RateingsPipe implements PipeTransform {

  transform(value: string,isPerment:boolean)
  {
   if(value == 'HR' && isPerment)
   {
    return '***';
   }
   else if(value == 'HR'  && !isPerment)
   {
    return '(***)';
   }

   if(value == 'Sales' && isPerment)
   {
    return '****';
   }
   else if(value == 'Sales'  && !isPerment)
   {
    return '(****)';
   }

   if(value == 'Accounts' && isPerment)
   {
    return '*****';
   }
   else if(value == 'Accounts'  && !isPerment)
   {
    return '(*****)';
   }

   if(value == 'Trainer' && isPerment)
   {
    return 'A+*****';
   }
   else if(value == 'Sales'  && !isPerment)
   {
    return '(A+****)';
   }


   return 'NA';
  }

}
