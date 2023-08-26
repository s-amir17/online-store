<template>
   <div class="container">
      <input class="form-control" v-model="specificProduct" ref="inp" type="text" placeholder="Search product" />

      <div class="cnt">
         <Categories></Categories>
         <MySelect></MySelect>
      </div>

      <div class="row my-3" style="gap: 20px">
         <SingleProduct class="col" v-for="product in searchedProduct" :key="product.id" :product="product"></SingleProduct>
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

   data() {
      return {
         specificProduct: '',
      };
   },

   methods: {
      ...mapActions({
         getProducts: 'getProducts',
      }),
   },

   computed: {
      ...mapGetters({
         products: 'products',
      }),

      searchedProduct() {
         return this.products.filter(product => product.title.toLowerCase().includes(this.specificProduct.toLowerCase()));
      },
   },

   mounted() {
      this.getProducts();
      this.$refs.inp.focus();
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
