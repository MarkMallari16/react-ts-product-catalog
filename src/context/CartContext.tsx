import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CartItem, Product } from "../types/product";

//context type
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    showStatus: boolean,
    setShowStatus: React.Dispatch<React.SetStateAction<boolean>>;
    total: number;
}

//creating context
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const stored = localStorage.getItem("cartItems");

        return stored ? JSON.parse(stored) : [];
    });

    const [showStatus, setShowStatus] = useState<boolean>(false);

    useEffect(() => {
        if (showStatus) {
            const timer = setTimeout(() => {
                setShowStatus(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [showStatus])

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
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity: quantity }]
        })

        setShowStatus(true);
    }

    //remove product in cart
    const removeFromCart = (id: string) => {
        setCartItems((prev) => prev.filter(item => item.id !== id));
    }

    //update quantity
    const updateQuantity = (id: string, quantity: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item)
        )
    }

    //clear the cart
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
    }

    //total
    const total = cartItems.reduce((acc, currentValue) => {
        return acc + (currentValue.price * currentValue.quantity);
    }, 0)

    //context provider
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, showStatus, setShowStatus, total }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    //throw error 
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
}