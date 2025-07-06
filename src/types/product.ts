export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
}
export interface CartItem extends Product {
    quantity: number;
}