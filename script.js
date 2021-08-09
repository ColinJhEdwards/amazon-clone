function getItems() {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          make: doc.data().make,
          rating: doc.data().rating,
          price: doc.data().price,
        });
      });
      generateItems(items);
    });
}

function addToCart(item) {
  console.log(item);
}

function generateItems(items) {
  let itemsHTML = "";
  items.forEach((item) => {
    let doc = document.createElement("div");
    doc.classList.add("product", "mt-4");
    doc.innerHTML = `
      <div class="product mt-4">
      <div
        class="
          image
          w-60
          h-56
          bg-white
          flex
          justify-center
          items-center
          rounded-lg
        "
      >
        <img
          class="p-4"
          src=${item.image}
          alt="switch"
        />
      </div>
      <div class="name text-gray-700 font-bold mt-2 text-sm">
        ${item.name}
      </div>
      <div class="make text-green-700 font-bold">${item.make}</div>
      <div class="rating text-yellow-300 font-bold my-1">
        ⭐⭐⭐⭐⭐ ${item.rating}
      </div>
      <div class="price font-bold text-gray-700 text-lg">$${item.price}.00</div>
      
    </div>
      `;
    let addToCartEl = document.createElement("div");
    addToCartEl.classList.add(
      "add-cart-btn",
      "h-8",
      "w-28",
      "bg-yellow-500",
      "flex",
      "justify-center",
      "items-center",
      "rounded",
      "mt-1",
      "text-white",
      "cursor-pointer",
      "hover:bg-yellow-600"
    );
    addToCartEl.innerText = "Add to cart";
    addToCartEl.addEventListener("click", () => {
      addToCart(item);
    });
    doc.appendChild(addToCartEl);
    document.querySelector(".products").appendChild(doc);
  });
}

// Calling Functions
getItems();
