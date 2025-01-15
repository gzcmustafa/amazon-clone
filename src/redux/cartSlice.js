import {createSlice} from "@reduxjs/toolkit";

// LocalStorage'dan başlangıç durumunu al
const initialState = {
    products: JSON.parse(localStorage.getItem('cartProducts')) || [],
    productsNumber: parseInt(localStorage.getItem('cartProductsNumber')) || 0
};

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state,action) => {
            const addProductExists = state.products.find((product)=> product.id === action.payload.id)
            if (addProductExists) {
                addProductExists.quantity += parseInt(action.payload.quantity)
            } else {
                state.products.push({...action.payload, quantity:parseInt(action.payload.quantity)})
            }
            
            state.productsNumber = state.productsNumber + parseInt(action.payload.quantity);
            
            
            
            localStorage.setItem('cartProducts', JSON.stringify(state.products));
            localStorage.setItem('cartProductsNumber', state.productsNumber);
        },
        removeFromCart: (state,action) => {
            const productId = action.payload;
            const productIndex = state.products.findIndex(product => product.id === productId);
            if (productIndex !== -1) {               
                state.productsNumber -= state.products[productIndex].quantity;
                state.products.splice(productIndex, 1);
                
                // LocalStorage'a kaydet
                localStorage.setItem('cartProducts', JSON.stringify(state.products));
                localStorage.setItem('cartProductsNumber', state.productsNumber);
            }
        },
        decrementInCart: (state, action) => {
            const productId = action.payload; // Eylemden gelen ürün ID'sini al
            const product = state.products.find(product => product.id === productId); // Ürünü bul

            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1; // Ürünün miktarını azalt
                    state.productsNumber -= 1; // Toplam ürün sayısını azalt
                } else {
                    // Eğer ürün miktarı 1 ise, ürünü sepetten kaldır
                    state.productsNumber -= 1; // Toplam ürün sayısını azalt
                    state.products = state.products.filter(product => product.id !== productId); // Ürünü diziden kaldır
                }
                
                // LocalStorage'a kaydet
                localStorage.setItem('cartProducts', JSON.stringify(state.products));
                localStorage.setItem('cartProductsNumber', state.productsNumber);
            }
        },
        incrementInCart: (state,action) => {
            const productId = action.payload; // Eylemden gelen ürün ID'sini al
            const product = state.products.find(product => product.id === productId); // Ürünü bul

            if (product) {
                product.quantity += 1; // Ürünün miktarını artır
                state.productsNumber += 1; // Toplam ürün sayısını artır
                
                // LocalStorage'a kaydet
                localStorage.setItem('cartProducts', JSON.stringify(state.products));
                localStorage.setItem('cartProductsNumber', state.productsNumber);
            }
        }
    }
})

export const {addToCart,removeFromCart,incrementInCart,decrementInCart} = cartSlice.actions;
export default cartSlice.reducer;