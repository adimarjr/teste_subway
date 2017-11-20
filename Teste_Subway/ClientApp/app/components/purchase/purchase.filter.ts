import { Pipe, PipeTransform } from '@angular/core';
import { Purchase } from '../../_models/index';

@Pipe({
    name: 'purchasefilter'
})
export class PurchaseFilterPipe implements PipeTransform {
    transform(items: Purchase[], term: string): any {
        console.log(term);
        return term
            ? items.filter(item => (item.client.name.indexOf(term) !== -1)
                                || (item.product.indexOf(term) !== -1))
            : items;
    }
}