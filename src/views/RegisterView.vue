<template>
  <div class="root">
    <div class="text-h4"><img src="../assets/Logo-Completo.png" alt=""></div>
    <q-card style="min-width: 300px">
      <q-card-section>
        <div class="text-h5 txt-Login">Registro</div>
      <div class="container-a">
        <div class="bloco-form">
          <q-input class="style-input" outlined v-model="text" label="Nome da Republica" />
             <q-input class="style-input" outlined v-model="text" label="Descrição" />
               <q-input class="style-input" outlined v-model="text" label="Email" />
                  <q-input class="style-input" outlined v-model="text" label="Senha" />
            </div>
           <div class="bloco-b"> </div>
         <div class="bloco-form">
          <q-input class="style-input" outlined v-model="text" label="Primeiro Nome" />
            <q-input class="style-input" outlined v-model="text" label="Sobrenome" />
              <q-input class="style-input" outlined v-model="text" label="Telefone" />
           </div>
        </div>
       <div class="container-b">
          <div class="style-cad">
            <q-btn
            key="btn_size_round_lg"
            rounded
            color="primary"
            size=""
            label="Cadastro"
            class="estilo-btn"
            
          />
          </div>
         <div class="style-log"> Login </div>
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
.style-cad{
  color: #FFFFFF;
}
.style-log{
   font-size: 15px;
    margin: 19px;
    color: #0177FB;

   }
  .style-input{  
    margin: 0px 60px 35px 60px;
    width: 290px !important;
    height: 45px !important;
   }
 
    
  .bloco-form{
  
    width: 300px;
    height: 290px;
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
 .bloco-b{
    border: 1px solid #AAB4C1;
    width: 1px;
    height: 259px;
    margin: 5px 20px 3px 20px;
  }

   .container-a{
     display: flex;
     flex-direction: row;
     width: 700px;
     height: 289px;
     justify-content: center;
   }
   .container-b{
     display: flex;
     flex-direction: column;
     width: 700px;
     height: 160px;
     align-items: center;
     
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

 .style-bot{
    width: 282px !important;
    height: 60px !important;
    margin-top: 45px;
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
  .q-card {
      width: 948px;
      height: 630px;
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 10px 4px 4px rgb(0 0 0 / 25%);
      border-radius: 10px !important ; 
      position: relative;
      padding: 10px;
      flex-direction: row;
  }

  .txt-Login {  
    display: flex;
    justify-content: center;
    margin: 45px;
  }

  
  

</style>
