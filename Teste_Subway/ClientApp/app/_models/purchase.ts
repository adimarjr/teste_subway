import { Client } from './Client';

export interface Purchase {
    client: Client,
    date: Date,
    value: number,
    product: string,
    paid: boolean,
    id: number,
    active: boolean
}