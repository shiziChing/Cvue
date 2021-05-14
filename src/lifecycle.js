import Watcher from "./observe/watcher";
import { patch } from "./vdom/patch";

export function mountComponent(vm){

    // 初始化流程
    let updateComponent = () =>{
        vm._update(vm._render()); 
    }
    new Watcher(vm,updateComponent,()=>{
        console.log('后续增添更新钩子函数 update')
    },true);

}

export function lifeCycleMixin(Vue){
    Vue.prototype._update = function (vnode) {
        const vm = this;
        vm.$el = patch(vm.$el,vnode)
    }
}