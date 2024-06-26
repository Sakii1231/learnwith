<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import Blockchain from "$lib/svg/Blockchain-Technology.svg"
    import cloud from "$lib/svg/Cloud-Technology-Computing.svg"
    import MyBtn from "$lib/MyBtn.svelte";
    import { goto } from '$app/navigation';
    import img from '$lib/svg/backk.png';

    function handleLearnMoreClick() {
        goto("/learnMore")
  }
  function handleEnrollNowClick() {
        goto("/enrollNow")
  }
  </script>


<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-flow-row md:grid-auto-flow-row">
    <div class="hidden lg:block m-20 flex justify-center">
        <img class="size-max" src={Blockchain} alt="tech1">
    </div>
    <div class="mt-20 lg:mt-40">
        <h1 class="font-extrabold text-2xl text-center text-my_black md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl ">Get industry experience,</h1>
        <h1 class="font-extrabold text-2xl text-center text-my_black md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl">from industry experts.</h1>
        <h1 class="text-center text-xs font-light md:font-normal lg:font-medium text-my_black p-6 md:text-sm lg:text-md">Get into the world of coding and AI with hands-on training from seasoned professionals. Our program bridges the gap between theory and practice, offering you real-world projects and insights straight from industry veterans. Whether you're a beginner or looking to level up your skills, we'll equip you with the knowledge and experience employers demand. Get industry experience, from industry experts – and launch your career in tech with confidence.</h1>
        <div class="flex justify-center">
            <MyBtn type='' label="Learn More" onClick={handleLearnMoreClick} myColor='bg-my_yellow'></MyBtn>
            <MyBtn type='' label="Enroll now" onClick={handleEnrollNowClick} myColor='bg-my_blue'></MyBtn>
        </div>
        </div>
    <div class="md:block ml-10 flex justify-center lg:mt-80">
        <img class='' src={cloud} alt="tech2">
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







<!-- hover trials !-->

<!-- <div class="text-center">
    <h1 class="text-3xl font-bold animate-letter-spacing hover:letter-spacing">Hover Over Me</h1>
</div>

<style>
.animated-text {
  letter-spacing: normal;
  transition: letter-spacing 0.3s ease;
}

.animated-text:hover {
  letter-spacing: 0.1em;
}
</style>


<p class="tracking-normal hover:tracking-wide transition-all duration-300">
    This text will increase its spacing on hover.
  </p>

<p class="animated-text">This text will increase its spacing on hover.</p> -->