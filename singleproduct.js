const urlParams = new URLSearchParams(window.location.search);
const productID = urlParams.get("id");
const url = `http://thordurfrimann.dk/silfen-db/wordpress/wp-json/wp/v2/product/${productID}?_embed`;


fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));


    function showProduct(product){
        document.querySelector(".small-image1 img").src = product.image1;
        document.querySelector(".small-image2 img").src = product.image2;
        document.querySelector(".small-image3 img").src = product.image3;
        document.querySelector(".image1 img").src = product.image1;
        document.querySelector(".image2 img").src = product.image2;
        document.querySelector(".image3 img").src = product.image3;
        document.querySelector(".name").textContent = product.title.rendered;
        document.querySelector(".price").textContent = `DKK ${product.price}`;


        document.querySelector(".description").textContent = product.content.rendered.slice(4, -5);
        

        document.querySelector(".color").style.backgroundColor = product._embedded["wp:term"][1][0].name;
        document.querySelector(".material").textContent = product.materialdescription;
        document.querySelector(".dimensions").textContent = product.dimensions;
        document.querySelector(".strap").textContent = product.strap_length;

    }




