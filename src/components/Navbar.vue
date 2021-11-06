<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('menu_click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{currentDttm}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a class="dropdown-trigger black-text" href="#" data-target="dropdown" ref="dropdown">
            {{name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>
     
          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>
                 Параметри секретного ключа
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>
                "Вийти (скинути привтаний ключ)"
              </a>
            </li>
          </ul>
     
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>

import M from  "materialize-css"

export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  computed: {
    name() {
      //var keyowner = 'test user'
      //KeyOwnerInfo
      return 'Тестовий користувач';

      //return 'Власник ключа' ; //this.$store.getters.info.name
    },
    currentDttm(){
          let options = {};
          let locale = 'uk-UA';
          
          options.day = '2-digit'
          options.month = 'long'
          options.year = 'numeric'

          options.hour = '2-digit'
          options.minute = '2-digit'
          options.second = '2-digit'

      return new Intl.DateTimeFormat(locale, options).format(new Date(this.date));
    }
  },
  mounted() {

    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
    
  },

  beforeUnmount() {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  },
    methods: {
    logout() {
      

      this.$router.push('/login')
    }
  },
}
</script>


