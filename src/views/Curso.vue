<template>
    <transition>
        <div v-if="dadosCurso" class="conteudo">

            <div>    
                <h1>{{dadosCurso.nome}}</h1>

                <p>{{dadosCurso.descricao}}</p>

                <h2>Aulas</h2>
                <ul class="aulas">
                    <li v-for="aula in dadosCurso.aulas" :key="aula.id">
                        <router-link :to="{name: 'aula', params: {idAula: aula.id}}">
                            {{aula.nome}}
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- Router para aulas -->
            <router-view></router-view>
        </div>
    </transition>
</template>

<script>
import LoadingPageService from '../components/loading-page/LoadingPageService';
import CursoService from '../services/CursoService';

export default {
    name: 'Curso',
    props: {
        curso: undefined
    },
    data() {
        return {
            dadosCurso: undefined
        }
    },
    created() {
        LoadingPageService.on();

        setTimeout(() => {

            CursoService.getInstance().loadCurso(this.curso)
                .then(curso => this.dadosCurso = curso)
                .catch(error => console.error('Curso-error',error))
                .finally(() => LoadingPageService.off());

        }, 1000);
    }
}
</script>

<style scoped>
    .aulas li a {
        display: block;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
        background: #fff;
        padding: 20px;
        margin-bottom: 10px;
        border-radius: 4px;
    }
    .aulas li a.router-link-active {
        background: #333;
        color: #fff;
    }
</style>
