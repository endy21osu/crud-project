// import Vue from 'vue'

export default {
  data: [],

  get () {
    return this.data // Vue.http.get('/api/posts)
  },

  set (post) {
    this.data.push(post)
    console.log(this.data)
  }
}
