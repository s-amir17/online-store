<template>
   <app-header></app-header>
   <router-view />
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
   components: { AppHeader },
};
</script>

<style lang="scss">
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

#app {
   font-family: Helvetica, Arial, sans-serif;
   padding-top: 60px;
}
</style>
