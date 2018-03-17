<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>问题纪要</h2>
    <div class="item" v-for="(item,index) in todoList" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue.js PWA Log',
      todoList: [
        '主文档离线,或者域名离线之后,无法更新',
        'service-worker 未更新?'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
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
  color: #35495E;
}
</style>
