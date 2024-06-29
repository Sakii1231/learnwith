<script>
	let array = [];
	for (let i = 1; i <= 10; i++) {
		array.push(i);
	}
	console.log(array);
</script>

<div>
	<h1 class="item1">hello 1</h1>

	<h1>hello 2</h1>
</div>

<div class="flex h-screen flex-col items-center justify-center border-2">
	<div class="justify-cente relative flex w-screen flex-col items-center border-4">
		<div class="item1 absolute">how are you</div>
		<div class="item2 absolute">I am good</div>
		<div class="item3 absolute">okay then i will go</div>
		<div class="item4 absolute">how are you</div>
		<div class="item5 absolute">how are you</div>
		<div class="item6 absolute">how are you</div>
		<div class="item7 absolute">how are you</div>
		<div class="item8 absolute">how are you</div>
		<div class="item9 absolute">how are you</div>
	</div>
</div>

<style>
	.item1 {
		transform: rotate(20deg);
	}
	.item2 {
		transform: rotate(40deg);
	}
	.item3 {
		transform: rotate(60deg);
	}
	.item4 {
		transform: rotate(80deg);
	}
	.item5 {
		transform: rotate(100deg);
	}
	.item6 {
		transform: rotate(120deg);
	}
	.item7 {
		transform: rotate(140deg);
	}
	.item8 {
		transform: rotate(160deg);
	}
	.item9 {
		transform: rotate(180deg);
	}
	.item10 {
		transform: rotate(100deg);
	}
</style>
