<template>
  <div class="row">
    <h2>{{title}}</h2>
     <div class="col-md-4"/>
     <div class="col-md-4">
        <div class="container-fluid text-left">
          <h3>{{ msg }} at {{ now | dateformat }}</h3>
          <form>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" v-model="post.title">
            </div>
            <div class="form-group">
              <label for="author">By</label>
              <input type="author" class="form-control" id="author" v-model="post.author">
            </div>
            <div class="form-group">
              <label for="msg">Post</label>
              <textarea rows="5" class="form-control" id="msg" v-model="post.msg"></textarea>
            </div>
            <div class="checkbox">
              <label><input type="checkbox"> Remember me</label>
            </div>
            <button v-if="ready" class="btn btn-default" v-on:click="save(post)">Submit</button>
          </form>
        </div>
    </div>
    <div class="col-md-4"/>
  </div>
</template>

<script>
import blogService from '../services/BlogService'
import moment from 'moment'

export default {
  name: 'create',
  props: ['title'],
  data () {
    return {
      msg: 'New Post',
      post: {
        title: '',
        author: '',
        msg: '',
        date: ''
      },
      ready: true
    }
  },
  methods: {
    save: function (post) {
      post.date = this.now
      console.log(post.valueOf())
      blogService.set(post)
    }
  },
  computed: {
    now: function () {
      return Date.now()
    }
  },
  watch: {
    post: () => {
      console.log(this)
      // return true
      this.ready = this.post &&
                   this.post.title.length &&
                   this.post.author.length &&
                   this.post.msg.length
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
