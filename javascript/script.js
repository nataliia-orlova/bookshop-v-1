import { products } from './products.js';

//Create a function to display products:
function showProducts(products) {
    const productGallery = document.getElementById('product-gallery');
    //Clear previous products
    productGallery.innerHTML = '';
    //Loop through the array of products and render them in the gallery
    products.forEach((product) => {
        //Create card for every object in the array
        const productCard = document.createElement('div');
        //Add bootstrap styling
        productCard.className = 'col';
        //Add html content to each card
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
        //Add the cards to the DOM
        productGallery.appendChild(productCard);
    });
}

//Initial display of all products:
showProducts(products);

//Get checkboxes from the DOM
//Create array from the checkboxes (array-like elements) and assign it to a variable
const checkboxes = Array.from(
    document.querySelectorAll('input[type="checkbox"]')
);

//Create a function that updates the gallery
function updateList(type) {
    const selectedCheckboxes = checkboxes
        //Filter checked checkboxes
        .filter((checkbox) => checkbox.checked)
        //Create a new array of items with the same value
        .map((checkbox) => checkbox.value);

    const activeFilters = checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.dataset.name);

    //Render initial array of products when checkboxes are not checked
    if (selectedCheckboxes.length === 0) {
        showProducts(products);
        return;
    }
    //Filter products of chosen type
    let filteredProducts = products.filter((product) =>
        selectedCheckboxes.includes(product[type])
    );

    //Render filtered products
    showProducts(filteredProducts);
    showFilters(activeFilters);
}

//Add event listeners to checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        updateList(checkbox.attributes.name?.value ?? checkbox.value);
    });
});

//Render applied filters
function showFilters(activeFilters) {
    let appliedFilters = document.querySelector('.applied-filter');
    let appliedFilter = document.createElement('div');

    activeFilters.forEach((activeFilter) => {
        appliedFilter.classList.add('applied-filter__item');
        appliedFilter.innerHTML = activeFilter;
    });

    appliedFilters.appendChild(appliedFilter);
}
