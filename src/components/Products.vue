<template>
   <div class="container">
      <div class="cnt">
         <Categories></Categories>

         <MySelect></MySelect>
      </div>

      <div class="row my-5" style="gap: 20px">
         <SingleProduct class="col" v-for="product in products" :key="product.id" :product="product"></SingleProduct>
      </div>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Categories from './Categories.vue';
import SingleProduct from './SingleProduct.vue';
import MySelect from './MySelect.vue';

export default {
   name: 'Products',
   components: { SingleProduct, Categories, MySelect },

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

<style lang="scss" scoped>
.cnt {
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 15px;
   .category-btns {
      display: flex;
      gap: 20px;
      margin: 30px 0 10px;
      align-items: center;
      flex-wrap: wrap;
   }
}
</style>
