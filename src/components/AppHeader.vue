<template>
   <nav class="navbar navbar-expand-sm bg-body-tertiary border-bottom fixed-top nav" data-bs-theme="dark">
      <div class="container-fluid">
         <router-link to="/" class="navbar-brand">LOGO</router-link>
         <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style="margin: 7px 0">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <router-link class="nav-link link" aria-current="page" to="/products">Products</router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link link" to="/about">About</router-link>
               </li>
               <li class="nav-item">
                  <a class="nav-link link" href="https://github.com/s-amir17" target="_blank">GitHub</a>
               </li>
            </ul>

            <div class="dropdown">
               <button class="cart" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span class="qty">{{ cartProducts }}</span>
               </button>
               <div class="dropdown-menu dropdown-menu-end" @click.stop>
                  <ShoppingCart></ShoppingCart>
               </div>
            </div>
         </div>
      </div>
   </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import ShoppingCart from '@/components/ShoppingCart.vue';

export default {
   name: 'AppHeader',
   components: { ShoppingCart },

   computed: {
      ...mapGetters(['cartProducts']),
   },
};
</script>

<style lang="scss" scoped>
.nav {
   padding: 0;
   .link {
      padding: 12px;
      &:hover {
         background-color: rgba(255, 255, 255, 0.505);
         color: aliceblue;
         text-shadow: 2px 1px 3px black;
      }
   }

   .cart {
      color: azure;
      font-size: 24px;
      cursor: pointer;
      left: auto;
      right: 0;
      margin-right: 20px;
      margin-top: 7px;
      background: none;
      border: none;
      position: relative;
   }
   .qty {
      border-radius: 50%;
      background-color: red;
      color: white;
      font-weight: 800;
      font-size: 14px;
      line-height: 90%;
      font-family: 'Courier New', Courier, monospace;
      padding: 5px;

      position: absolute;
      left: 20px;
      bottom: 20px;
   }
}
</style>
