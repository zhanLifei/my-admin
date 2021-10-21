<template>
	<div style="width: 100%;height: 100%;">
		<div v-if="actionName!=''" style="color:#fff;background: rgba(0,0,0,.3);padding:10px 20px;font-size:24px;position: absolute;z-index:999;left: 50%;top:50%;transform: translate(-50%,-50%);">{{actionName}}</div>
		<ezflycard
			@onDragMove='onCardDragMove'
			@onDragStop='onCardDragStop'
			@onThrowDone='onCardThrowDone'
			:cardWidth="200" 
			:cardHeight="240"
			:throwTriggerDistance="100"
			dragDirection="horizontal"
			:hasShadow="true"
		>
			<div slot="firstCard" style="width:100%;height:100%;">
				<div v-if="cards[0]" class="tantanCard">
					<img :src="cards[0].image" style="width: 100%;height: 100%;" mode="aspectFill" />
				</div>
			</div>
			<div slot="secondCard" style="width:100%;height:100%;">
				<div v-if="cards[1]" class="tantanCard">
					<image :src="cards[1].image" style="width: 100%;height: 100%;" mode="aspectFill" />
				</div>
			</div>
			<div slot="thirdCard" style="width:100%;height:100%;">
				<div v-if="cards[2]" class="tantanCard">
					<image :src="cards[2].image" style="width: 100%;height: 100%;" mode="aspectFill" />
				</div>
			</div>
		</ezflycard>
	</div>
</template>

<script>
	import ezflycard from "@/components/ezflycard.vue"
	export default {
		components:{
			ezflycard
		},
		data() {
			return {
				title: 'Hello',
				actionName:"",
				cards:[
					{
						image:"/static/1.jpg"
					},
					{
						image:"/static/2.jpg"
					},
					{
						image:"/static/3.jpg"
					},
					{
						image:"/static/4.jpg"
					},
					{
						image:"/static/5.jpg"
					}
				]
			}
		},
		onLoad() {
		},
		methods: {
			onCardDragMove(obj){
				if(obj.left<-10){
					this.actionName="不喜欢";
				}else if(obj.left>10){
					this.actionName="喜欢";
				}else{
					this.actionName="";
				}
			},
			onCardDragStop(obj){
				this.actionName="";
			},
			onCardThrowDone(obj){
				this.cards.splice(0,1);
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	div{
		box-sizing: border-box;
	}
	
	.tantanCard
	{
		width: 100%;
		height: 100%;
	}
</style>