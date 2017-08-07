<template>
  <div class="rs-tree">
    <treeItem :trees="list" :jump="jump" v-if="list.length" isExpend></treeItem>
    <div class="rs-tree-empty" v-if="!list.length">
        暂无数据
      </div>
  </div>
</template>

<script>
import treeItem from './tree-item'
export default {
  props: {
    isSearch: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default () {
        return {}
      }
    },
    jump: {
      type: Function
    }
  },
  data () {
    return {
      searchKeyWord: ''
    }
  },
  components: {
    treeItem
  }
}
</script>
