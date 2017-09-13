<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" v-on:click="navigate"><router-link to="/">{{ title }}</router-link></a>
      </div>
      <ul class="nav navbar-nav">
        <li v-bind:class="{ active: isBlogActive }" v-on:click="navigate('blog')"><router-link to="/Blog">{{ blog }}</router-link></li>
        <li v-bind:class="{ active: isCreateActive }" v-on:click="navigate('create')"><router-link to="/Create">{{ create }}</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      title: 'Blog Inc.',
      blog: 'Blog',
      isBlogActive: false,
      create: 'Create',
      isCreateActive: false
    }
  },
  methods: {
    navigate: function (dest) {
      this.isBlogActive = dest === 'blog'
      this.isCreateActive = dest === 'create'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
