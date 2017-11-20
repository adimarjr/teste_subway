import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Client, Purchase } from '../_models/index';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

@Injectable()
export class PurchaseService {
    private endpoint: string;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        this.endpoint = baseUrl + 'api/purchase';
    }

    //busca todas as compras
    getAll() {
        return this.http.get(this.endpoint);
    }
    //busca uma compra por ID
    get(id: number): Observable<Purchase> {
        return this.http.get(`${this.endpoint}/${id}`).map(response => response.json() as Purchase);
    }
    //salva nova compra
    insert(purchase: Purchase): Observable<string> {
        let body = JSON.stringify(purchase);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.endpoint, body, options)
            .catch(this.handleError);
    }
    //atualizar uma compra
    update(purchase: Purchase): Observable<string> {
        let body = JSON.stringify(purchase);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`${this.endpoint}/${purchase.id}`, body, options)
            .catch(this.handleError);
    }
    //excluir uma compra
    delete(id: number): Observable<string> {
        return this.http.delete(`${this.endpoint}/${id}`)
            .catch(this.handleError);
    }
    //inativar uma compra
    inactivate(id: number) {
        let body = null;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`${this.endpoint}/${id}/inactive`, body, options)
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Opps!! Server error');
    }

}
