<script>
export default {
  name: 'TabelaComponent',
  props: {
    msg: String
  }
}
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Caracteristica</th>
        <th>Imagem</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Monica</td>
        <td>Tem um coelho azul</td>
        <td class="monica"><img src="@/assets/monica100.png" width="20%" alt="monica"></td>
      </tr>
      <tr>
        <td>Cebolinha</td>
        <td>Elabora planos</td>
        <td class="cebolinha"><img src="@/assets/Cebolinha.png" width="20%" alt="cebolinha"></td>
      </tr>
      <tr>
        <td>Magali</td>
        <td>Come muito</td>
        <td class="magali"><img src="@/assets/magali.png" width="20%" alt="magali"></td>
      </tr>
      <tr>
        <td>Cascão</td>
        <td>Não toma banho</td>
        <td class="cascao"><img src="@/assets/Cascao.webp" width="20%" alt="cascao"></td>
      </tr>
    </tbody>
  </table>
</template>