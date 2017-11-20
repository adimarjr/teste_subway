import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../../_models/index';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Client[], term: string): any {
        return term ? items.filter(item => (!term || item.name.indexOf(term) !== -1)) : items; 
    }
}