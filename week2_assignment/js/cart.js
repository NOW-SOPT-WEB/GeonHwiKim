document.addEventListener("DOMContentLoaded", () => {
    renderCartItems();
    setupSelectAllCheckbox();
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
        checkbox.checked = false;
        checkbox.className = 'item-checkbox';
        checkboxCell.appendChild(checkbox);

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        img.style.width = '3.5rem';
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
        deleteButton.onclick = () => deleteCartItem(item.name);
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

function setupSelectAllCheckbox() {
    const selectAllCheckbox = document.getElementById('selectAllCheckbox');
    selectAllCheckbox.addEventListener('change', () => {
        const checkboxes = document.querySelectorAll('.item-checkbox');
        checkboxes.forEach(checkbox => checkbox.checked = selectAllCheckbox.checked);
    });
}

function deleteCartItem(itemName) {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const newCart = cart.filter(product => product.name !== itemName);
    sessionStorage.setItem('cart', JSON.stringify(newCart));
    renderCartItems();
}

// 모달
document.getElementById('buy-btn').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.item-checkbox');
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    const modal = document.querySelector('.modal');
    const modalItems = document.getElementById('modal-items');
    const totalAmount = document.getElementById('total-amount');
    let total = 0;
    let itemsPurchased = [];

    modalItems.innerHTML = ''; 

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            const item = cartItems[index];
            const div = document.createElement('div');
            div.innerHTML = `<img src="${item.img}" alt="${item.name}" style="width:50px;"> ${item.name} - ${item.price.toLocaleString()} 원`;
            modalItems.appendChild(div);
            total += item.price;
            itemsPurchased.push(item.name);
        }
    });

    totalAmount.textContent = `총 금액: ${total.toLocaleString()} 원`;
    modal.style.display = 'block'; 

    document.getElementById('confirm-purchase').onclick = function() {
        alert('구매가 완료되었습니다!');
        cartItems.forEach(item => {
            if (itemsPurchased.includes(item.name)) {
                deleteCartItem(item.name);
            }
        });
        modal.style.display = 'none';
    };
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});
