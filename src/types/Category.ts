import { Product } from "./Product";

export interface Category {
    id: number;
    name: string;
    displayName: string;
    imageUrl: string;
    products: Product[];
}