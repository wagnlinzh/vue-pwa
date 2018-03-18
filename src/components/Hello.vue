<template>
    <div class="hello">
        <h3>{{ msg }}</h3>
        <div class="item"
             v-for="(item,index) in todoList"
             :key="index">#{{item}}</div>
    </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Vue & PWA Log | 问题纪要',
        todoList: [
          '主文档离线,需要设置ignoreUrlParametersMatching 将参数匹配',
          'service-worker 未更新?',
          '第一次还是会走缓存,刷新才会更新',
          '根路径被缓存,不带参数的 index.html 被缓存,都需要等待 max-age 才更新'
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1,
  h2 {
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
      color: #35495e;
  }
</style>
