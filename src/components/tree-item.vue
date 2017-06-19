<template>
	<li class="treeview" @click.stop="expend(item)">
		<a href="#" :data-title="item.name" :class="{'navnode':!item.children}">
			<i :class="item.icon"></i>
			<span class="tree-view-text">{{item.name}}</span>
			<span class="pull-right-container">
				<i class="fa fa-angle-left pull-right"></i>
			</span>
		</a>
		<transition name="fade">
			<ul class="treeview-menu" v-if="isChildren" v-show="item.isExpend">
				<treeItem v-for="(citem,index) in tempItem.children" :keys="index" :item="citem" :trees="trees"></treeItem>
			</ul>
		</transition>
	</li>
</template>

<script>
	export default {
		name:'treeItem',
		props:{
			item:{
				type:Object,
				default:true
			},
			trees:{
				type:Array,
				default(){
					return []
				}
			}
		},
		created(){
			this.tempItem = JSON.parse(JSON.stringify(this.item))
		},
		data(){
			return{
				isSearch:false,
				tempItem:{}
			}
		},
		computed:{
			isChildren(){
				return this.item.children && this.item.children.length
			}
		},
		methods:{
			expend(item){
				var getClickNode = (data) => {
					data.forEach((citem) => {
						if(citem.id === item.id){
							item.isExpend = !item.isExpend;
						}
						if(citem.children && citem.children.length > 0){
							getClickNode(citem.children)
						}
					})
				}
				getClickNode(this.trees);
			}
		}
	}
</script>
<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	  opacity: 0
	}
</style>