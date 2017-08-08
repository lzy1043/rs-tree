<template>
  <collapse-transition>
    <ul v-show="isExpand" class="list-unstyled">
      <li>
        <span :class="{'navnode':!data.children}">
          <i class="glyphicon glyphicon-menu-right" :class="{'glyphicon-menu-down': data.isExpand}" @click="handleExpand"></i>
          <input type="checkbox" :name="data.name" v-if="checkbox" @click="handleCheck">
        </span>
        <span class="tree-view-text" v-html="data.name" @click="handleClick"></span>
        <treeItem v-for="(item,index) in data.children" :data="item" :isExpand="data.isExpand"></treeItem>
      </li>
    </ul>
  </collapse-transition>
</template>
      
<script>
  import collapseTransition from '@/transition/collapse-transition'
  import { bus } from '@/util/bus.js'
  export default {
    name: 'treeItem',
    props: {
      data: {
        type: Object,
        default () {
          return []
        }
      },
      isExpand: {
        type: Boolean,
        default: false
      },
      checkbox: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        active: false
      }
    },
    methods: {
      handleExpand () {
        this.$set(this.data, 'isExpand', !this.data.isExpand)
        if (this.data.isExpand) {
          bus.$emit('node-expand', this.data)
        } else {
          bus.$emit('node-collapse', this.data)
        }
      },
      handleClick () {
        bus.$emit('node-click', this.data)
      }
    },
    components: {
      collapseTransition
    }
  }
</script>
<style lang="Sass">
  .collapse-transition {
    transition: 0.5s height ease-in-out, 0.5s padding-top ease-in-out, 0.5s padding-bottom ease-in-out;
  }
  .list-unstyled{
    padding-left: 20px;
  }
  .tree-view-text{
    cursor: pointer;
  }

</style>