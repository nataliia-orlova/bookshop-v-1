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

let currentSelectedCheckboxes = [];

function setProductList(value, selectedCheckboxes) {
    //Assign array
    if (!currentSelectedCheckboxes.length) {
        currentSelectedCheckboxes = selectedCheckboxes;
        //Remove from array
    } else if (currentSelectedCheckboxes.includes(value)) {
        let currentValueIndex = currentSelectedCheckboxes.indexOf(value);
        currentSelectedCheckboxes.splice(currentValueIndex, 1);
        //Add to array
    } else {
        currentSelectedCheckboxes.push(value);
    }
    console.log(currentSelectedCheckboxes);
}

//Create a function that updates the gallery
function updateList(type, value) {
    const selectedCheckboxes = checkboxes
        //Filter checked checkboxes
        .filter((checkbox) => checkbox.checked)
        //Create a new array of items with the same value
        .map((checkbox) => checkbox.value);

    setProductList(value, selectedCheckboxes);

    //Render filtered products
    let filteredProducts = products.filter((product) =>
        currentSelectedCheckboxes.includes(product[type])
    );
    showProducts(filteredProducts);

    //Show filter labels
    const activeFilters = checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.dataset.name);
    showFilters(activeFilters);

    //Render initial array of products when checkboxes are not checked
    if (currentSelectedCheckboxes.length === 0) {
        showProducts(products);
        return;
    }
}

//Add event listeners to checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        updateList(checkbox.attributes.name.value, checkbox.value);
    });
});

//Render applied filters
function showFilters(activeFilters) {
    //Select element from the DOM
    let appliedFilters = document.querySelector('.applied-filter');
    //Create new element

    let currentActiveFilters = [...new Set(activeFilters)];

    appliedFilters.innerHTML = '';

    currentActiveFilters.forEach((activeFilter) => {
        let appliedFilter = document.createElement('div');
        appliedFilter.classList.add('applied-filter__item');
        appliedFilter.innerHTML = activeFilter;
        appliedFilters.appendChild(appliedFilter);
    });
}

//Sort products
const select = document.getElementById('select');

select.addEventListener('change', () => {
    let sortedProducts = [...products];
    let currentValueIndex = select.selectedIndex;
    console.log(currentValueIndex);
    if (currentValueIndex === 1) {
        sortedProducts.sort((a, b) => b.rating - a.rating);
        showProducts(sortedProducts);
    } else if (currentValueIndex === 2) {
        sortedProducts.sort((a, b) => b.price - a.price);
        showProducts(sortedProducts);
    } else if (currentValueIndex === 3) {
        sortedProducts.sort((a, b) => a.price - b.price);
        showProducts(sortedProducts);
    } else {
        showProducts(sortedProducts);
    }
});
