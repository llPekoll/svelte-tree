<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scene";
  import {gsap} from 'gsap';
  // import { SplitText } from "gsap/SplitText";
  let title;
  const title_content = "Yohann";
  
  let el;
  onMount(() => {
    createScene(el)
    // gsap.registerPlugin(SplitText);
    // var tl = gsap.timeline(), 

    // mySplitText = new SplitText(title, {type:"words,chars"}), 
    // chars = mySplitText.chars; //an array of all the divs that wrap each character

    // gsap.set(title, {perspective: 400});

    // tl.from(chars, {duration: 0.8, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.01}, "+=0");
  });
</script>

<style>
  .title{
    font-family: 'Roboto';
    font-size: 44px;
    font-weight: 100;
    line-height: 0.7;
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