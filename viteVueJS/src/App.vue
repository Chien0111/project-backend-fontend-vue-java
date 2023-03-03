<template>
  <router-view></router-view>
</template>

<script>
import { version as vueVer } from "vue";
export default {
  name: "App",
  components: {},
  data() {
    return {
      vueVer: vueVer,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  /* margin-top: 20px; */
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  /* flex-direction: column; */
}
.router-link-active {
  border-bottom: 1px solid #42b983;
}
footer {
  position: sticky;
  top: 99%;
  bottom: 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
