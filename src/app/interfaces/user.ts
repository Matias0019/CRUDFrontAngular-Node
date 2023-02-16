export interface User {
    name: string;
    email: string;
    password?: string;
    role?: "admin" | "user";
    isEmailVerified?: boolean;
    id?: string;
}