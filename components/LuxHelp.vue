<template>
  <div class="lux-help" @mouseover="active = true" @mouseout="active = false">
    <lux-circle-button :size="50" class="bottom-left">
      <div style="width: 50px; height: 50px" class="mid-aligner">
        <img src="/img/ico-help.svg" alt="Voltar" width="15">
      </div>
    </lux-circle-button>
    <ul v-show="active">
      <li><a href="https://github.com/mikelfcosta/opluxnet" target="_blank">Contribua com o Projeto</a></li>
      <li @click="$root.$emit('show::modal','clausula')"">Clásula de Reserva</li>
      <li><a href="http://www.nan.art.br" target="_blank">Conheça a NaN</a></li>
    </ul>
    <b-modal id="clausula" title="Clasula de Reserva" :hide-footer="true" ok-title="Fechar">
      <p>(Lei 9.610/98 - LEI DE DIREITOS AUTORAIS)</p>
      <p>Este site foi publicado e é mantido pelos discentes do 5 Semestre, do Curso de Graduação em Design Digital, da Universidade Anhembi Morumbi, visando a atender as exigências da disciplina Projeto Interdisciplinar.</p>
      <p>Trata-se de uma publicação temporária para propósitos estritamente acadêmicos e sem fins lucrativos.</p>
      <p>Em atendimento às exigências da Lei 9.610/98 do parágrafo 4, do Artigo 184, do Código Penal, os alunos responsáveis por esta publicação colocam-se à disposição, por intermédio do e-mail equipe@nan.art.br, para dirimir quaisquer dúvidas referentes à eventual violação de direitos autorais, comprometendo-se desde já, a retirar do ar, qualquer texto, som ou imagem pertencente a autor ou titular que se sinta direta ou indiretamente prejudicado.</p>
      <p>Universidade Anhembi Morumbi</p>
    </b-modal>
  </div>
</template>

<script>
  import LuxCircleButton from '~components/LuxCircleButton.vue'
  export default {
    data () {
      return {
        active: false
      }
    },
    components: {
      LuxCircleButton
    }
  }
</script>

<style lang="scss" scoped>
  .lux-help {
    position: absolute;
    bottom: 20px;
    left: 0;
    z-index: 100;
  }

  ul {
    list-style: none;
    padding: 0;
    position: absolute;
    top: -100px;
    color: rgba(255,255,255,0.8);

    li {
      border-bottom: 1px dashed rgba(255,255,255,0.8);
      margin-bottom: 10px;
      width: 200px;

      a {
        color: rgba(255,255,255,0.8);
      }

      &:hover {
        a {
          color: white;
          text-decoration: none;
        }
        color: rgba(255,255,255,0.8);
        border-color: white;
      }
    }
  }
</style>
