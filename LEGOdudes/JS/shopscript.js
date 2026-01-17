const addToCartButtons = document.querySelectorAll(".legg-til-handlekurv");
const cartList = document.getElementById("handlekurv");
const cartTotal = document.getElementById("handlekurvtotal");
const cartCounter = document.querySelector(".telling");
const cartToggle = document.getElementById("cartToggle");
const cartDropdown = document.getElementById("cart-dropdown");
const produktListe = document.getElementById("produktListe");
const logoutBtn = document.getElementById("logoutBtn");

if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "login.html"; 
    })
}

function addCartButtonEvents() {
    const buttons = document.querySelectorAll(".legg-til-handlekurv");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const prodid = Number(button.dataset.prodid);
            addToCart(prodid);
        });
    });
}


cartToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    cartDropdown.classList.toggle("hidden");
});

cartDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
})

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const prodid = Number(button.dataset.prodid);
        addToCart(prodid);
    });
});



function addToCart(prodid) {
    const product = products.find(p => p.prodid === prodid);
    if (!product) return;

    if (product.storage === 0) {
        showToast(`${product.title} er utsolgt`, "remove");
        return;
    }

    const cartItem = cart.find(item => item.prodid === prodid);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            prodid: prodid,
            quantity: 1
        });
    }

    product.storage--;

    renderCart();
    renderProductStock();

    showToast(`${product.title} lagt til i handlekurven`);
}

function renderCart() {
    const cartList = document.getElementById("handlekurv");
    const totalEl = document.getElementById("handlekurvtotal");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.prodid === item.prodid);

        total += product.price * item.quantity;

        const li = document.createElement("li");
        li.classList.add("cart-item");

        li.innerHTML = `
        <span>${product.title}</span>
        <span>x${item.quantity}</span>
        <span>Kr ${product.price * item.quantity}</span>
        <button class="cart-remove" data-prodid="${item.prodid}">X</button>
        `;

        cartList.appendChild(li);
    });

    totalEl.textContent = `Totalt: Kr ${total},-`;

    const tellingEl = document.querySelector(".telling");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    tellingEl.textContent = totalItems;

    const clearBtn = document.getElementById("clearCartBtn");
    clearBtn.style.display = cart.length === 0 ? "none" : "block";

    addRemoveEvents();
}

function addRemoveEvents() {
    const removeButtons = document.querySelectorAll(".cart-remove");

    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const prodid = Number(button.dataset.prodid);

            const cartItem = cart.find(item => item.prodid === prodid);
            if (!cartItem) return;

            const product = products.find(p => p.prodid === prodid);

            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                showToast(`En ${product.title} fjernet`, "remove");
            } else {
                cart = cart.filter(item => item.prodid !== prodid);
                showToast(`${product.title} fjernet fra handlekurven`, "remove");
            }

            renderCart();
        });
    });

}

function showToast(message, type="add") {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.remove("hidden", "remove");
    toast.classList.add("show");

    if (type === "remove") {
        toast.classList.add("remove");
    }

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 300); 
    }, 2000);
}

function renderProductStock() {
    const stockElements = document.querySelectorAll(".lagerstatus");

    stockElements.forEach(el => {
        const prodid = Number(el.dataset.prodid);
        const product = products.find(p => p.prodid === prodid);
        const button = document.querySelector(
            `.legg-til-handlekurv[data-prodid="${prodid}"]`
        );

        if (!product) return;

        if (product.storage > 0) {
            el.textContent = `På lager: ${product.storage}`;
            el.style.color = "#00af4d";
            button.disabled = false;
        } else {
            el.textContent = "Utsolgt";
            el.style.color = "#c62828";
            button.disabled = true;
        }
    });
}

function clearCart() {
    cart.forEach(item => {
        const product = products.find(p => p.prodid === item.prodid);
        if (product) {
            product.storage += item.quantity;
        }
    });

    cart = [];

    renderCart();
    renderProductStock();

    showToast("Handlekurven er tømt", "remove");
}

document.addEventListener("click", (event) => {
    const isClickInside = cartDropdown.contains(event.target) || cartToggle.contains(event.target);

    if(!isClickInside) {
        cartDropdown.classList.add("hidden");
    }

    const clearCartBtn = document.getElementById("clearCartBtn");

    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", clearCart);
    }
});


renderProductStock();

