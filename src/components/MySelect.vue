<template>
   <div class="my-select">
      <select v-model="selected" @change="sortProducts(selected)">
         <option value="" disabled>Sort by: Featured</option>
         <option v-for="option in options" :key="option.value" :value="option.value">{{ option.title }}</option>
      </select>
   </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
   data() {
      return {
         selected: '',
         options: [
            { value: 'low', title: 'Price: Low to High' },
            { value: 'high', title: 'Price: High to Low' },
         ],
      };
   },

   methods: {
      ...mapActions(['sortedProducts']),
      sortProducts(selected) {
         this.sortedProducts(selected);
      },
   },

   computed: {
      ...mapGetters({
         products: 'products',
      }),
   },

   mounted() {
      this.sortedProducts();
   },
};
</script>

<style lang="scss" scoped>
.my-select {
   margin-top: 25px;
   select {
      padding: 5px;
      border-radius: 7px;
      cursor: pointer;
   }
}
</style>
