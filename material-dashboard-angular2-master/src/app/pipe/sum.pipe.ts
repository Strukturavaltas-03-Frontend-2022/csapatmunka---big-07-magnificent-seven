import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(items: any[], attr: string, phrase: string, key: string = ''): any {
    if (!Array.isArray(items) || !phrase) {
      let sum = 0;
      if (Array.isArray(items)) {
        items.forEach((item) => {
          sum += parseInt('' + item[attr]);
        });
        return (sum);
      }
      else return 0;
    }
   {
      let sum = 0;
      phrase = phrase.toLowerCase();
      items.filter(item => String(item[key]).toLowerCase().includes(phrase)).forEach((a) => {
        sum += parseInt('' + a[attr]);
      });
      return sum;
    }
  }
}