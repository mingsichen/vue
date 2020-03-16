import Vue from 'vue';
import MessageBox from './MessageBox/MessageBox'

export var messageBox = (function(){
    var defaluts = {
        // 默认值
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null

    };

    var MyComponent = Vue.extend(MessageBox);

    return function(opts){ // 配置参数

        for(var attr in opts){
            defaluts[attr] = opts[attr];
        }

        var vm = new MyComponent({
            el: document.createElement('div'),
            data: {
                title: defaluts.title,
                content: defaluts.content,
                cancel: defaluts.cancel,
                ok: defaluts.ok
            },
            methods:{
                handleCancel(){
                   
                    defaluts.handleCancel && defaluts.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk(){
                  
                    defaluts.handleOk && defaluts.handleOk.call(this);
                    document.body.removeChild(vm.$el);

                }
            }
        });

        document.body.appendChild( vm.$el );

    }
    
})();