export const cart=[];
 export function addToCart(productId) {
    let matchingQuantity;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingQuantity = cartItem;
      }

    });
    if (matchingQuantity) {
      matchingQuantity.quantity += 1;
    } else {
      cart.push({ productId: productId, quantity: 1 })
      console.log(cart);
    }
  }