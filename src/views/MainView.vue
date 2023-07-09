<template>
  <HeaderMain/>
  <div>
    <input-main v-model="title"></input-main>
    {{ title }}
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import InputMain from "@/components/UI/InputMain.vue";
export default {
  name: "MainView",
  components: {
    InputMain,
    HeaderMain
  },
  data(){
    return {
      title: ''
    }
  },
}
</script>

<style scoped>

</style>