import { createContext, useContext, useState } from "react";
import { products } from "../assets/legodudes.js";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [productsState, setProductsState] = useState(products);

    return (
        <ProductsContext.Provider value={{ productsState, setProductsState }}>
            {children};
        </ProductsContext.Provider>
    );
}

export const useProducts = () => useContext(ProductsContext);