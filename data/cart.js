export const cart = [];
export function addToCart(productsId)
{
  let matches = 0;
    
    cart.forEach((cartItem) => {
      if (cartItem.productsId === productsId) {
        cartItem.quantity += 1;
        matches += 1;
      }
    });
    if (matches === 0) {
      cart.push({
        productsId: productsId,
        quantity: 1
      });
    }
}

