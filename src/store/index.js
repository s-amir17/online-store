import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
   state: {
      products: [],
      product: {},
      shopCart: [],
      categories: [],
   },

   getters: {
      products: ({ products }) => products,
      product: ({ product }) => product,
      cartProducts: ({ shopCart }) => shopCart.length,
      sum: ({ shopCart }) => shopCart.reduce((acc, item) => acc + item.product.price * item.qty, 0),
      categories: ({ categories }) => categories,
   },

   mutations: {
      GET_PRODUCTS(state, products) {
         state.products = products;
      },
      GET_ONE_PRODUCT(state, oneProduct) {
         state.product = oneProduct;
      },

      ADD_PRODUCT(state, { product, qty }) {
         state.shopCart.push({ product, qty });
      },
      REMOVE_PRODUCT(state, id) {
         state.shopCart = state.shopCart.filter(item => item.product.id !== id);
      },
      CLEAR_CART(state) {
         state.shopCart = [];
      },

      GET_CATEGORIES(state, categories) {
         state.categories = categories;
      },
   },

   actions: {
      async getProducts({ commit }) {
         try {
            const response = await axios.get('https://fakestoreapi.com/products');
            commit('GET_PRODUCTS', response.data);
            // console.log(response.data);
         } catch (error) {
            console.error(error);
         }
      },

      async getOneProduct({ commit }, id) {
         await axios
            .get('https://fakestoreapi.com/products/' + id)
            .then(response => {
               commit('GET_ONE_PRODUCT', response.data);
               // console.log(response.data);
            })
            .catch(error => console.log(error));
      },

      addProduct({ commit, state }, { product, qty }) {
         let addedProduct = state.shopCart.find(item => item.product.id === product.id);
         if (addedProduct) {
            addedProduct.qty += qty;
            return;
         }
         commit('ADD_PRODUCT', { product, qty });
      },

      removeProduct({ commit }, id) {
         commit('REMOVE_PRODUCT', id);
      },

      async getCategories({ commit }) {
         try {
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            commit('GET_CATEGORIES', response.data);
            // console.log(response.data);
         } catch (error) {
            console.error(error);
         }
      },
      async getProductsCategory({ commit }, category) {
         try {
            const response = await axios.get('https://fakestoreapi.com/products/category/' + category);
            commit('GET_PRODUCTS', response.data);
            // console.log(response.data);
         } catch (error) {
            console.error(error);
         }
      },
   },
});
