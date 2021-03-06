import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.addressLine1 + '<br>' + value.city + ',' + value.state + ' - ' + value.postalCode;
    } else {
      return value;
    }
  }

}
