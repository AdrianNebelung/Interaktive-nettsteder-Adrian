function ProductCard({ product, onAddToCart, cartQuanitity = 0 }) {
    const isOutOfStock = product.storage <= 0;
    const stockText = isOutOfStock ? "Utsolgt" : product.storage <= 2 ? `Bare ${product.storage} igjen!` : `På lager (${product.storage})`;

    return (
        <article className="produkt-kort">
            <img src={`public/website_images/ninjago/PROD_${product.imagefile}`} alt={`${product.title} figur`}/>
            <h5>{product.category}</h5>
            <h3>{product.title}</h3>
            <p>Kr. {product.price}</p>

            <p className={`lagerstatus ${isOutOfStock ? "utsolgt" : ""}`}>
                {stockText}
            </p>

            <button className="legg-til-handlekurv" onClick={onAddToCart} disabled={product.storage <= 0}>
                {product.storage <= 0 ? "Utsolgt" : `Legg i handlekurv${cartQuanitity > 0 ? ` (${cartQuanitity})` : ""}`}
            </button>
        </article>
    );
}

export default ProductCard;