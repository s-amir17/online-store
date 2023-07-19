<template>
   <div class="container-md my-5">
      <div class="product">
         <div class="product__img">
            <img :src="product.image" :alt="product.title" :title="product.title" />
         </div>
         <div class="product__body">
            <h2>{{ product.title }}</h2>
            <div v-if="product.rating">{{ product.rating.rate }}</div>

            <h3>{{ product.price }}$</h3>
            <h4>
               category: <span>{{ toUpper(product.category) }}</span>
            </h4>
            <p>{{ product.description }}</p>
            <button @click="addToCart" class="btn btn-danger btn-buy">Buy now</button>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
   name: 'OneProductView',
   methods: {
      ...mapActions(['getOneProduct', 'addProduct']),

      addToCart() {
         // this.product.qty = 1;
         // this.addProduct(this.product);
         this.addProduct({ product: this.product, qty: 1 });
      },

      toUpper(str) {
         if (str) {
            return str[0].toUpperCase() + str.slice(1).toLowerCase();
         }
      },
   },

   computed: {
      ...mapGetters(['product']),
   },

   mounted() {
      this.getOneProduct(this.$route.params.id);
   },
};
</script>

<style lang="scss" scoped>
.product {
   display: flex;
   align-items: center;
   gap: 50px;
   position: relative;
   &__img {
      flex: 0 1 40%;
      height: 600px;
      border-radius: 25px;
      padding: 15px 5px;
      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
      }
      cursor: pointer;
      transition: all 0.3s ease-in-out 0s;
      &:hover {
         box-shadow: 0 0 11px rgba(0, 0, 0, 0.5);
      }
   }

   &__body {
      flex: 1 1 60%;
      color: darkslategrey;
      text-align: center;
      :not(:last-child) {
         margin-bottom: 15px;
      }

      h3 {
         color: red;
         font-weight: 800;
         letter-spacing: 1.5px;
         text-shadow: 1.5px 1px 1px darkslategrey;
      }

      span {
         color: seagreen;
         font-weight: 700;
      }

      p {
         font-style: italic;
         font-size: 25px;
      }

      .btn-buy {
         position: absolute;
         right: 0;
         text-transform: uppercase;
      }
   }
}

@media (max-width: 990px) {
   .product {
      flex-wrap: wrap-reverse;
      justify-content: center;
   }
   .product__img {
      flex: 1 1 auto;
      margin-top: 30px;
   }
}
</style>
