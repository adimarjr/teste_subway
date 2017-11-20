import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Client } from '../_models/index';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

@Injectable()
export class AccountService {
    private endpoint: string;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        this.endpoint = baseUrl + 'api/account';
    }

    //busca todas as contas
    getAll() {
        return this.http.get(this.endpoint);
    }
    //busca uma conta por ID
    get(id: number): Observable<Client> {
        return this.http.get(`${this.endpoint}/${id}`).map(response => response.json() as Client);
    }
    //busca todas as contas ativas
    getActive() {
        return this.http.get(this.endpoint+'/active');
    }
    //salva nova conta
    insert(client: Client): Observable<string> {
        let body = JSON.stringify(client);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.endpoint, body, options)
            .catch(this.handleError);
    }
    //atualizar uma conta
    update(client: Client): Observable<string> {
        let body = JSON.stringify(client);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`${this.endpoint}/${client.id}`, body, options)
            .catch(this.handleError);
    }
    //excluir uma conta
    delete(id: number): Observable<string> {

        return this.http.delete(`${this.endpoint}/${id}`)
            .catch(this.handleError);
    }
    inactivate(id: number) {
        let body = null;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`${this.endpoint}/${id}/inactive`, body, options)
            .catch(this.handleError);
    }
    countActive() : Observable<number> {
        return this.http.get(`${this.endpoint}/active-accounts`).
            map(response => response.json() as number);
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Opps!! Server error');
    }

}
