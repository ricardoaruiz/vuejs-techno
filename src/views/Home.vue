<template>
  <transition>    
    <div v-if="homeData" class="conteudo">
      <div>
        <h1>Sobre a {{this.homeData.titulo}}</h1>
        <p>{{this.homeData.descricao}}</p>
        <router-link class="btn-cursos" tag="button" to='/cursos'>Cursos</router-link>
        
        <div>
          <h2>Avaliações</h2>
          <ul>
            <li v-for="avaliacao in this.homeData.avaliacoes" :key="avaliacao.nome">
              <p>{{avaliacao.nome}}</p>
              <p>{{avaliacao.descricao}}</p>
            </li>
          </ul>
        </div>
      </div>

      <img src="@/assets/aprender.png" alt="">
    </div>
  </transition>
</template>

<script>
  import LoadingPageService from '../components/loading-page/LoadingPageService';
  import HomeService from '../services/HomeService';

  export default {
    name: 'home',
    data() {
      return {
        homeData: undefined
      }
    },
    created() {
      LoadingPageService.on();

      setTimeout(() => {

        HomeService.getInstance().load()
            .then(result => this.homeData = result)
            .catch(error => console.log('Home-error',error))
            .finally(() => LoadingPageService.off());        
            
      }, 1000);
    }
  }
</script>

<style scoped>
  .btn-cursos {
    border: none;
    background: #4b8;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 2px rgba(0,0,0, .1);
    padding: 15px 40px;
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 40px;
    font-family: "Avenir", Arial, Helvetica, sans-serif
  }
</style>