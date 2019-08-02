<template>
  <transition>    
    <div v-if="contatoData">

      <h1>{{contatoData.titulo}}</h1>

      <p>{{contatoData.descricao}}</p>

      <ul>
        <li><strong>Telefone:</strong> {{contatoData.contato.telefone}}</li>
        <li><strong>E-mail:</strong> {{contatoData.contato.email}}</li>
        <li><strong>Endereço:</strong> {{contatoData.contato.endereco}}</li>
      </ul>
      
    </div>
  </transition>
</template>

<script>
  import LoadinPageService from '../components/loading-page/LoadingPageService';
  import ContatoService from '../services/ContatoService';

  export default {
    name: 'contato',
    data() {
      return {
        contatoData: undefined
      }
    },
    created() {
      LoadinPageService.on();

      setTimeout(() => {

        ContatoService.getInstance().load()
          .then(result => this.contatoData = result)
          .catch(error => console.log('Contato-error',error))
          .finally(() => LoadinPageService.off());

      }, 1000);
    }
  }
</script>
