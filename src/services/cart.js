// ações que o carrinho pode fazer

// Casos de uso

// -> adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// -> Calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:");
    const result = userCart.reduce((total, item) => {
        return total + item.subtotal();
    }, 0);

    console.log(`💸 Total: ${result}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// -> remover um item
async function removeItem(userCart, item) {
    // encontrar o o index
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    // caso não encontre o item
    if (indexFound < 0) {
        console.log("Item não encontrado");
        return;
    }

    // item > 1 subtrair o Item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    // item = 1 deletar o item

    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

// -> mostrar os itens do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.map((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price} | ${
                item.quantity
            } | Subtotal: R$ ${item.subtotal()} `
        );
    });
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
