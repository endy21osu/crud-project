<template>
  <div class="container-fluid bg-3">
    <h2>{{title}}</h2>
    <h3 class="margin">{{msg}}</h3><br>
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4" v-for="post in get()">
        <div class="well">
          <div class="media">
        		<div class="media-body">
          		<h4 class="media-heading">{{post.title}}</h4>
              <p class="text-right">By {{post.author}}</p>
              <p>{{post.msg}}</p>
              <ul class="list-inline list-unstyled">
        			     <li><span><i class="glyphicon glyphicon-calendar"></i>{{post.date | dateformat}}</span></li>
      			  </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4"></div>
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

</style>
