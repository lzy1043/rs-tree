<template>
	<li class="treeview">
		<a href="#" :title="item.name">{{item.name}}</a>
		<tree :list="item.children" :isSearch="isSearch"></tree>
	</li>
</template>

<script>
	import tree from './tree'
	export default {
		props:{
			item:{
				type:Object,
				default:true
			}
		},
		created(){
			console.log(this.item)
		},
		data(){
			return{
				isSearch:false
			}
		},
		components:{
			tree
		}
	}
</script>