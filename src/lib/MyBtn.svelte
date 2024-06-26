<script>
    export let label;
    export let onClick;
    export let myColor;
    export let type;
  </script>

<div class="grid grid-cols-1 grid-rows-1">
            <button type={type} id="animated-text" on:click={onClick} class="rounded-lg p-3 {myColor} m-6 col-start-1 row-start-1 font-semibold z-10 text-my_black text-xs md:text-lg">{label}</button>
            <button class="rounded-lg p-3 bg-my_black m-6 col-start-1 transform translate-x-1 translate-y-1 font-semibold row-start-1 text-my_black text-xs lg:text-lg">{label}</button>
</div>

<style>
  #animated-text {
  letter-spacing: normal;
  transition: letter-spacing 0.3s ease;
}

#animated-text:hover {
  letter-spacing: 0.06em;
}
</style>

<!-- 
@component
## Custom button component
#### Props to pass 

 - label = 'text'
 - onClick = {on_click_function}
 - myColor='bg-tailwindcolor'>

-->