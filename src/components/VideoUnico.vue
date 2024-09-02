<template>
  <div class="video-container">
    <h1>Vídeo turma da Monica</h1>
    <iframe width="976" height="549" src="https://www.youtube.com/embed/zKUpkxP94_U"
        title="Brincadeiras Modernas | Turma da Mônica" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
   </div>
</template>

<script>
export default {
  name: 'VideoUnico' 
}
</script>

<style scoped>
.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 800px;
}

h1 {
  font-size: 28px;
  color: #42b983;
  margin-bottom: 20px;
}

iframe {
  border: 2px solid #42b983;
  border-radius: 8px;
}
</style>
