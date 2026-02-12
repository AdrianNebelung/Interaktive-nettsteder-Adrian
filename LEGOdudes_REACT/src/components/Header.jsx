import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react"; 
import { products } from "../assets/legodudes";



function Header({ cartCount, onToggleCart }) {
    const { 
        cart, 
        getTotalItems,
        getTotalPrice,
        removeFromCart,
        clearCart,
        toast
    } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen(prev => !prev);
    
    const handleLogout = () => {
    };


    return (
        <header>
            <h1>
                <Link to="/">
                    <img src="public/website_images/LD_logo.svg" alt="LEGOdudes"/>
                </Link>
            </h1>

            <div className="handlekurv-container-1">
                <button className="cart-button" onClick={onToggleCart}>
                    <img src="public/website_images/legocart.svg" ale="Handlevogn"/>
                    <span className="telling">{getTotalItems()}</span>
                </button>
                
                <div id="cart-dropdown" className={`cart-dropdown ${isOpen ? "" : "hidden"}`} onClick={(e) => e.stopPropagation()}>
                    <h3>Din Handlevogn</h3>
                    <ul id="handlekurv">
                        {cart.map(item => {
                            const product = products.find(p => p.prodid === item.prodid);
                            if (!product) return null;
                            return (
                                <li key={item.prodid} className="cart-item">
                                    <span>{product.title}</span>
                                    <span>x{item.quantity}</span>
                                    <span>Kr {product.price * item.quantity}</span>
                                    <button className="cart-remove" onClick={() => removeFromCart(item.prodid, products)}>
                                        X
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <p id="handlekurvtotal">
                        Total: Kr {getTotalPrice()},-
                    </p>
                    {cart.length > 0 && (
                        <button id="clearCartBtn" onClick={() => clearCart(products)}>
                            Tøm handlekurv
                        </button>
                    )}
                </div>
            </div>

            <button id="logoutBtn" onClick={handleLogout}>
                Logg ut
            </button>

            {toast.visible && (
                <div id="toast" className={`toast show ${toast.type}`}>
                    {toast.message}
                </div>
            )}
        </header>
    );
}

export default Header;