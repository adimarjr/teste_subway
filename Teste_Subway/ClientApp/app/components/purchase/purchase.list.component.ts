import { Component, Inject, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Client, Purchase } from '../../_models/index';
import { PurchaseService } from '../../services/PurchaseService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PurchaseFilterPipe } from './purchase.filter';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
    selector: 'purchase-list',
    templateUrl: './purchase.list.component.html'
})
export class PurchaseListComponent {
    public purchases: Purchase[];
    public search: string;
    alive: boolean;
    
    constructor(private PurchaseService: PurchaseService, private router: Router) {
        this.search = '';
        PurchaseService.getAll().subscribe(result => {
            this.purchases = result.json() as Purchase[];
        }, error => console.error(error));
    }
    create(): void {
        this.router.navigate(['/purchase-create']);
    }
    inactivate(item: Client) {
        this.PurchaseService.inactivate(item.id).subscribe(response => {
            item.active = false;
        });
    }
}
