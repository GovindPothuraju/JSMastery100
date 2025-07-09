let allProducts=[];
    function productCard(products,container){
      container.innerHTML="";
      products.map((product)=>{
        const card = document.createElement("div");
        card.className="card";
        card.innerHTML=`
            <img src="${product.thumbnail}" alt="${product.title}" width="100%">
            <h3>${product.title}</h3>
            <p>Price: Rs.${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <p>Total: Rs.${product.total}</p>
            <p>Rating: ${"★".repeat(product.quantity)}</p>
            <button class="add-to-cart-button"
            onclick="addToCart(${allProducts.indexOf(product)})"
            >Add to cart</button>
        `;
        container.appendChild(card);
      })
    }

    async function body() {
      const response = await fetch('https://dummyjson.com/carts');
      const data = await response.json();
      const container = document.getElementById("cards");
      
      data.carts.forEach((cart)=>{
          cart.products.forEach((product)=>{
            allProducts.push(product);
          })
      })
      productCard(allProducts,container);
    }

    function filterByQuantity() {
      const rating = parseInt(document.getElementById("Rating").value);
      const filtered = allProducts.filter(
        product => product.quantity > rating
      );
      const container = document.getElementById("cards");
      productCard(filtered, container);
    }

    function resetProducts(){
      const container = document.getElementById("cards");
      productCard(allProducts,container);
    }
    
    function searchProducts(){
      let searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
      const filtered = allProducts.filter(
        product => product.title.toLowerCase().includes(searchTerm)
      );
      const container = document.getElementById("cards");
      productCard(filtered,container);
    }
    function addToCart(index){
      const product = allProducts[index];
      let cart =JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart",JSON.stringify(cart));
      alert(`${product.title} added to cart!`);
    }
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      document.querySelector(".cart-count").textContent = cart.length;
    }
    window.onload = function() {
      document.getElementById("searchInput").addEventListener("input", searchProducts);
      body();
      updateCartCount();
    };
