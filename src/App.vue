<template>
  <div id="app">
    <vue-img-sort
      :img-list="imgList"
      @delete="deleteItem"
      @sorted="sorted">
    </vue-img-sort>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
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
        }]
      }
    },
    methods: {
      deleteItem(element){
        console.log('被删除的元素',element);
      },
      sorted(list) {
        var idList = list.map(function (index, ele) {  //排序之后的id数组
          // console.log($(ele).offset().left,ele.dataset.id);
          return (ele.dataset.id);
        })
        console.log('排序之后的id数组', idList);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
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
</style>
