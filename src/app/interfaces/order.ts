export interface Order {
    id?: string;
    address: string;
    country: string;
    phone: number;
    total: number;
    product: Array<any>;
}
