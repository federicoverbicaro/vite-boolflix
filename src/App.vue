<template>
 <!-- Contenuto del componente radice -->

<AppMain/>

</template>

<script>
import AppMain from './components/AppMain.vue';

// Definizione delle opzioni del componente



//inserimento tag creazione componenti 
export default {

  components : {
    AppMain
}
  
}

</script>


<style lang="scss">
/* Stili del componente radice */
@use "../src/styles/general.scss" //collegamento a file general.scss per utilizzare styles
</style>
