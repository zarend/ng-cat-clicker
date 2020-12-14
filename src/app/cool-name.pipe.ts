import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coolName'
})
export class CoolNamePipe implements PipeTransform {

  transform(value: string): string {
    return `cool cat ${value}`;
  }

}
