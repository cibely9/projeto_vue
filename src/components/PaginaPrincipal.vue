<script setup>

import TabelaComponent from './TabelaComponent.vue';

</script>

<template>
  <div class="hello">
    <header>
      <div id="conteudo-principal">
        <h1>Turma da Mônica</h1>
        <p>
          Turma da Mônica é uma série de histórias em quadrinhos e uma franquia de mídia produzida pela Maurício de
          Sousa Produções, criada pelo cartunista e empresário Mauricio de Sousa.
        </p>
      </div>
      <div>
        <img src="@/assets/monica.png" alt="monica.png" width="43%">
      </div>
      <div>
        <img src="@/assets/turma.png" alt="turma.png" width="90%">
      </div>
      <div>
        <img src="@/assets/monica2.png" alt="monica2.png" width="50%">
      </div>
      <br>
      <br>
      <br>
      <iframe width="976" height="549" src="https://www.youtube.com/embed/zKUpkxP94_U"
        title="Brincadeiras Modernas | Turma da Mônica" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </header>
    <TabelaComponent/>
  </div>
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
<style scoped></style>
