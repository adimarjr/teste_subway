
export interface Client {
    name: string,
    birth: Date,
    phone: string,
    address: string,
    id: number,
    active: boolean
}
export interface ClientFilter {
    name: string,
    active: boolean
}
