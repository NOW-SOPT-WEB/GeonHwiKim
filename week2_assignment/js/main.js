import { SHOPPING_LIST } from "../js/const.js";

//전체 이미지 렌더링
const renderProducts = (SHOPPING_LIST) => {
    const productsContainer = document.querySelector('.section-products');

    productsContainer.innerHTML = "";

    SHOPPING_LIST.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.className = "section-product " + product.category;

        const img = document.createElement("img");
        img.src = product.img;
        img.alt = product.name;
        img.className = "section-img";

        // 클릭 이벤트 리스너 추가
        img.addEventListener('click', () => {
            if (confirm(`장바구니에 ${product.name}를 추가하시겠습니까?`)) {
                addToCart(product);
            }
        });

        const heartImg = document.createElement("img");
        heartImg.src = "../img/heart.jpg";
        heartImg.alt = "좋아요 버튼";
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

const addToCart = (product) => {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(product);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html'; // 장바구니 페이지로 이동
}

// 카테고리별 필터링
const handleCategoryClick = (category) => {
    const filteredProducts = category === '전체' ? SHOPPING_LIST : SHOPPING_LIST.filter(product => product.category === category);
    renderProducts(filteredProducts);
};

document.querySelectorAll('.nav-section__ul li').forEach(item => {
    item.addEventListener('click', () => handleCategoryClick(item.textContent.trim()));
});

renderProducts(SHOPPING_LIST);
