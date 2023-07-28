<template>
   <div class="product">
      <div class="product__image">
         <router-link :to="{ name: 'OneProductView', params: { id: product.id } }">
            <img :src="product.image" :alt="product.title" />
         </router-link>
      </div>

      <div class="product__body">
         <h4 @click="$router.push(`/products/${product.id}`)">
            {{ product.title }}
            <!-- <router-link :to="{ name: 'OneProductView', params: { id: product.id } }">{{ product.title }}</router-link>\ -->
         </h4>

         <h5>{{ product.price }} $</h5>

         <button @click="addToCart" class="btn btn-secondary">Add to cart</button>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
   name: 'SingleProduct',

   props: {
      product: Object,
   },

   methods: {
      ...mapActions(['addProduct']),

      addToCart() {
         // this.product.qty = 1;
         // this.addProduct(this.product);
         this.addProduct({ product: this.product, qty: 1 });
      },
   },
};
</script>

<style lang="scss" scoped>
.product {
   margin: 0 auto;
   max-width: 400px;
   border: 1px solid cadetblue;
   border-radius: 10px;
   text-align: center;
   display: flex;
   flex-direction: column;

   &__image {
      padding: 10px;
      margin-top: auto;
      max-height: 400px;

      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
         transition: all 0.3s ease-in-out 0s;
         &:hover {
            transform: scale(1.04);
         }
      }
   }

   &__body {
      padding: 10px;
      margin-top: auto;
      text-align: center;

      h4 {
         cursor: pointer;
         text-decoration: underline;
         color: #3b71ca;
         display: inline-block;
         max-width: 250px;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;

         &:hover {
            color: #31599a;
         }
      }
      h5 {
         color: red;
         text-shadow: 1px 0 1.5px black;
      }
      p {
         text-transform: capitalize;
         font-style: italic;
      }
   }
}
</style>
