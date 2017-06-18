<template>
	<li class="treeview">
		<a href="#" :title="item.name">{{item.name}}</a>
		<ul class="menu-content" v-if="isChildren">
			<treeItem v-for="(citem,index) in item.children" :keys="index" :item="citem"></treeItem>
		</ul>
	</li>
</template>

<script>
	export default {
		name:'treeItem',
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
				isSearch:false,
			}
		},
		computed:{
			isChildren(){
				return this.item.children && this.item.children.length
			}
		}
	}
</script>