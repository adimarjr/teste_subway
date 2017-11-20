import { Component, Injector, Inject, Output, EventEmitter, ElementRef, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Client, Purchase } from '../../_models/index';
import { AccountService } from '../../services/AccountService';
import { PurchaseService } from '../../services/PurchaseService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'update-purchase-modal',
    templateUrl: './purchase.update.component.html'
})
export class PurchaseUpdateComponent implements OnInit {
    active: boolean = false;
    saving: boolean = false;
    public purchase: Purchase;
    public clients: Client[];

    constructor(private AccountService: AccountService, private PurchaseService: PurchaseService, private route: ActivatedRoute, private router: Router) {
    }
    ngOnInit(): void {
        this.AccountService.getActive().subscribe(response => {
            this.clients = response.json() as Client[];

            this.route.paramMap
                .switchMap((params: ParamMap) =>
                    this.PurchaseService.get(Number(params.get('id')))).subscribe(response => {
                        this.purchase = response;
                        this.active = true;
                    });
        });
    }    
    save(): void {
        this.saving = true;
        this.PurchaseService.update(this.purchase).subscribe(result => {
            this.close();
        }, error => console.error(error));
    }
    close(): void {
        this.router.navigate(['/purchase-list']);
    }
    byId(item1: Client, item2: Client) {
        return item1 && item2 && item1.id === item2.id;
    }
}