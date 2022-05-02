const endpoint = "http://thordurfrimann.dk/silfen-db/wordpress/wp-json/wp/v2/product?_embed";

getProducts();

function getProducts(){
    fetch(endpoint)
    .then(res=>res.json())
    .then(setupProducts);
}

function setupProducts(products){
    const template = document.querySelector("template").content;
    const parentElement = document.querySelector(".productList");

    products.forEach(product=>{
        const copy = template.cloneNode(true);
        copy.querySelector(".productImage").src = product.list_image1;
        copy.querySelector(".productImage2").src = product.list_image2;

        copy.querySelector(".productLink").href = `singleproduct.html?id=${product.id}`;


        copy.querySelector(".cardTitle").textContent = product.title.rendered;
        copy.querySelector(".cardPrice").textContent = `DKK ${product.price}`;
        
        copy.querySelector(".color").style.backgroundColor = product._embedded["wp:term"][1][0].name;
        
 
        parentElement.appendChild(copy);
    })
}