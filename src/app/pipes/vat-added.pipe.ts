import { Pipe, PipeTransform } from '@angular/core';
//elinizdeki veriyi görsel olarak daha farklı göstermek için kullanılır
@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number ): number {
    return value+ (value*rate/100);
  }

}
