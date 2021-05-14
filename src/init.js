import { compileToFunction } from "./compiler";
import { mountComponent } from "./lifeCycle";
import { initState } from "./state";
export function initMixin(Vue) {
    // 后续组件化开发的时候  Vue.extend 可以创造一个子组件，子组件可以继承Vue，子组件也可以调用_init方法
    Vue.prototype._init = function(options) {
        const vm = this;
        // 把用户的选项放到 vm上，这样在其他方法中都可以获取到options 了 
        vm.$options = options; // 为了后续扩展的方法 都可以获取$options选项

        // options中是用户传入的数据 el , data
        initState(vm);
        if (vm.$options.el) {
            vm.$mount(vm.$options.el);
        }
    }
    Vue.prototype.$mount = function(el) {
        const vm = this;
        const opts = vm.$options;
        el = document.querySelector(el); // 获取真实的元素
        vm.$el = el; // 页面真实元素

        if (!opts.render) {
            // 模板编译
            let template = opts.template;
            if (!template) {
                template = el.outerHTML;
            }
            let render = compileToFunction(template)
            opts.render = render;

        }
        //  这里已经获取到了，一个render函数的了，这个函数它的返回值 _c('div',{id:'app'},_c('span',undefined,'hello'))
        mountComponent(vm)
    }
}