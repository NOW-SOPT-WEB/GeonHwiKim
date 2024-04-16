import { SHOPPING_LIST } from "./const.js";

// 상품 데이터를 불러와서 화면에 랜더링하는 함수
const renderProducts = (SHOPPING_LIST) => {
    const productsContainer = document.querySelector('.section-products');

    productsContainer.innerHTML = "";

    SHOPPING_LIST.forEach( (product) => {
        // 각 상품을 위한 HTML 요소 생성
        const productDiv = document.createElement('div');
        productDiv.className = "section-product " + product.category;

        const img = document.createElement("img");
        img.src = product.img;
        img.alt = product.name;
        img.className = "section-img";

        const heartImg = document.createElement("img");
        heartImg.src = "./img/heart.jpg"
        heartImg.alt = "좋아요 버튼"
        heartImg.className = "section-heart";

        const productName = document.createElement("p");
        productName.textContent = product.name;
        productName.className = "section-name";

        const productPrice = document.createElement("p");
        productPrice.textContent = product.price;
        productPrice.className = "section-price";


        
        productDiv.appendChild(img);
        productDiv.appendChild(heartImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);

        productsContainer.appendChild(productDiv);

    });
}

const handleCategoryClick = (category) => {
    const filteredProducts = category === '전체' ? SHOPPING_LIST : SHOPPING_LIST.filter(product => product.category === category);
    renderProducts(filteredProducts);
};

document.querySelectorAll('.nav-section__ul li').forEach(item => {
    item.addEventListener('click', () => handleCategoryClick(item.textContent.trim()));
});

document.addEventListener("DOMContentLoaded", () => renderProducts(SHOPPING_LIST));

renderProducts(SHOPPING_LIST);
