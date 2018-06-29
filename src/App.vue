<template>
  <div id="app">
    <vue-img-sort
      :img-list="imgList"
      @delete="deleteItem"
      @sorted="sorted">
    </vue-img-sort>

    <img class="example" v-for="item in sortedList" :src="item.url" alt="">
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        sortedList:[],
        msg: 'Welcome to Your Vue.js App',
        imgList: [{
          id: 1,
          url: 'https://placeimg.com/195/400/any?1',
        }, {
          id: 2,
          url: 'http://img5.imgtn.bdimg.com/it/u=1666831888,2888550101&fm=200&gp=0.jpg',
        }, {
          id: 3,
          url: 'https://placeimg.com/400/195/any?2',
        }, {
          id: 4,
          url: 'https://placeimg.com/400/195/any?3',
        }]
      }
    },
    methods: {
      deleteItem(data){
        console.log(data);
        console.log('被删除的数据',data.url);
      },
      sorted(list) {
        this.sortedList=list;
        console.log(list);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

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
    color: #42b983;
  }
  .example{
    height: 120px;
    display: inline-block;
  }
</style>
