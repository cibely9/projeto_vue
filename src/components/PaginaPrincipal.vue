<template>
   <ImagemPrincipal/>
</template>

<script>
import ImagensPrincipal from './ImagensPrincipal.vue';
import VideoUnico from './VideoUnico.vue';

export default {
  name: 'PaginaPrincipal',
  components: (
    ImagensPrincipal, VideoUnico
  ),
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
