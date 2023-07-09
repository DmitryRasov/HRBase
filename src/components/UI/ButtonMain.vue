<template>
  <a class="btn">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: "ButtonMain",
  props: {
    title: {
      type: String,
      required: true,
      default: 'Кнопка'
    }
  }
}
</script>

<style scoped>
.btn {
  position: relative;
  font-family: 'Roboto', sans-serif;
  display: block;
  width: 150px;
  text-align: center;
  background-color: #45ace1;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: unset;
  border: none;
  padding: 15px 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: .3s;
}
.btn:hover {
  background-color: #54B1E6;
}
.button::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 64px;
  right: 0;
  width: 100%;
  height: 2px;
  background: red;
}
</style>