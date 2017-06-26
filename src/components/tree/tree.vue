<template>
	<ul class="sidebar-menu" id="mainFormTree">
		<li class="treeview menu-toggle-center" id="menu-toggle" v-if="isSearch">
			<div class="input-group" id="menu-search-box">
				<input type="text" placeholder="搜索" class="form-control" id="menu-search" v-model="searchKeyWord">
				<span input-group-btn><button class="menu-search-btn btn btn-flat" @click="searchMenuBar"><i class="fa fa-search"></i></button></span>
			</div>
			<a><i id="menu-toggle-arrow" class="fa fa-arrow-cicle-left"></i></a>
		</li>
		<treeItem v-for="(item,index) in list" :keys="index" :item="item" :trees="list" :jump="jump"></treeItem>	
	</ul>
</template>

<script>
	import treeItem from './tree-item'
	export default {
		props:{
			isSearch:{
				type:Boolean,
				default:true
			},
			list:{
				type:Array,
				default(){
					return [];
				}
			},
			jump:{
				type:Function
			}
		},
		data(){
			return{
				searchKeyWord:'',
				tempList:{}
			}
		},
		methods:{
			searchMenuBar(){
				console.log(this.searchKeyWord)
			},
			handleNodeExpand(nodeData, node, instance) {
				console.log(nodeData);
				console.log(node);
				console.log(instance)
				this.$emit('node-expand', node);
			}
		},
		components:{
			treeItem
		}
	}
</script>

<style>
	.sidebar-menu{
		width: 230px;
	}
</style>