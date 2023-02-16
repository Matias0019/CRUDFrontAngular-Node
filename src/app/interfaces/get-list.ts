import { User } from "./user";

export interface GetList {
    results?: Array<any>;
    page?: number;
    limit?: number;
    totalPages?: number;
    totalResults?: number;
}