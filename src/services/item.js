// Casos de uso

// -> Criar item com subtotal calculado
export default async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
}
