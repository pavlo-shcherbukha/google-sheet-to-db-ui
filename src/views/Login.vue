<template>
     <div class="col s12 m7">
    <h2 class="header">Зчитування секретного ключа</h2>

    <div class="card horizontal">
      <div class="col s3">
        <!--<img src="https://lorempixel.com/100/190/nature/6">
        -->

      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>Виберіть носій скретного кюча, та введіть пароль до нього</p>
          <div class="col s6">
               <div class="row">
                 <label>Вибраний носій: </label>
               </div>
                <div class="row">
                  <label>Тип:  </label>
                </div>  
                <div class="row">
                  <label>Пристрій: </label>
                </div>
          </div>
          
        </div>
        <div class="card-action">
              <!--<Loader v-if="!KeyList.length > 0"/>-->
          <form @submit.prevent="submitHandler">
                <div class="input-field">
                    <input
                      id="password"
                      type="password"
                      v-model.trim="password"
                    >
                    <label for="password">введіть пароль до секретного ключа</label>
                    <small class="helper-text"></small>
                    <small
                      class="helper-text"></small>
                  </div>
                  <div>
                      <button class="btn waves-effect waves-light auth-submit" type="submit">
                             <i class="material-icons right">send</i>  Продовжити
                      </button>
                  </div> 
          </form>
         
          <!--<a class="waves-effect waves-light btn-small" v-on:click="loadKMTypes">Button</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import KtypeList from '@/components/KtypeList.vue';
//import  * as utl  from '@/utils/apputil';
//import api_be from '@/axios/api_be';
export default {
  components: {
    //KtypeList
  },
  data: () => ({
    loading: true,
    password: '',
    KeyList: [],
    xtimer: 0,
    loadingsteps: 6,
    base_url: process.env.VUE_APP_BASE_URL

  }),
  computed: {
     devselect() {
       //var rmediadev = this.$store.getters['iitcrypto/getMediaDevice'];
       //return rmediadev;
       //return this.password;
       return {}
     }
  },
  mounted() {
    
    this.log('Вхід Login.vue');
  },
  beforeDestroy(){
    
    this.log( 'Вихід: Login.vue' );

  },
  methods: {
    log(msg){
      console.log(msg);
      
    },
    loadKMTypes(){
        this.log( 'loadKMTypes: Читаю списко пристороїв з секретними ключами' );
    },

    submitHandler() {

        this.log( 'submitHandler: Перевіряю дані для загрузки секретного ключа' );
    }
  }
}
</script>
