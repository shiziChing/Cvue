import { initMixin } from "./init";
import { lifeCycleMixin } from "./lifeCycle";
import { renderMixin } from "./render";

// vue 要如何实现，原型模式，所有的功能都通过原型扩展的方式来添加
function Vue(options){
    this._init(options); // 实现vue的初始化功能
}

initMixin(Vue);
renderMixin(Vue);
lifeCycleMixin(Vue)


export default Vue;


