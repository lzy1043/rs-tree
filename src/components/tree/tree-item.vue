<template>
  <collapse-transition>
    <ul v-show="isExpend">
      <li v-for="item in trees" class="treeview" :class="{'active':item.isExpend}" @click.stop="expend(item)">
        <a href="javascript:void(0)" :data-title="item.name" :class="{'navnode':!item.children}">
          <i :class="item.icon"></i>
          <span class="tree-view-text">{{item.name}}</span>
        </a>
        <treeItem :trees="item.children" :isExpend="item.isExpend"></treeItem>
      </li>
    </ul>
  </collapse-transition>
</template>
      
<script>
  import collapseTransition from '@/transition/collapse-transition'
  export default {
    name: 'treeItem',
    props: {
      trees: {
        type: Array,
        default () {
          return []
        }
      },
      isExpend: {
        type: Boolean,
        default: false
      }
    },
    created () {

    },
    data () {
      return {
        active: false,
        treeData: JSON.parse(JSON.stringify(this.trees))
      }
    },
    computed: {
      isChildren () {
        return this.item.children && this.item.children.length
      }
    },
    methods: {
      expend (item) {
        var getClickNode = function (data) {
          data.forEach((treeItem, index) => {
            if (treeItem.id === item.id) {
              item.isExpend = !item.isExpend
            } else {
              treeItem.isExpend = false
            }
          })
        }
        getClickNode(this.treeData)
      }
    },
    components: {
      collapseTransition
    }
  }
</script>
<style>
  .collapse-transition {
      transition: 1s height ease-in-out, 1s padding-top ease-in-out, 1s padding-bottom ease-in-out;
  }
</style>