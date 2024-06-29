<script lang="ts">
	import Blockchain from '$lib/svg/Blockchain-Technology.svg';
	import cloud from '$lib/svg/Cloud-Technology-Computing.svg';
	import MyBtn from '$lib/components/MyBtn.svelte';
	import { goto } from '$app/navigation';

	function handleLearnMoreClick() {
		goto('/learnMore');
	}
	function handleEnrollNowClick() {
		goto('/enroll');
	}
</script>

<div class="md:grid-auto-flow-row grid grid-cols-1 md:grid-flow-row lg:grid-cols-3">
	<div class="m-20 flex hidden justify-center lg:block">
		<img class="size-max" src={Blockchain} alt="tech1" />
	</div>
	<div class="mt-20 lg:mt-40">
		<h1
			class="text-center text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
		>
			Get industry experience,
		</h1>
		<h1
			class="text-center text-2xl font-extrabold md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl"
		>
			from industry experts.
		</h1>
		<h1
			class="lg:text-md p-6 text-center text-xs font-light md:text-sm md:font-normal lg:font-medium"
		>
			Get into the world of coding and AI with hands-on training from seasoned professionals. Our
			program bridges the gap between theory and practice, offering you real-world projects and
			insights straight from industry veterans. Whether you're a beginner or looking to level up
			your skills, we'll equip you with the knowledge and experience employers demand. Get industry
			experience, from industry experts – and launch your career in tech with confidence.
		</h1>

		<div class="flex justify-center">
			<MyBtn type="" label="Learn More" onClick={handleLearnMoreClick} myColor="bg-my_yellow"
			></MyBtn>
			<MyBtn type="" label="Enroll now" onClick={handleEnrollNowClick} myColor="bg-my_blue"></MyBtn>
		</div>
	</div>
	<div class="ml-10 flex justify-center md:block lg:mt-80">
		<img class="" src={cloud} alt="tech2" />
	</div>
</div>

<!-- <style>
.rainbow-text {
    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.background {
    background-image: url({img});
}
</style> -->
