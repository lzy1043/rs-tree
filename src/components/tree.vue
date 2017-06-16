<template>
	<ul class="sidebar-menu" id="mainFormTree">
		<li class="treeview menu-toggle-center" id="menu-toggle" v-if="isSearch">
			<div class="input-group" id="menu-search-box">
				<input type="text" placeholder="搜索" class="form-control" id="menu-search-box" v-model="searchKeyWord">
				<span input-group-btn><button @click="searchMenuBar">搜索</button></span>
			</div>
		</li>
		<treeItem v-for="(item,index) in list" :keys="index" :item="item"></treeItem>	
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
				default:[]
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
			}
		},
		computed:{
			
		},
		components:{
			treeItem
		}
	}
</script>