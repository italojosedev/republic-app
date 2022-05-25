<template>
  <div class="root">
    <div class="text-h4"><img src="../assets/Logo-Completo.png" alt=""></div>
    <q-card class="Tamanho-Welcome" style="min-width: 300px">
      <q-card-section>
        <div class=" txt-BemVindo">BEM VINDO</div>
  
       <div class="text-rep">
          A república { NOME DA REPUBLICA } está pronta
       </div>
       
       <div class="config">
            <br>  Configurar meu aluguel <br>
            
            <br>  Cadastrar integrantes <br>
        
           <br> Cadastrar primeira despesa <br>
       </div>
       <div class="bot-cont">
         <q-btn
          key="btn_size_round_lg"
          rounded
          color="primary"
          size=""
          label="CONTINUAR"
          class="style-bot"
          @click="submitLogin"
        />
       </div>









      </q-card-section>
               
      <q-separator inset />
    </q-card>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    return {
      password,
      email,
    };
  },
};
</script>
<style>
/*@media (min-width: 1024px) {*/
   .style-bot{
        width: 282px !important;
        height: 60px !important;
        margin-top: 45px;
    }

   .text-rep{
        display: flex;
        width: 550px;
        height: 100px;
        font-family: Lato;
        font-size: 24px;
        font-weight: 800;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
   }
   .config{
        display: flex;
        width: 550px;
        height: 250px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 43px;
        color: #0177FB;
        text-align: center;

       
   }
   .bot-cont{
        display: flex;
        width: 550px;
        height: 250px;
        align-items: center;
        justify-content: center;
       
        
   }

    .root {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        
    }
    .q-card > div{
        height: 100%;
    }

    .text-h4 {
        display: flex !important;
        justify-content: center;
        margin-bottom: 40px;
    }
    .q-card > div  {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .Tamanho-Welcome {
        width: 860px;
        height: 630px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 11px 21px rgb(0 0 0 / 30%) !important;
        border-radius: 30px !important ; 
        position: relative;
        padding: 30px;
        flex-direction: column; 
        justify-content: center;
        margin-bottom: 100px
        
        
    }

    .txt-BemVindo {  

        display: flex;
        margin: 45px;
        margin-top: 21px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 800;
        font-size: 29px;
        line-height: 24px;
        color: #141736;


    }

  
  

</style>
