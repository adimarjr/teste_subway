import { Component, Injector, Inject, Output, EventEmitter, ElementRef, OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Client } from '../../_models/index';
import { AccountService } from '../../services/AccountService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//class ClientDTO implements Client {
//    constructor(public id: number, public name: string, public phone: string, public birth: string, public address: string, public active: boolean) { }
//}

@Component({
    selector: 'update-account-modal',
    templateUrl: './account.update.component.html'
})
export class AccountUpdateComponent implements OnInit {
    active: boolean = false;
    saving: boolean = false;
    public account: Client;

    constructor(private AccountService: AccountService, private route: ActivatedRoute, private router: Router) {
        
        
    }
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => 
                this.AccountService.get(Number(params.get('id')))).subscribe(response => {
                    this.account = response;
                    this.active = true;
                });
    }    
    save(): void {
        this.saving = true;
        this.AccountService.update(this.account).subscribe(result => {
            this.router.navigate(['/account-list']);
        }, error => console.error(error));
    }
    close(): void {
        this.router.navigate(['/account-list']);
    }
}