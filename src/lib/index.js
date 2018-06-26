/**
 * Created by Trubasa 1141521502@qq.com on 2018/6/26.
 */
/*import '../scripts/vendor/web-animations-2.3.1.min'
import '../scripts/vendor/hammer-2.0.8.min'
import '../scripts/vendor/muuri-0.5.4'*/
import vueImgSort from './vue-img-sort'

const imgSort={
  install(Vue,options){
    Vue.component(vueImgSort.name,vueImgSort);
  }
}
if(typeof window !=='undefined' && window.Vue){
  window.Vue.use(imgSort);
}

export default imgSort
