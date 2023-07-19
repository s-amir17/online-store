<template>
   <div class="container">
      <Categories></Categories>
      <div class="row my-5" style="gap: 20px">
         <SingleProduct class="col" v-for="product in products" :key="product.id" :product="product"></SingleProduct>
      </div>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Categories from './Categories.vue';
import SingleProduct from './SingleProduct.vue';

export default {
   name: 'Products',
   components: { SingleProduct, Categories },

   methods: {
      ...mapActions({
         getProducts: 'getProducts',
      }),
   },

   computed: {
      ...mapGetters({
         products: 'products',
      }),
   },

   mounted() {
      this.getProducts();
   },
};
</script>
