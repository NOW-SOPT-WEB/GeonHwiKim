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
        remarkCell.textContent = '비고'; 

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
