const menuProduct = [
  {
    id: 1,
    category: "kid",
    title: "KID",
    price: "30.99$",
    imgSrc: "./image/kid1.jpg",
  },
  {
    id: 2,
    category: "men",
    title: "MEN",
    price: "30.99$",
    imgSrc: "./image/men8.jpg",
  },
  {
    id: 3,
    category: "kid",
    title: "KID",
    price: "20.99$",
    imgSrc: "./image/kid2.jpg",
  },
  {
    id: 4,
    category: "kid",
    title: "KID",
    price: "10.99$",
    imgSrc: "./image/kid3.jpg",
  },
  {
    id: 5,
    category: "men",
    title: "MEN",
    price: "30.99$",
    imgSrc: "./image/men1.jpg",
  },
  {
    id: 6,
    category: "women",
    title: "WOMEN",
    price: "20.69$",
    imgSrc: "./image/women1.jpg",
  },
  {
    id: 7,
    category: "men",
    title: "MEN",
    price: "30.99$",
    imgSrc: "./image/men5.jpg",
  },
  {
    id: 8,
    category: "kid",
    title: "KID",
    price: "30.99$",
    imgSrc: "./image/kid4.jpg",
  },
  {
    id: 9,
    category: "kid",
    title: "KID",
    price: "30.99$",
    imgSrc: "./image/kid5.jpg",
  },
  {
    id: 10,
    category: "men",
    title: "MEN",
    price: "30.99$",
    imgSrc: "./image/men3.jpg",
  },
  {
    id: 11,
    category: "kid",
    title: "KID",
    price: "30.99$",
    imgSrc: "./image/kid6.jpg",
  },
  {
    id: 12,
    category: "kid",
    title: "KID",
    price: "30.99$",
    imgSrc: "./image/kid7.jpg",
  },
  {
    id: 13,
    category: "kid",
    title: "KID",
    price: "30.99$",
    imgSrc: "./image/kid8.jpg",
  },
  {
    id: 14,
    category: "men",
    title: "MEN",
    price: "30.99$",
    imgSrc: "./image/men2.jpg",
  },

  {
    id: 15,
    category: "men",
    title: "MEN",
    price: "30.99$",
    imgSrc: "./image/men4.jpg",
  },
  {
    id: 16,
    category: "women",
    title: "WOMEN",
    price: "30.99$",
    imgSrc: "./image/women7.jpg",
  },

  {
    id: 17,
    category: "men",
    title: "MEN",
    price: "30.99$",
    imgSrc: "./image/men7.jpg",
  },

  {
    id: 18,
    category: "women",
    title: "WOMEN",
    price: "30.99$",
    imgSrc: "./image/women2.jpg",
  },
  {
    id: 19,
    category: "women",
    title: "WOMEN",
    price: "30.99$",
    imgSrc: "./image/women3.jpg",
  },
  {
    id: 20,
    category: "men",
    title: "MEN",
    price: "30.99$",
    imgSrc: "./image/men6.jpg",
  },
  {
    id: 21,
    category: "women",
    title: "WOMEN",
    price: "30.99$",
    imgSrc: "./image/women4.jpg",
  },
  {
    id: 22,
    category: "women",
    title: "WOMEN",
    price: "30.99$",
    imgSrc: "./image/women5.jpg",
  },
  {
    id: 23,
    category: "women",
    title: "WOMEN",
    price: "30.99$",
    imgSrc: "./image/women6.jpg",
  },

  {
    id: 24,
    category: "women",
    title: "WOMEN",
    price: "30.99$",
    imgSrc: "./image/women8.jpg",
  },
];
const menuWrapper = document.querySelector(".menu-wrapper");
const allBtns = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btn-container");

