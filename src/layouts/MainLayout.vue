<template>
  <div>
    <Loader v-if="loading"/>
    <div class="app-main-layout" v-else>
      <Navbar @menu_click="isOpen = !isOpen"/>

      <!--<Sidebar v-model="isOpen"/ -->
     <Sidebar v-model="isOpen" v-bind:isopen="isOpen"></Sidebar>
      <main class="app-content" :class="{full:!isOpen}">
        <div class="app-page">
          <router-view/>
        </div>
      </main>
<!--
      <div class="fixed-action-btn" :key="locale + '1'">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
 -->     
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
//import messages from '@/utils/messages'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    loading: true
  }),
  async mounted() {
   // if (!this.$store.getters.info.bill || !this.$store.getters.info.name) {
   //   await this.$store.dispatch('fetchInfo')
   // }

    this.loading = false
  },
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    error() {
     // return this.$store.getters.error
     return '';
    },
    locale() {
        return '';
    //  return this.$store.getters.info.locale
    }
  },
  watch: {
    error(/*fbError*/) {
      //this.$error(messages[fbError.code] || 'Что-то пошло не так')
    }
  }
}
</script>
