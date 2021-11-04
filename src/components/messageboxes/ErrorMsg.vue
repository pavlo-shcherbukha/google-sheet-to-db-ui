<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header class="red lighten-1">
          <slot name="header">
            <h2 class="center-align">{{ title }}</h2>
          </slot>
        </header>
        <div class="center-align">
            <slot></slot>
        </div>       

        <menu v-if="!fixed" class="center-align">
          <slot name="actions">
             <a class="waves-effect waves-light btn" v-on:click="tryClose">Закрыть</a>
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
    export default {
        props: {
            show: {
            type: Boolean,
            required: true,
            },
            title: {
            type: String,
            required: false,
            },
            fixed: {
            type: Boolean,
            required: false,
            default: false,
            },
        },
        emits: ['close'],
        methods: {
            tryClose() {
                if (this.fixed) {
                    return;
                }
                this.$emit('close');
            },
        },
    };
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 40%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}






</style>
