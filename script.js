// script.js

// 1. (Data)
const productsData = [
  // Classic (6 Cars)
  {
    id: 1,
    name: "Mercedes 300SL",
    price: 1200000,
    cat: "classic",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/1955_Mercedes-Benz_300SL_Gullwing_Coupe_34_right.jpg",
  },
  {
    id: 2,
    name: "Ford Mustang 1967",
    price: 850000,
    cat: "classic",
    img: "https://images.ctfassets.net/c9t6u0qhbv9e/1967FordMustangPreviewsummary/3564bff97eeaadb3637ea450c0a95b08/1967_Ford_Mustang_Preview_summaryImage.jpeg",
  },
  {
    id: 3,
    name: "Porsche 911 Targa",
    price: 980000,
    cat: "classic",
    img: "https://images.classic.com/vehicles/45a8c91486376c6c3e7ce8a33ac508eb2e1d4f14.jpg?ar=16:9&fit=crop&h=338&w=600",
  },
  {
    id: 4,
    name: "Chevrolet Camaro SS",
    price: 720000,
    cat: "classic",
    img: "https://photos.classiccars.com/cc-temp/listing/196/4879/53462532-1969-chevrolet-camaro-rs-ss-thumb.jpg",
  },
  {
    id: 5,
    name: "Aston Martin DB5",
    price: 2100000,
    cat: "classic",
    img: "https://images.classic.com/vehicles/2564b9f0414931cf5d7febc423b6bce68fa6da44.jpg?ar=16:9&fit=crop&h=338&w=600",
  },
  {
    id: 6,
    name: "Jaguar E-Type",
    price: 1600000,
    cat: "classic",
    img: "https://images.classic.com/vehicles/406acfa69719aed7a20fb8d58c2d6e86.jpeg?ar=16:9&fit=crop&h=338&w=600",
  },
  // Sport (6 Cars)
  {
    id: 7,
    name: "Ferrari 488",
    price: 3200000,
    cat: "sport",
    img: "https://i.ebayimg.com/images/g/51gAAeSwHj9pAO3S/s-l400.webp",
  },
  {
    id: 8,
    name: "Lamborghini Huracan",
    price: 3500000,
    cat: "sport",
    img: "https://atcimages.kbb.com/hn/c/9a32a82fe4004e829a8f3b99ac20e254.jpg?format=auto&width=408&height=306",
  },
  {
    id: 9,
    name: "McLaren 720S",
    price: 3100000,
    cat: "sport",
    img: "https://platform.cstatic-images.com/in/v2/stock_photos/cc7f8a12-f039-45ac-9c5c-2498d7f018fb/b3f2b223-a3ac-4f1e-8cbf-d8433f1878a9.png",
  },
  {
    id: 10,
    name: "Bugatti Chiron",
    price: 9500000,
    cat: "sport",
    img: "https://hips.hearstapps.com/hmg-prod/images/03-02-bugatti-chiron-super-sport-molsheim-3-4-front-hr-1623081670.jpg?crop=0.627xw:0.558xh;0.343xw,0.402xh&resize=640:*",
  },
  {
    id: 11,
    name: "Audi R8",
    price: 1800000,
    cat: "sport",
    img: "https://wallpapers.com/images/hd/audi-r8-pictures-utnpgs0egdc89ksg.jpg",
  },
  {
    id: 12,
    name: "Porsche 911 GT3",
    price: 2200000,
    cat: "sport",
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-porsche-911-gt3-103-6712782c2ac2e.jpg?crop=1xw:1xh;center,top",
  },
  // Economy (6 Cars)
  {
    id: 13,
    name: "Dacia Logan",
    price: 130000,
    cat: "economy",
    img: "https://s1.cdn.autoevolution.com/images/news/facelifted-dacia-logan-celebrates-digital-premiere-254669-7.jpg",
  },
  {
    id: 14,
    name: "Renault Clio 5",
    price: 170000,
    cat: "economy",
    img: "https://t4.ftcdn.net/jpg/04/42/36/23/360_F_442362398_30P7Japm1dZzEJ8ZeIhF1nAFWs72JFXV.jpg",
  },
  {
    id: 15,
    name: "Peugeot 208",
    price: 180000,
    cat: "economy",
    img: "https://image-proxy.kws.kaavan.es/i/480-320/vehicles/3e802adb-0df9-4786-93b6-4ad02b31b648/medias/5029282.jpg?format=webp",
  },
  {
    id: 16,
    name: "Hyundai i20",
    price: 160000,
    cat: "economy",
    img: "https://parkers-images.bauersecure.com/wp-images/22196/cut-out/420x280/110-hyundai-i20.jpg",
  },
  {
    id: 17,
    name: "Volkswagen Polo",
    price: 200000,
    cat: "economy",
    img: "https://www.tc-v.com/cdn/trade/img06/cars/3147874/40164621/japan%20car/2018+volkswagen+polo/01.jpg?width=214&height=161&type=resize",
  },
  {
    id: 18,
    name: "Toyota Yaris",
    price: 190000,
    cat: "economy",
    img: "https://imgcdn.oto.com/large/gallery/color/38/337/toyota-yaris-trd-color-305225.jpg",
  },
];

