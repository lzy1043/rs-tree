<template>
  <div class="rs-tree">
    <treeItem v-for="(item,index) in list" :keys="index" :data="item" isExpand></treeItem>
    <div class="rs-tree-empty" v-if="!list.length">
        暂无数据
    </div>
  </div>
</template>

<script>
import treeItem from './tree-item'
import { bus } from '@/util/bus.js'
export default {
  props: {
    list: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  methods: {
  },
  components: {
    treeItem
  },
  mounted () {
    bus.$on('node-expand', (node) => {
      this.$emit('rs-node-expand', node)
    })

    bus.$on('node-collapse', (node) => {
      this.$emit('rs-node-collapse', node)
    })

    bus.$on('node-click', (node) => {
      this.$emit('rs-node-click', node)
    })
  }
}
</script>