// button
btnContainer.addEventListener("click", (e) => {
  const btnID = e.target.dataset.id;
  // console.dir(btnID); ber sen chea jg dg tha .id ban mor pi na
  allBtns.forEach(function (btn) {
    if (btnID) {
      // jg ban ney tha ber yg click jom button vea ng ouy true tae ber yg click khos vea ng false
      // ber true nous vea ng delete class active jenh pi button jas hx add class active tv kan button dal ban click
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    // console.log(id) jab ban id robos button ni1ៗ derm bey yok vea tv tver condition
    const filterMenu = menuProduct.filter((item) => {
      return id == item.category;
    });

    if (id == "all") {
      showingProduct(menuProduct);
    } else {
      showingProduct(filterMenu);
    }
  });
});

// showpicture when open the website

let NewCart = [];

window.addEventListener("DOMContentLoaded", function () {
  showingProduct(menuProduct);
});

// create function showing

function showingProduct(arrayProduct) {
  const displayProduct = arrayProduct
    .map(function (p) {
      return `
        <article class="menu-card">
            <img src="${p.imgSrc}" alt="${p.category}" class="img">
            <span class="price">${p.price}</span>
            <div class="card-heading">
                <h3>${p.title}</h3>
                <button class="btn-cart" data-index=${p.id}>Buy Now</button>
            </div>
        </article>`;
    })
    .join("");
  menuWrapper.innerHTML = displayProduct;

  // increase number top cart
  let increaseNumber = 0;
  const topNumber = document.querySelector("#cartnumber");
  const btnCarts = document.querySelectorAll(".btn-cart");
  btnCarts.forEach(function (btnCart) {
    btnCart.addEventListener("click", (e) => {
      increaseNumber += 1;
      topNumber.textContent = increaseNumber;

// get information about the object when we click the button buy

      let index = e.target.getAttribute("data-index");
      let selectItem = menuProduct.find((e) => e.id === parseInt(index));
      NewCart.push(selectItem);
      addToCard()
    });
  });
}

//menu cart
const menuCart = document.getElementById('add-to-cart')
function addToCard() {
  const div = document.createElement("div");
  div.classList.add("card-item");
  NewCart.forEach((e) => {
    div.innerHTML = `
      <img src="${e.imgSrc}" alt="" class="img-item">
      <p class="name-item">${e.category}</p>
      <h3 class="price-item">${e.price}$</h3>
      <div class="incre-decre">
          <button class="decrease">--</button>
          <span class="cart-number">0</span>
          <button class="increase">+</button>
      </div>
    `
    menuCart.appendChild(div)
  });

  //  increase decrease in cart

const cartNumber = document.querySelector(".cart-number");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
let currentNumber = 0;
decrease.addEventListener("click", () => {
  currentNumber -= 1;
  cartNumber.textContent = currentNumber;
});
increase.addEventListener("click", () => {
  currentNumber += 1;
  cartNumber.textContent = currentNumber;
});

}

// subscribe

const btnSubscribe = document.querySelector(".subscribe");
const input = document.querySelector(".input");
btnSubscribe.addEventListener("click", () => {
  if (input.value) {
    window.alert("Thank You for your subscribe !!!");
    input.value = "";
  }
});

// open and closed menu like men women kid and all

const list = document.getElementById("list");
let isactive = true;
list.addEventListener("click", () => {
  if (isactive == true) {
    btnContainer.style.top = "75px";
    menuWrapper.style.margin = "60px auto";
    return (isactive = false);
  } else {
    btnContainer.style.top = "0px";
    menuWrapper.style.margin = "0px auto";
    return (isactive = true);
  }
});

// open and close cart

const cardContainer = document.querySelector(".card-container");
const footer = document.querySelector(".footer");
const clickCard = document.querySelector(".iconCard");
let isActive = true;
clickCard.addEventListener("click", function () {
  if (isActive == true) {
    menuWrapper.style.right = "10%";
    menuWrapper.style.width = "78%";
    cardContainer.style.left = "80%";
    cardContainer.style.height = "90vh";
    footer.style.width = "79%";
    btnContainer.style.width = "78%";
    btnContainer.style.padding = "10px 20px";
    return (isActive = false);
  } else {
    menuWrapper.style.right = "0%";
    menuWrapper.style.width = "95%";
    cardContainer.style.left = "100%";
    footer.style.width = "100%";
    btnContainer.style.width = "100%";
    return (isActive = true);
  }
});
const close  = document.querySelector(".close");
close.addEventListener("click",()=>{
    menuWrapper.style.right = "0%";
    menuWrapper.style.width = "95%";
    cardContainer.style.left = "100%";
    footer.style.width = "100%";
    btnContainer.style.width = "100%";
})


