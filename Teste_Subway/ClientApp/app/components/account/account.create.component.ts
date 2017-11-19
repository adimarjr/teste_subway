import { Component, ViewChild, Injector, Inject, Output, EventEmitter, ElementRef, OnInit  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'account-create',
    templateUrl: './account.create.component.html'
})
export class AccountCreateComponent implements OnInit {
    @ViewChild('createAccountModal') modal: ModalDirective;
    @ViewChild('modalContent') modalContent: ElementRef;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    active: boolean = false;
    saving: boolean = false;
    account: Client;

    constructor(
        injector: Injector,
        private http: Http,
        @Inject('BASE_URL') private baseUrl: string
    ) {

    }

    ngOnInit(): void {
    }

    show(): void {
        this.active = true;
        this.modal.show();
        this.account = {
            name: '',
            birth: '',
            phone: '',
            address: '',
            id: 0,
            active: false
        };
    }
    
    save(): void {
        this.create(this.account);
    }

    create(input: Client) {
        let url_ = this.baseUrl + 'api/account';
        let body = JSON.stringify(input);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url_, body, options)
            .map(res => res.json().message);
    }

    close(): void {
        this.active = false;
        this.modal.hide();
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
