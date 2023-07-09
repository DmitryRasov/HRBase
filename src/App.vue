<template>
  <HeaderMain/>
  <div>
    <input-main v-model="title"></input-main>
    {{ title }}
  </div>
</template>

<script>
import HeaderMain from './components/HeaderMain.vue'
import InputMain from "@/components/UI/InputMain.vue";

export default {
  name: 'App',
  components: {
    InputMain,
    HeaderMain,
  },
  data(){
    return {
      title: ''
    }
  },

  methods: {

  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0ef;
}
</style>
