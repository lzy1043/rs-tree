<template>
  <div id="app" class="skin-win10">
    <tree :isSearch="isSearch" :list="list"></tree>
  </div>
</template>

<script>
import tree from './components/tree/tree'
import util from './util/util'
export default {
  name: 'app',
  components: {
    tree
  },
  created(){
    this.axios.get('/api/sidemenu').then((res) =>{
      if(res.status === 200){
       this.list = util.formatTreeData(res.data.data,'id','pid');
      }
    })
  },
  data(){
    return {
      isSearch:true,
      list:[]
    }
  },
  methods:{
    jump(data){
      if(!data){
        console.log('页面跳转')
      }
    }
  }
}
</script>

<style>
</style>
