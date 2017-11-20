import { Component, Inject, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Client } from '../../_models/index';
import { AccountService } from '../../services/AccountService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FilterPipe } from './account.filter';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
    selector: 'account-list',
    templateUrl: './account.list.component.html'
})
export class AccountListComponent implements OnInit, OnDestroy {
    public accounts: Client[];
    public search: string;
    public searchActive: boolean;
    public countActive: number;
    alive: boolean;
    
    constructor(private AccountService: AccountService, private router: Router) {
        this.search = '';
        this.searchActive = true;
        AccountService.getAll().subscribe(result => {
            this.accounts = result.json() as Client[];
            this.alive = true;

            AccountService.countActive().subscribe(response => {
                this.countActive = response;
            });

        }, error => console.error(error));
    }
    ngOnInit(): void {
        IntervalObservable.create(60000)
            .takeWhile(() => this.alive)
            .subscribe(() => {
                this.AccountService.countActive().subscribe(response => {
                    this.countActive = response;
                });
            });
    }
    create(): void {
        this.router.navigate(['/account-create']);
    }
    inactivate(item: Client) {
        this.AccountService.inactivate(item.id).subscribe(response => {
            item.active = false;
        });
    }
    ngOnDestroy(): void {
        this.alive = false;
    }
}
