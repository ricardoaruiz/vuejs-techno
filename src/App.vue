<template>
  <div id="app">
    <Header />
    
    <router-view class="container"/>
    
    <loading-page loadingMessage="Carregando..."/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: {
    Header
  }
}
</script>


<style>
  * {
    box-sizing: border-box;
  }
  body, ul, li{
    margin: 0;
    padding: 0;
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    color: #234;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
  }
  .container {
      padding: 0px 20px;        
      max-width: 1300px;
      margin: 0 auto;
  }
  .conteudo {
    display: grid;
    grid-template-columns: 1fr minmax(200px, 500px);
    grid-gap: 30px;
  }
  @media screen and (max-width: 500px) {
    .conteudo {
      display: block;
    }
  }

  /* 
    Animação de entrada para todos as views
    Para a animação funcionar em cada view todo o conteúdo tem que estar dentro 
    de uma tag transition
  */
  .v-enter {
    opacity: 0;
    transform: translate3d(-20px,0,0);
  }
  .v-enter-active {
    transition: all .3s;
  }
</style>
