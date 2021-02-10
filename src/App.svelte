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
    top: 20%; 
    width:200px; 
    height:100px; 
  }
  .projects{
    position: absolute; 
    left: 15%; 
    top: 30%; 
  }
  .box{
    background-color: red;
    height: 10px;
    width: 10px;
  }
  ol{
    list-style-type: none;
  }
</style>
<div id="wrapper">
    <div bind:this={title} class="title">
        {@html title_content}
    </div>
    
</div>
<!-- https://jsfiddle.net/elvinmammadoff/bqrLkdsc/ -->
<div class="projects">
  <ol>
    <li>
    <div class="box">
    </div>
      Tipsmeee
    </li>
    <li>Rolex</li>
    <li>VR/AR Augment</li>
    <li>VR/AR Light-up</li>
    <li>Animation</li>
  </ol>
</div>

<canvas bind:this={el}></canvas>