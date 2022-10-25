<template>
	<view>
		  <div class="classifylist" >
			  <view v-for="item  in  list ">
				  <image :src="item.list_pic_url" mode=""></image>
				  {{item.name}}
				  <div style='color: red;'> {{item.retail_price}}</div>
			  </view>
		  </div>
	</view >
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			};
		},
		// 获取id
		 onLoad(opent){
		 	  console.log(opent);
			  // uni.$http.get('/goods/goodsList?categoryId='+ opent.categoryTd).then(res=>{
				 //  console.log(res);
			  // })
			  uni.$http.get(`/goods/goodsList?categoryId=${opent.categoryTd}`).then(res=>{
			  				  console.log(res.data.data);
							  this.list=res.data.data
			  })
		 }
	}
</script>

<style lang="scss">

</style>
