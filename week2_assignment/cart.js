document.addEventListener("DOMContentLoaded", () => {
    renderCartItems();
});

function renderCartItems() {
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    const tableBody = document.getElementById('cart-items');

    tableBody.innerHTML = '';

    cartItems.forEach(item => {
        const tr = document.createElement('tr');

        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkboxCell.appendChild(checkbox);

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        img.style.width = '50px';
        imgCell.appendChild(img);

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;

        const priceCell = document.createElement('td');
        priceCell.textContent = `${item.price.toLocaleString()} 원`;

        const categoryCell = document.createElement('td');
        categoryCell.textContent = item.category;

        const remarkCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = function() {
            const row = this.parentNode.parentNode;
            const itemName = row.children[2].textContent; // 상품명을 사용하여 식별

            // sessionStorage에서 상품 삭제
            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            const newCart = cart.filter(product => product.name !== itemName); // 상품명이 일치하지 않는 상품만 남깁니다
            sessionStorage.setItem('cart', JSON.stringify(newCart));

            // DOM에서 행 삭제
            row.parentNode.removeChild(row);

            // 장바구니가 비었다면 비어있음을 표시
            if (newCart.length === 0) {
                const tableBody = document.getElementById('cart-items');
                tableBody.innerHTML = '<tr><td colspan="6">장바구니가 비어 있습니다.</td></tr>';
            }
        };
        remarkCell.appendChild(deleteButton);

        tr.appendChild(checkboxCell);
        tr.appendChild(imgCell);
        tr.appendChild(nameCell);
        tr.appendChild(priceCell);
        tr.appendChild(categoryCell);
        tr.appendChild(remarkCell);

        tableBody.appendChild(tr);
    });

    if (cartItems.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6">장바구니가 비어 있습니다.</td></tr>';
    }
}
