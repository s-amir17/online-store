<template>
   <div class="wrap">
      <transition-group name="list">
         <div v-for="item in shopCart" :key="item.product.id" v-if="shopCart.length" class="cart">
            <div class="cart__body">
               <h3>{{ item.product.title }}</h3>
               <div>
               {{ item.qty }} &#10005 {{ item.product.price }}$
               <span>{{ fixed(item.qty * item.product.price) }}$</span>
               </div>
               <!-- <hr> -->
            </div>
            <button @click="removeFromCart(item.product.id)" class="cart__btn"><i class="fa-solid fa-trash"></i></button>
         </div>
      </transition-group>
         <div v-if="shopCart.length">
            <span class="float-start sum">Total: <b>{{ fixed(sum) }}$</b></span>
            <button class="btn btn-danger float-end" @click="CLEAR_CART">Clear cart</button>
         </div>
      <h3 v-else style="color: crimson;">Cart is empty &#128561;&#10071;</h3>
   </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex';

export default {
   name: 'ShoppingCart',
   methods: {
      ...mapActions({
         removeProduct: 'removeProduct',
      }),
      ...mapMutations({
         CLEAR_CART:'CLEAR_CART'
      }),

      removeFromCart(id) {
         this.removeProduct(id)
      },

      fixed(n) {
         return n.toFixed(2)
      }
   },

   computed: {
      ...mapState({
         shopCart: 'shopCart',
      }),
      ...mapGetters({
         sum: 'sum'
      })
   },
};
</script>

<style lang="scss" scoped>
.wrap {
   overflow-y: auto;
   overflow-x: hidden;
   max-height: 500px;
   width: 420px;
   padding: 10px 20px 20px;
   .cart{
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 20px;
   margin-bottom: 10px;

   &__body{
      border-bottom: 1px solid rgba(240, 248, 255, 0.215);
      margin-bottom: 5px;
      width: 100%;
      h3{
         color: aliceblue;
      }

      div{
         display: flex;
         justify-content: space-between;
      }
      span{
         font-size: 20px;
         font-weight: 800;
         color: gold;
         letter-spacing: 0.5px;
      }
   }

   &__btn {
      border: none;
      background: none;
      font-size: 24px;
      color: darkgrey;
      transition: all 0.3s ease-in-out 0s;
      &:hover {
         color: #c62943;
      }
   }
}
   .sum{
      font-size: 25px;
      color: #c62943;
      text-shadow: 0.7px 0px 1px whitesmoke ;
   }
}

.list-item {
   display: inline-block;
   margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
   transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
   opacity: 0;
   transform: translateX(220px);
}
</style>
