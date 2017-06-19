<template>
  <div id="app" class="skin-win10">
    <tree :isSearch="isSearch" :list="list"></tree>
  </div>
</template>

<script>
import tree from './components/tree'
import util from './common/js/util'
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
  }
}
</script>

<style>
</style>
