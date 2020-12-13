export const SET_PRODUCTS = (state,products) =>{
state.products = products;
}
export const SET_PRODUCT = (state,product)=>{
    state.product = product;
}
export const ADD_TO_CARD = (state,{product,quantity})=>{
const ProductInCart = state.cart.find(item=>{
    return item.product.id === product.id
});
if(ProductInCart){
    ProductInCart.quantity += quantity;
    return;
}
state.cart.push({
    product,quantity
});
}