<template>
  <div class="menu-container">
    <router-link to="/video" class="menu-link">Vídeo Único</router-link>
    <router-link to="/tabela" class="menu-link">Tabela Diversos</router-link>
    <router-link to="/imagens" class="menu-link">Imagens Diversas</router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuPrincipal'
}
</script>

<style scoped>
.menu-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.menu-link {
  text-decoration: none;
  color: #fff;
  background-color: #42b983;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}

.menu-link:hover {
  background-color: #369d72;
  transform: translateY(-2px);
}

.menu-link:active {
  background-color: #2c8a5e;
}
</style>
