<script>
  import { onMount } from 'svelte';
  import { createScene, updadeFace } from "./scene";
  import {gsap} from 'gsap';
  import { Swipe, SwipeItem } from "svelte-swipe";
   import Icon from 'svelte-awesome';
  import { beer, refresh, comment, codeFork, camera, ban, timesCircle } from 'svelte-awesome/icons';


  let title;
  let first;
  let second;
  let third;
  let fourth;
  let fifth;
  const title_content = "|Mepa <br/> |Yohann";
  
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
  	function handleMouseOver(e, value) {
    // console.log(`mousehover ${value}`)
	}
	function handleMouseOut(e) {
    // console.log(`mousehoverout${e}`)
	}
  const moveAll = (value)=>{
    let objList = [first, second, third, fourth, fifth]
    const index = objList.indexOf(value);
    if (index > -1) {
      objList.splice(index, 1);
    }
    objList.forEach(element => {
      gsap.to(element, {x: -600, duration: 1,ease: "none"});
    });
    updadeFace(2)
  }
  
  const resetMenu = (value)=>{
    console.log("reste")
    console.log(value)
    let objList = [first, second, third, fourth, fifth]
    const index = objList.indexOf(value);
    if (index > -1) {
      objList.splice(index, 1);
    }
    console.log(objList)
    objList.forEach(element => {
      gsap.to(element, {x: 0, duration: 1,ease: "none"});
    });
    updadeFace(2)
  }
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
    left: 13%; 
    top: 30%; 
  }
  .box{
    background-color: red;
    float: left;
    height: 55px;
    width: 120px;
    margin-right: 10px
  }
  li{
    height: 70px;
  }
  ol{
    font-family: 'Roboto';
    list-style-type: none;
  }
  .header{
    position: absolute; 
    left: 0; 
    top: 0; 
    height: 70px;
    width: 100%;
    background-color: rgba(0,0,0,0.7);
  }
  .footer{
    text-align: center;
    padding-top:30px;
    color: lightgrey;
    position: absolute; 
    left: 0; 
    bottom:0; 
    height: 70px;
    width: 100%;
    background-color: rgba(0,0,0,0.7);
  }
  .numbers{
    font-weight: 900;
    color: darkgreen;
    display: inline;
    font-size: 30px;
  }
  .subjects{
    display: inline;
    margin-left: -27px;
    color: lightgray;
  }
  .grow { transition: all .1s ease-in-out; }
  .grow:hover { transform: scale(1.2); }
</style>

  <div bind:this={title} class="title">
      {@html title_content}
  </div>
<!-- https://jsfiddle.net/elvinmammadoff/bqrLkdsc/ -->
<div class="header">
</div>
<div class="projects">
  <ol>
    <li class="grow" bind:this={first} on:click={()=>{moveAll(first)}}>
    <div class="box" >
      <div class="icon" bind:this={first} on:click={()=>{resetMenu(first)}}>
        <Icon data={timesCircle} scale="2" style="margin-left:10px"/>
      </div>
    </div>
    <div class="numbers">01.</div>
    
    <div class="subjects">Tipsmeee</div>
      
    </li>
    <li class="grow" bind:this={second} on:click={()=>{moveAll(second)}}>
        <div class="box">
          <Icon data={timesCircle} scale="2" style="margin-left:10px"/>
        </div>
    <div class="numbers">02.</div>
    <div class="subjects">Rolex</div>
    </li>
    <li class="grow" bind:this={third} on:click={()=>{moveAll(third)}}>
        <div class="box">
          <Icon data={timesCircle} scale="2" style="margin-left:10px"/>
        </div>
        <div class="numbers">03.</div>
    <div class="subjects">Augment</div>
    </li>
    <li class="grow" bind:this={fourth} on:click={()=>{moveAll(fourth)}}>
        <div class="box">
          <Icon data={timesCircle} scale="2" style="margin-left:10px"/>
        </div>
        <div class="numbers">04.</div>
    <div class="subjects">Light-up</div>
    </li>
    <li class="grow" bind:this={fifth} on:click={()=>{moveAll(fifth)}}>
    <div class="box">
      <Icon data={timesCircle} scale="2" style="margin-left:10px"/>
    </div>
        <div class="numbers">05.</div>
    <div class="subjects">Animation</div>
    </li>
  </ol>
</div>
<div class="footer">
Mepa Yohann all right reserved
</div>
<canvas bind:this={el}></canvas>