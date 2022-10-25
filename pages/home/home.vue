<template>
	<view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item  in  swiperlist">
				<image :src="item.image_url" mode="" class="swiper_image"></image>
			</swiper-item>
		</swiper>
		<!-- 分类导航 -->
		<div class="classify">
			<view v-for="item in classifylist">
				<navigator  :url="'/Packages/classify/classify?categoryTd='+item.id">
					<image :src="item.icon_url" mode=""></image>
					<p>{{item.name}}</p>
				</navigator>
			</view>
		</div>
		<!-- 标题 -->
		<h1>品牌智造商直供</h1>
		<!-- n内容 -->
		<div class="footer">
			<view v-for="item in  footerlist">
				{{item.name}}
				<image :src="item.pic_url" mode=""></image>
			</view>
		</div>
	</view>
</template>

<script>
	import {
		$http
	} from '@escook/request-miniprogram';
	export default {
		data() {
			return {
				swiperlist: [],
				classifylist: [],
				footerlist: []
			};
		},
		methods: {
			//  轮播图 
			async getswiperlist() {
				let {
					data: res
				} = await $http.get('/index/index')
				console.log(res);
				this.swiperlist = res.banner
			},
			// 分类导航列表
			async getclassifylist() {
				let {
					data: res
				} = await $http.get('/index/index')
				console.log(res);
				this.classifylist = res.channel
			},
			// 底部数据
			async getfooterlist() {
				let {
					data: res
				} = await $http.get('/index/index')
				console.log(res);
				this.footerlist = res.brandList
			},
		},
		mounted() {
			this.getswiperlist()
			this.getclassifylist()
			this.getfooterlist()
		}
	}
</script>

<style lang="scss">
	.swiper_image {
		width: 100%;
	}

	.classify {
		margin: 15px 0;
		display: flex;
		overflow: hidden;
		text-align: center;

		view {
			flex: 1;

			image {
				width: 50px;
				height: 50px;
			}
		}
	}

	h1 {
		height: 40px;
		line-height: 20px;
		font-weight: 800;
		margin: 20px 0;
		text-align: center;
	}

	.footer {
		width: 100%;
		display: flex;
		flex-wrap: wrap;

		view {
			font-size: 10px;
			flex: 45%;
			display: flex;
			text-align: center;
			align-items: center;
			margin: 20px 5px;

			// background-color: blue;
			image {
				width: 80px;
				height: 80px;
				margin-left: 20px 0;
			}
		}
	}
</style>
