import tree from './components/tree'

const rsTree = {};

rsTree.install = function(Vue,opts){
	Vue.component('tree',tree)
}

if (typeof window !== 'undefined' && window.Vue) {
    rsTree.install(window.Vue);
}

export default rsTree;