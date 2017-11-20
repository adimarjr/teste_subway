import { Component, Injector, Inject, Output, EventEmitter, ElementRef, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Client } from '../../_models/index';
import { AccountService } from '../../services/AccountService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

class ClientDTO implements Client {
    constructor(public id: number, public name: string, public phone: string, public birth: Date, public address: string, public active: boolean) { }
}

@Component({
    selector: 'create-account-modal',
    templateUrl: './account.create.component.html'
})
export class AccountCreateComponent {
    active: boolean = false;
    saving: boolean = false;
    public account: Client;

    constructor(private AccountService: AccountService, private router: Router) {
        this.active = true;
        this.account = new ClientDTO(0, '','',new Date(),'',true);
    }
    
    save(): void {
        this.saving = true;
        this.AccountService.insert(this.account).subscribe(result => {
            this.router.navigate(['/account-list']);
        }, error => console.error(error));
    }

    close(): void {
        this.router.navigate(['/account-list']);
    }
}