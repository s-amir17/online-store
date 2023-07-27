<template>
   <div class="category-btns">
      <button @click="getAll" class="btn btn-outline-secondary" :class="{ active: isActive == ' ' }">All products</button>
      <button
         v-for="(category, index) in categories"
         :key="index"
         @click="getWithCategory(category)"
         class="btn btn-outline-secondary"
         :class="{ active: isActive == category }">
         {{ toUpper(category) }}
      </button>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
   name: 'Categories',
   data() {
      return {
         isActive: ' ',
      };
   },

   methods: {
      ...mapActions({
         getProducts: 'getProducts',
         getCategories: 'getCategories',
         getProductsCategory: 'getProductsCategory',
         // sortedProducts: 'sortedProducts',
      }),

      getAll() {
         this.isActive = ' ';
         this.getProducts();
         // this.sortedProducts();
      },

      getWithCategory(category) {
         this.isActive = category;
         this.getProductsCategory(category);
         // this.sortedProducts();
      },

      toUpper(str) {
         if (str) {
            return str[0].toUpperCase() + str.slice(1).toLowerCase();
         }
      },
   },

   computed: {
      ...mapGetters({
         categories: 'categories',
      }),
   },

   mounted() {
      this.getCategories();
      // this.sortedProducts();
   },
};
</script>
