<script>
export default {
	props: {
		msg: {
			type: String
		}
	},
	data: function () {
		return { count: 0 };
	}
};
</script>

<template>
	<div class="container">
		<h1>{{ msg }}</h1>
		<div class="img-container"></div>
		<p>img 2</p>
		<img src="../assets/rspack-logo.png" alt="logo" width="160" height="80">
		<div class="card">
			<button type="button" @click="count++">count is {{ count }}</button>
			<p>
				Edit
				<code>components/HelloWorld.vue</code> to test HMR
			</p>
		</div>

		<p>Check out Rspack which support Vue</p>
		<p>
			Install
			<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
			in your IDE for a better DX
		</p>
		<p class="read-the-docs">Click on the Rspack and Vue logos to learn more</p>
	</div>
</template>

<style scoped lang="less">
.container {
	text-align: center;
}

.read-the-docs {
	color: #888;
}
.img-container {
	width: 160px;
	height: 80px;
	border: 1px solid #999;
	background-image: url('../assets/rspack-logo.png');
	background-position: center center;
	background-size: contain;
}
</style>
