import { products } from './products.js';

//Initial render of all products
function showAllProducts(products) {
    const productGallery = document.getElementById('product-gallery');
    //Clear previous products
    productGallery.innerHTML = '';
    //Loop through the array of products and render them in the gallery
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'col';
        productCard.innerHTML =
            /*html*/
            `
        <article class="card bg-white">
            <div
                class="card-body text-center d-flex flex-column"
            >
                <img
                    class="img-fluid"
                    src="${product.img}"
                    alt="${product.title}"
                />
                <hgroup class="py-2">
                    <h4 class="card-title">
                        ${product.title}
                    </h4>
                    <p class="card-text">${product.author}</p>
                    <span class="card-text"
                        >${product.price} &euro;</span
                    >
                </hgroup>
                <div
                    class="d-grid gap-2 d-block justify-content-lg-center mt-auto pt-1"
                >
                    <button
                        class="btn btn-primary me-md-2 w-100"
                        type="button"
                    >
                        Read more
                    </button>
                    <button
                        class="btn btn-warning w-100"
                        type="button"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
        `;
        productGallery.appendChild(productCard);
    });
}
showAllProducts(products);
