const inventory = [
    {
        productName: "Amul Milk 500ml",
        category: "Dairy",
        sellingPrice: 28,
        quantityInStock: 120,
        expiryDate: "2026-03-02"
    },
    {
        productName: "Tata Sampann Toor Dal 1kg",
        category: "Groceries",
        sellingPrice: 165,
        quantityInStock: 60,
        expiryDate: "2026-08-15"
    },
    {
        productName: "Lay's Classic Chips 50g",
        category: "Snacks",
        sellingPrice: 20,
        quantityInStock: 200,
        expiryDate: "2026-06-10"
    },
];

var form = document.querySelector('form');
var alldata = document.querySelector('.all-data');

let editIndex = null;

// 🔹 Render Function or it means printing the the div box
function printData() {
    var sum = "";

    inventory.forEach(function(elem, idx) {
        sum += `
            <div class="item">
                <h3>${elem.productName}</h3>
                <h4>Category : <span>${elem.category}</span></h4>
                <h4>Price : <span>${elem.sellingPrice}</span></h4>
                <h4>Quantity: <span>${elem.quantityInStock}</span></h4>
                <h4>Expiry Date : <span>${elem.expiryDate}</span></h4>
                <div>
                    <button class="edit" data-id="${idx}">Edit</button>
                    <button class="remove" data-id="${idx}">Remove</button>
                </div>
            </div>
        `;
    });

    alldata.innerHTML = sum;
}

printData();

// 🔹 Submit (Add + Edit)
form.addEventListener('submit', function(e) {
    e.preventDefault();

    var NewProduct = {
        productName: form.elements.productName.value,
        category: form.elements.category.value,
        sellingPrice: form.elements.sellingPrice.value,
        quantityInStock: form.elements.quantityInStock.value,
        expiryDate: form.elements.expiryDate.value
    };

    if (editIndex !== null) {
        // UPDATE
        inventory[editIndex] = NewProduct;
        editIndex = null;     //again keeping index as null
    } else {
        // ADD
        inventory.push(NewProduct);
    }

    form.reset();
    printData();
});

// 🔹 Edit & Remove Click
alldata.addEventListener('click', function(e) {

    // REMOVE
    if (e.target.classList.contains("remove")) {
        const index = e.target.dataset.id;
        inventory.splice(index, 1);
        printData();
    }

    // EDIT
    if (e.target.classList.contains("edit")) {
        const index = e.target.dataset.id;
        console.log(index);

        const item = inventory[index];
        console.log(item);


        form.elements.productName.value = item.productName;
        form.elements.category.value = item.category;
        form.elements.sellingPrice.value = item.sellingPrice;
        form.elements.quantityInStock.value = item.quantityInStock;
        form.elements.expiryDate.value = item.expiryDate;

        editIndex = index;
    }

});