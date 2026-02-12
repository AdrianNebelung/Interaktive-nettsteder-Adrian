import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/legodudes";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Ninjago() {
    const {
        cart,
        addToCart,
        getCartQuantity,
        removeFromCart,
        clearCart,
        toast
    } = useCart();

    const ninjagoProducts = products.filter(p => p.category === "Ninjago");

    const getQuantity = (prodid) => {
        const item = cart.find(i => i.prodid === prodid);
        return item ? item.quantity : 0;
    };

    return (
        <div className="container">
            <Header/>

            <Nav/>


            <main>
                <h2 className="hoved">NINJAGO</h2>
                <p className="intro-text">
                    Våre mest etterspurte LEGO Ninjago-figurer akkurat nå.
                </p>

                <section className="produkter">
                    {ninjagoProducts.map(product => (
                        <ProductCard key={product.prodid} product={product} onAddToCart={() => addToCart(product.prodid, products)} cartQuanitity={getQuantity(product.id)}/>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Ninjago;