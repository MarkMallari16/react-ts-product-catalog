import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CartItem, Product } from "../types/product";

//context type
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}

//creating context
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const stored = localStorage.getItem("cartItems");

        return stored ? JSON.parse(stored) : [];
    });


    useEffect(() => {

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

    }, [cartItems])

    //function to add cart
    const addToCart = (product: Product, quantity: number) => {
        setCartItems((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity: quantity }]
        })
    }

    const removeFromCart = (id: string) => {
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }

    const updateQuantity = (id: string, quantity: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item)
        )
    }

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}