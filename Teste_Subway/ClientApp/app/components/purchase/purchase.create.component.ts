import { Component, Injector, Inject, Output, EventEmitter, ElementRef, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Client, Purchase } from '../../_models/index';
import { AccountService } from '../../services/AccountService';
import { PurchaseService } from '../../services/PurchaseService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

class PurchaseDTO implements Purchase {
    constructor(public id: number, public client: Client, public product: string, public date: Date, public value: number, public paid:boolean, public active: boolean) { }
}

@Component({
    selector: 'create-purchase-modal',
    templateUrl: './purchase.create.component.html'
})
export class PurchaseCreateComponent implements OnInit {
    active: boolean = false;
    saving: boolean = false;
    public purchase: Purchase;
    public clients: Client[];

    constructor(private AccountService: AccountService, private PurchaseService: PurchaseService, private router: Router) {
        this.active = true;
        this.purchase = new PurchaseDTO(0, { active: true, address: '', birth: new Date(), id: 0, name: '', phone: '' }, '', new Date(), 0, false, true);
    }
    ngOnInit(): void {
        this.AccountService.getActive().subscribe(response => {
            this.clients = response.json() as Client[];
        });
    }
    save(): void {
        this.saving = true;
        this.PurchaseService.insert(this.purchase).subscribe(result => {
            this.close();
        }, error => console.error(error));
    }
    close(): void {
        this.router.navigate(['/purchase-list']);
    }
}