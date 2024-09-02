<template>
  <div class="imagens-container">
    <h1>Galeria de imagens</h1>
    <div class="gallery">
      <img src="@/assets/Cascao.webp" alt="Cascao" class="gallery-item">
      <img src="@/assets/Cebolinha.png" alt="Cebolinha" class="gallery-item">
      <img src="@/assets/magali.png" alt="Magali" class="gallery-item">
      <img src="@/assets/monica.png" alt="Monica" class="gallery-item">
      <img src="@/assets/monica2.png" alt="Monica" class="gallery-item">
      <img src="@/assets/monica.png" alt="Monica" class="gallery-item">
      <img src="@/assets/barra.jpg" alt="Barra" class="gallery-item">
      <img src="@/assets/barra2.jpg" alt="Barra" class="gallery-item">
      <img src="@/assets/barra3.jpg" alt="Barra" class="gallery-item">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagensDiversas'
}
</script>

<style scoped>
.imagens-container {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-item {
  width: 150px;
  height: auto;
  margin: 10px;
  border: 2px solid #42b983;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>
