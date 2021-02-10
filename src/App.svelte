<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scene";
  import {gsap} from 'gsap';
  import { Swipe, SwipeItem } from "svelte-swipe";


  let title;
  const title_content = "|Yohann <br/> |Mepa";
  
  let el;
  onMount(() => {
    createScene(el)
  });
    const swipeConfig = {
    autoplay: false,
    delay: 2000,
    showIndicators: true,
    transitionDuration: 1000,
    defaultIndex: 0,
  };
</script>

<style>
  .title{
    font-family: 'Roboto';
    font-size: 44px;
    font-weight: 100;
    line-height: 0.8;
    position: absolute; 
    color:grey;
    left: 15%; 
    top: 50%; 
    width:200px; 
    height:100px; 
  }
  
</style>
<div id="wrapper">
    <div bind:this={title} class="title">
        {@html title_content}
    </div>
    
</div>

<canvas bind:this={el}></canvas>