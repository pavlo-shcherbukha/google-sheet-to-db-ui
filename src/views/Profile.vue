<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <label>Власник ключа: {{ iFullName }} [CN={{ iSubjCN }} ]</label>
        </div>
        <div class="input-field col s6">
          <label>Серійний номер:  {{iSerial}}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s3">
          <label> Організація: {{ iSubjOrg }}</label>
        </div>
        <div class="input-field col s3">
          <label> Підрозділ: {{ iSubjOrgUnit }}</label>
        </div>
        <div class="input-field col s3">
          <label> Посада: {{iSubjTitle}}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label>Повна назва: {{iSubject}}</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label>ЦСК видавця: {{ iIssuerCN }} [ {{ iIssuer }} ]</label>
        </div>
      </div>
      <!--
      <div class="row">
        <div class="col s12">
            <p> Парамтеры библиотеки: </p>
                  <a :class="'waves-effect waves-light btn-small' " v-on:click="libsettings">
                                  <i class="material-icons left">cloud</i>
                                  save
                  </a> 
          
        </div>
      </div>
      -->
    </form>
 
  </div>    

</template>

<script>

export default {
  metaInfo() {
    return {
      
    }
  },
  data: () => ({
    title: 'Реквізити секретного ключа'
  }),
  mounted() {
    this.log('Вхід Profile.vue');
  },
  //beforeUnmount(){
  //  this.log( 'Вихід: Profile.vue' );
  //},
  computed: {
    //...mapGetters(['info'])
    iFullName(){
      return 'GetSubjFullName()';
    },
    iSubjCN(){
       return 'GetSubjCN()';
     },
    iSubjOrg(){
      return 'GetSubjOrg()';
    },
    iSubjOrgUnit(){
      return 'GetSubjOrgUnit()';
    },
    iSubjTitle(){
      return 'GetSubjTitle() ';
    },
    iIssuer(){
        return 'GetIssuer()';
    },
    iIssuerCN(){
      return 'GetIssuerCN()';
    },
    iSerial(){
      return 'GetSerial()';
    },
    iSubject(){
      return 'GetSubject() ';
    },
   

  },
  methods: {
    log(msg){
      console.log(msg);
      
    },

  }
}
</script>


<style scoped>
.switch {
  margin-bottom: 2rem;
}
</style>
