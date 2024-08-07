<template>
   <div>
    <h1>Videos Diversos</h1>
    <!-- Conteúdo do componente -->
    <router-link to="/imagem-diversas">Ir para Imagem Diversas</router-link>

<!-- Ou um botão para navegação programática -->
<button @click="navigateToImagemDiversas">Ir para Imagem Diversas</button>
  </div>
  </template>
  
  <script>
  export default {
    name: 'PaginaMenu',
    methods: {
      navigateToImagemDiversas() {
        this.$router.push({ name: 'imagem-diversas' });
      }
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  