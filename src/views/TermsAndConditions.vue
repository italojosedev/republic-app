<template>
  <div class="root">
    <div class="text-h4"><img src="../assets/Logo-Completo.png" alt=""></div>
    <q-card class="Tamanho-Terms" style="min-width: 300px">
      <q-card-section>
        
       <div class="voltar">
         
       </div>
     
       <div class="block-1">
           <div class="terms-cond">

       </div>

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
   
    
    .voltar{
       display: flex;
       width: 100px;
       height: 200px;
       background: blue;
    }
    .terms-cond{
       display: flex;
       width: 100px;
       height: 200px;
       background: red;
    }
    .block-1{
        display: flex;
        width: 400px;
        height: 200px;
        background: yellow;
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
    .Tamanho-Terms {
       display: flex;
        width: 860px;
        height: 630px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 11px 21px rgb(0 0 0 / 30%) !important;
        border-radius: 30px !important ; 
        position: relative;
        padding: 30px;
        flex-direction: row; 
        justify-content: center;
        margin-bottom: 100px
         
        
    }

    

  
  

</style>
