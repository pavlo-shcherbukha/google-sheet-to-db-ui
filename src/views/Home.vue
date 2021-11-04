<template>
  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">  <h3>UI для Тестування API </h3></span>
           <Loader v-if="loading"/>
          <p>Для тестування міжпроектних зв`язків в OpenShift</p>
        </div>
        <div class="card-action">
     
        </div>
      </div>
      
    </div>

  </div>



</template>

<script>
export default {

  data: () => ({
    loading: true,

  }),
  async mounted() {

    this.loading = false
  },

}
</script>
