<template>
  <div class="container-fluid bg-3 text-center">
    <h2>{{title}}</h2>
    <h3 class="margin">{{msg}}</h3><br>
    <div class="row">
      <div class="col-sm-12" v-for="post in get()">
        <p>{{post.title}}</p>
        <p>{{post.msg}}</p>
        <p>{{post.author}}</p>
        <p>{{post.date | dateformat}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import blogService from '../services/BlogService'
import moment from 'moment'

export default {
  name: 'blog',
  props: ['title'],
  data () {
    return {
      msg: 'Latest Posts',
      posts: []
    }
  },
  methods: {
    get: function () {
      return blogService.get()
    }
  },
  computed: {
    init: function () {
      this.posts = this.get()
    }
  },
  filters: {
    dateformat: function (value) {
      if (value) {
        return moment(value).format('MM/DD/YYYY hh:mm')
      }
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
