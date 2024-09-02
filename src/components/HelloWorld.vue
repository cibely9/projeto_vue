<template>
  <div class="hello">
    <bemvindo> Turma da Mônica é uma série de histórias em quadrinhos e uma franquia de mídia produzida pela Maurício de
      Sousa Produções, criada pelo cartunista e empresário Mauricio de Sousa.</bemvindo>
   
    <div class="image-container">
      <img src="@/assets/logo.png" alt="Logo" style="width: 100%; border: 2px solid #42b983;">
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
          <td><img src="@/assets/Cascao.webp" class="imgTabela" alt="Cascao"></td>
        </tr>
        <tr>
          <td>Cebolinha</td>
          
          <td><img src="@/assets/Cebolinha.png" class="imgTabela" alt="Cebolinha"></td>
        </tr>
        <tr>
          <td>Magali</td>
         
          <td><img src="@/assets/magali.png" class="imgTabela" alt="magali"></td>
        </tr>
        <tr>
          <td>Monica</td>
          
          <td><img src="@/assets/monica.png" class="imgTabela" alt="monica"></td>
        </tr>
        <tr>
          <td>Monica</td>
         
          <td><img src="@/assets/monica2.png" class="imgTabela" alt="monica"></td>
        </tr>
        <tr>
          <td>Monica</td>
        
          <td><img src="@/assets/monica100.png" class="imgTabela" alt="monica"></td>
        </tr>
        <td>Barra</td>
          
          <td><img src="@/assets/barra.jpg" class="imgTabela" alt="barra"></td>
        
        
        <td>Barra</td>
          
          <td><img src="@/assets/barra2.jpg" class="imgTabela" alt="barra"></td>
      
        <td>Barra</td>
          
          <td><img src="@/assets/barra3.jpg" class="imgTabela" alt="barra"></td>
       
      </tbody>
    </table>

    <iframe src="https://www.youtube.com/embed/zKUpkxP94_U" width="976" height="549" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.bemvindo {
  color: #42b983;
  font-size: 24px;
  margin-bottom: 10px;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 24px;
}

.image-container {
  text-align: center;
  margin-bottom: 20px;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.custom-table th, .custom-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

.custom-table th {
  background-color: #f2f2f2;
}

.imgTabela {
  height: 80px;
  width: auto;
}

iframe {
  margin-top: 20px;
}
</style>
