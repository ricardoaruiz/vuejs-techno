<template>
    <transition>
        <div v-if="dadosAula">
            <h2>{{dadosAula.nome}}</h2>

            <div class="video">
                <iframe width="560" height="315" 
                    :src="`https://www.youtube.com/embed/${dadosAula.youtube}`" 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>

        </div>
    </transition>
</template>

<script>
import LoadingPageService from '../components/loading-page/LoadingPageService';
import CursoService from '../services/CursoService';

export default {
    name: 'Aula',
    props: {
        idAula: undefined
    },
    data() {
        return {
            dadosAula: undefined
        }
    },
    methods: {
        loadAula(idAula) {
            LoadingPageService.on();

            setTimeout(() => {
                CursoService.getInstance().loadAula(idAula)
                    .then(aula => this.dadosAula = aula)
                    .catch(error => console.error('Aula-error',error))
                    .finally(() => LoadingPageService.off());

            }, 1000);
        }
    },
    created() {
        this.loadAula(this.idAula);
    },
    beforeRouteUpdate(to, from, next) {
        this.dadosAula = undefined;
        this.loadAula(to.params.idAula)
        next();
    }
}
</script>

<style>
    /* Video responsivo */
    .video {
        position: relative;

        /* Divide a altura pela largura para encontrar esse percentual */
        padding-bottom: 56.25%
    }
    .video iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
