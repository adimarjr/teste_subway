import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'account-list',
    templateUrl: './account.list.component.html'
})
export class AccountListComponent {
    public accounts: Client[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/account').subscribe(result => {
            this.accounts = result.json() as Client[];
        }, error => console.error(error));
    }
}

interface Client {
    name: string,
    birth: string,
    phone: string,
    address: string,
    id: number,
    active: boolean
}
