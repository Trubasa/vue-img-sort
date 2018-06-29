<template>
  <div class="vue-img-sort">
    <div class="grid">
      <div class="item" v-for="item,index in imgList" :data-id="item.id" >
        <div class="delete_item" @click="removeElement($event)"><i class="vue-img-sort-icon icon-icon_wrong"></i></div>
        <div class="item-content">
          <img :src="item.url" @load="reLayout"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vue-img-sort",
    data() {
      return {
        grid:null,
        sortedList:[]
      }
    },
    props: {
      imgList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    watch:{
      imgList(val){
        this.reLayout();
      },
      sortedList(val){
        this.$emit('sorted',this.sortedList)
      }
    },
    computed:{
    },
    mounted() {
      var that=this;
      this.grid = new Muuri('.grid', {  //初始化
        dragEnabled: true,
        layout: {
          fillGaps: true
        }
      });
      this.grid.on('dragEnd', function (item, event) {  //拖拽结束后回调
        // //////console.log(event);
        // //////console.log(item);
        setTimeout(function () {  //等待拖拽的动画结束
          that.getSortedList();
        }, 300);
      });
    },
    methods:{
      getSortedList(){
        let that=this;
        var sortedList = $('.grid .item').sort(function (ele1, ele2) { //排序之后的新数组eleList
          return ($(ele1).offset().top>$(ele2).offset().top||($(ele1).offset().top==$(ele2).offset().top&& $(ele1).offset().left > $(ele2).offset().left ))? 1 : -1
        })


        var ary=[];
        sortedList.each(function (index,ele) {
          ////console.log(ele.dataset.index,$(ele).offset().top,$(ele).offset().left);
          ary.push(that.getListElementById(ele.dataset.id));
        });

        this.sortedList=ary;
      },
      reLayout(){
        this.grid.refreshItems().layout(); //重新排版
      },
      getListElementById(id){
        var that=this;
        var obj={}
        for(var i=0;i<that.imgList.length;i++){
          if(that.imgList[i].id==id){
            obj=that.imgList[i];

            break;
          }
        }
        return obj;
      },
      removeElement(event){
        //console.log('删除元素', $(event.target).parents('.item')[0]);
        var that=this;
        this.$confirm('确定删除该图片?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          // //console.log(event.target.parentNode.dataset.index,that.imgList,that.img)
          var deleteData=that.getListElementById($(event.target).parents('.item')[0].dataset.id);

          that.$emit('delete',deleteData);

          that.grid.remove([$(event.target).parents('.item')[0]], {removeElements: true});  //删除元素
          that.getSortedList();
        }).catch(() => {
        });
      }
    }
  }
</script>

<style>
  .grid {
    position: relative;
    transition: opacity 0.8s linear 1s;
  }
  .images-loaded .grid {
    opacity: 1;
  }
  .item {
    position: absolute;
    margin: 5px;
    z-index: 1;
  }
  .muuri-item-shown {
    opacity: 1;
  }
  .item.muuri-item-hidden {
    z-index: 0;
    opacity: 0;
  }
  .item.muuri-item-releasing {
    z-index: 2;
  }
  .item.muuri-item-dragging {
    z-index: 3;
  }
  .item-content {
    position: relative;
    cursor: pointer;
  }
  .item-content > img {
    display: block;
    border-radius: 6px;
    height: 200px;
  }
  .muuri-item {
    overflow: hidden
  }
  .delete_item {
    position: absolute;
    top: 0;
    right: -60px;
    z-index: 2;
    padding: 10px;
    color: #fff;
    background: rgba(0, 0, 0, 0.56);
    border-radius: 5px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  .muuri-item:hover .delete_item {
    right: 0;
  }
</style>