// 2.(Translations)
const langData = {
  en: {
    home: "Home",
    products: "Cars",
    categories: "Categories",
    about: "About",
    cartTitle: "Shopping Cart",
    total: "Total",
    addToCart: "Add to Cart",
    heroTitle: "Drive Your Dream",
    heroBtn: "Shop Now",
    classic: "Classic Cars",
    sport: "Sports Cars",
    economy: "Economy Cars",
    aboutTitle: "About Me",
  },
  fr: {
    home: "Accueil",
    products: "Voitures",
    categories: "Catégories",
    about: "À Propos",
    cartTitle: "Panier",
    total: "Total",
    addToCart: "Ajouter",
    heroTitle: "Conduisez Votre Rêve",
    heroBtn: "Acheter",
    classic: "Voitures Classiques",
    sport: "Voitures Sportives",
    economy: "Voitures Éco",
    aboutTitle: "À Propos de Moi",
  },
  ar: {
    home: "الرئيسية",
    products: "السيارات",
    categories: "التصنيفات",
    about: "من أنا",
    cartTitle: "سلة المشتريات",
    total: "المجموع",
    addToCart: "أضف للسلة",
    heroTitle: "قُد سيارة أحلامك",
    heroBtn: "تسوق الآن",
    classic: "سيارات كلاسيكية",
    sport: "سيارات رياضية",
    economy: "سيارات اقتصادية",
    aboutTitle: "نبذة عني",
  },
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentLang = localStorage.getItem("lang") || "en";

document.addEventListener("DOMContentLoaded", () => {
  // Init Functions
  updateCartCount();
  setupTheme();
  setupLanguage();
  renderProductsIfPage();
  setupScrollReveal();

  // Event Listeners
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
  });

  document.querySelector(".cart-btn").addEventListener("click", toggleCart);
  document.querySelector(".close-cart").addEventListener("click", toggleCart);
});

// --- Logic ---

function toggleCart() {
  const sidebar = document.querySelector(".cart-sidebar");
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) renderCartItems();
}

function addToCart(id) {
  const product = productsData.find((p) => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(currentLang === "ar" ? "تمت الإضافة!" : "Added to Cart!");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
  updateCartCount();
}

function updateCartCount() {
  document.querySelector(".cart-count").innerText = cart.length;
}

function renderCartItems() {
  const container = document.querySelector(".cart-items");
  const totalEl = document.getElementById("cart-total-price");
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <small>${item.price.toLocaleString()} MAD</small>
                </div>
                <i class="fas fa-trash" style="color:red; cursor:pointer" onclick="removeFromCart(${index})"></i>
            </div>
        `;
  });
  totalEl.innerText = total.toLocaleString() + " MAD";
}

function renderProductsIfPage() {
  // If we are on products page
  if (document.getElementById("classic-grid")) {
    renderGrid("classic", "classic-grid");
    renderGrid("sport", "sport-grid");
    renderGrid("economy", "economy-grid");
  }
}

function renderGrid(cat, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  const items = productsData.filter((p) => p.cat === cat);
  items.forEach((p) => {
    const btnText = langData[currentLang].addToCart;
    const div = document.createElement("div");
    div.className = "card reveal";
    div.innerHTML = `
            <div class="card-img" style="background-image: url('${
              p.img
            }')"></div>
            <div class="card-info">
                <h3>${p.name}</h3>
                <span class="price">${p.price.toLocaleString()} MAD</span>
                <button class="add-btn" onclick="addToCart(${
                  p.id
                })">${btnText}</button>
            </div>
        `;
    container.appendChild(div);
  });
}

function setupTheme() {
  const themeBtn = document.getElementById("theme-toggle");
  if (localStorage.getItem("theme") === "dark")
    document.body.classList.add("dark-mode");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
}

function setupLanguage() {
  const langSelect = document.getElementById("lang-select");
  langSelect.value = currentLang;
  applyLanguage(currentLang);

  langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    localStorage.setItem("lang", currentLang);
    location.reload(); // Reload to refresh JS rendered content
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  if (lang === "ar") {
    document.documentElement.dir = "rtl";
    document.body.style.fontFamily = "'Cairo', sans-serif";
  } else {
    document.documentElement.dir = "ltr";
    document.body.style.fontFamily = "'Poppins', sans-serif";
  }

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (langData[lang][key]) el.innerText = langData[lang][key];
  });
}

function setupScrollReveal() {
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100)
        el.classList.add("active");
    });
  });
  // Trigger once
  window.dispatchEvent(new Event("scroll"));
}
