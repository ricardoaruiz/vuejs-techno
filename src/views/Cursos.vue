<template>
  <transition>    
    <div v-if="cursosData" class="conteudo">
      
      <div>
        <h1>{{cursosData.titulo}}</h1>      
        <p>{{cursosData.descricao}}</p>
      </div>

      <ul>
        <li v-for="curso in cursosData.cursos" :key="curso.id">
          <h2>
            <router-link :to="{name: 'curso', params: {curso: curso.id}}">
              {{curso.nome}} - {{curso.totalAulas}} aulas | {{curso.horas}} horas
            </router-link>:
          </h2>
          <p>{{curso.descricao}}</p>
        </li>
      </ul>

    </div>
  </transition>
</template>

<script>
  import LoadingPageService from '../components/loading-page/LoadingPageService';
  import CursoService from '../services/CursoService';

  export default {
    name: 'cursos',
    data() {
      return {
        cursosData: undefined
      }
    },    
    created() {
      LoadingPageService.on();

      setTimeout(() => {

        CursoService.getInstance().load()
            .then(result => this.cursosData = result)
            .catch(error => console.error('Cursos-error',error))
            .finally(() => LoadingPageService.off());

      }, 1000);
    }
  }
</script>
