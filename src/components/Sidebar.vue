<template>
  <div class="container">
    <ul id="slide-out" :class="isopen ?'sidenav sidenav-fixed' : 'sidenav'">
      <li>
            <div class="background">
              <img src="@/assets/logo.png">
              
            </div>
      </li>
      <li>
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
        >
          <a href="#!" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
//import localizeFilter from '@/filters/localize.filter'
export default {
  props: {
        isopen: {
            type: Boolean,
            required: false
        }    
  },
  data(){
    return { links: [
                      { title: 'Гловна', url: '/', exact: true },
                      { title: 'Головна сторінка', url: '/index' },
                      { title: 'Список  співробітників(тупой тест)', url: '/empsgrd' },
                      { title: 'Две таблицы', url: '/table2' },
                      { title: 'Простая таблица', url: '/table3' },
                      { title: 'профиль', url: '/profile' },
                      { title: 'MessageBoxes', url: '/mboxes' },
                      
                    ]
    }                
  },
  mounted(){
    console.log('SIDEBAR IS CREATED');
  } 
}
</script>



