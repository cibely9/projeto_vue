<template>
   
   <ImagensPrincipal/>
</template>

<script>
import ImagensPrincipal from './ImagensDiversas.vue';
export default {
  name: 'PaginaPrincipal',
  components: (
    ImagensPrincipal
  ),
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
