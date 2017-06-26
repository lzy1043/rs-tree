<template>
	<li class="treeview" :class="{'active':item.isExpend}" @click.stop="expend(item)">
		<a href="#" :data-title="item.name" :class="{'navnode':!item.children}" @click="tempJump(item.children)">
			<i :class="item.icon"></i>
			<span class="tree-view-text">{{item.name}}</span>
			<span class="pull-right-container">
				<i class="fa pull-right" :class="{'fa-angle-left':!item.isExpend && item.children,'fa-angle-down':item.isExpend && item.children}"></i>
			</span>
		</a>
		<transition name="fade">
			<ul class="treeview-menu" v-if="isChildren" v-show="item.isExpend" >
				<treeItem v-for="(citem,index) in tempItem.children" :keys="index" :item="citem" :trees="tempItem.children" :jump="tempJump"></treeItem>
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
			},
			jump:{
				type:Function
			}
		},
		created(){
			this.tempItem = JSON.parse(JSON.stringify(this.item))
			this.tempJump = this.jump
			this.trees.forEach((item,index) => {
				this.treeData.push(item)
			})
		},
		data(){
			return{
				isSearch:false,
				tempItem:{},
				tempJump:null,
				active:false,
				treeData:[]
			}
		},
		computed:{
			isChildren(){
				return this.item.children && this.item.children.length
			}
		},
		methods:{
			expend(item){
				var getClickNode = function(data){
					data.forEach((treeItem,index) => {
						if(treeItem.id === item.id){
							item.isExpend = !item.isExpend;
						}else{
							treeItem.isExpend = false;
						}
					})
				}
				getClickNode(this.treeData);
			}
		}
	}
</script>