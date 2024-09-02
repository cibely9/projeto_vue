<template>
  <div class="container">
    <header class="header">
      <h1>Turma da Mônica</h1>
    </header>

    <div class="image-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </div>

    <table class="custom-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Imagem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cascão</td>
          <td><img src="@/assets/Cascao.webp" class="img-tabela" alt="Cascão"></td>
        </tr>
        <tr>
          <td>Cebolinha</td>
          <td><img src="@/assets/Cebolinha.png" class="img-tabela" alt="Cebolinha"></td>
        </tr>
        <tr>
          <td>Magali</td>
          <td><img src="@/assets/magali.png" class="img-tabela" alt="Magali"></td>
        </tr>
        <tr>
          <td>Mônica</td>
          <td><img src="@/assets/monica.png" class="img-tabela" alt="Mônica"></td>
        </tr>
        <tr>
          <td>Mônica </td>
          <td><img src="@/assets/monica2.png" class="img-tabela" alt="Mônica 2"></td>
        </tr>
        <tr>
          <td>Mônica </td>
          <td><img src="@/assets/monica100.png" class="img-tabela" alt="Mônica 100"></td>
        </tr>
        <tr>
          <td>Barra </td>
          <td><img src="@/assets/barra.jpg" class="img-tabela" alt="Barra 1"></td>
        </tr>
        <tr>
          <td>Barra </td>
          <td><img src="@/assets/barra2.jpg" class="img-tabela" alt="Barra 2"></td>
        </tr>
        <tr>
          <td>Barra </td>
          <td><img src="@/assets/barra3.jpg" class="img-tabela" alt="Barra 3"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TabelaDiversos'
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 40px;
  color: #42b983;
  margin-bottom: 10px;
}

.logo {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border: 2px solid #42b983;
  border-radius: 8px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-table th, .custom-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

.custom-table th {
  background-color: #42b983;
  color: #fff;
  font-weight: bold;
}

.custom-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.img-tabela {
  height: 100px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
