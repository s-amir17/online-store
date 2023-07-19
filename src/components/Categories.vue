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
      }),

      getAll() {
         this.isActive = ' ';
         this.getProducts();
      },

      getWithCategory(category) {
         this.isActive = category;
         this.getProductsCategory(category);
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
   },
};
</script>

<style lang="scss" scoped>
.category-btns {
   display: flex;
   gap: 20px;
   margin: 30px 0 10px;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
}
</style>
