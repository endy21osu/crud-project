<template>
  <div>
    <h2>{{title}}</h2>
    <h3>Lets blog about Vue.js</h3>
    <img src="../assets/logo.png" alt="">
    <h3>Wow cut to the code!</h3>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: ['title'],
  data () {
    return {
      msg: 'Welcome to your blog'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
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
}*/
</style>
