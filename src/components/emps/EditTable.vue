<template>
    <div v-if="open" class="backdrop" @click="$emit('close')"></div>
    <transition name="modal">
        <dialog open v-if="open">
            <div class="row">
                <slot name="header">
                    <h5 class="center-align">{{ title_subj }}</h5>
                    <h6 class="center-align">{{ title_oper }}</h6>
                </slot>
            </div>    
            <div class="row">
                    <slot name="data">
                        <h2 class="center-align">Данные</h2>
                    </slot>
                  
            </div>
               <!-- <button  @click="$emit('close')">Close it!</button> -->
            <slot name="menu">   
                <a class="waves-effect waves-light btn" v-on:click="$emit('close')"><i class="material-icons right">cloud</i>Сохранить</a>
                <a class="waves-effect waves-light btn" v-on:click="$emit('close')"><i class="material-icons right">cloud</i>Закрыть</a>
             </slot>
        </dialog>
    </transition>
</template>

<script>
    export default {
        props: {
            open: {
                type: Boolean,
                required: true,
            },
            title_oper: {
                type: String,
                required: false
            },
            title_subj: {
                type: String,
                required: false
            },

        },
        emits: ['close'],
        mounted() {

        },
        created() {
        },


        
        data: () => ({
        }),
        methods:{

        },

    }
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}
dialog {
  position: fixed;
  top: 10vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}
</style>