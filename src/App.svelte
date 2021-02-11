<script>
    import { onMount } from 'svelte';
    import { createScene, updadeFace } from "./scene";
    import {gsap} from 'gsap';
    import { Swipe, SwipeItem } from "svelte-swipe";
    import Icon from 'svelte-awesome';
    import { timesCircle } from 'svelte-awesome/icons';
    import Trans from './Trans.svelte'


    let title;
    let isOut =false;
    let first;
    let second;
    let third;
    let fourth;
    let fifth;
    const title_content = "|Mepa <br/> |Yohann";

    let text1 = ["jose martins", "<br/> mdr bonjour ca va marfsda lorem epsilinsdf<br/> fasdijf[osgjdo fjgdsfujuj comme <br/>"]
    
  let el;
  onMount(() => {
    createScene(el)
  });

    const setMenu = (value, factor)=>{
      let objList = [first, second, third, fourth, fifth]
      if(isOut){
        gsap.to(value, {scaleX: 1,scaleY: 1, duration: .3,ease: "none",});
        objList.forEach(element => {
          gsap.to(element, {x: 0, y: 0, duration: .3,ease: "none",onComplete:()=>{isOut=false}});
        });
        ;
      }
      else{
        const index = objList.indexOf(value);
        if (index > -1) {
          objList.splice(index, 1);
        }
        objList.forEach(element => {
          gsap.to(element, {x: -1000, duration: .3,ease: "none",onComplete:()=>{isOut=true}});
        });
        gsap.to(value, {x: 150,y: -20, duration: .3,ease: "none",});
        gsap.to(value, {scaleX: 2,scaleY: 2, duration: .3,ease: "none",});
      }
        updadeFace(2)
    }
  const moveAll = (value)=>{
    setMenu(value, 'set')
  }
  const resetMenu = (value)=>{
    setMenu(value, 'unset')
  }
  const scaleUp = (val)=>{
    if(!isOut){
      gsap.to(val, {scaleX:1.2, scaleY:1.2, duration: .3,ease: "none"});
    }
  }
  const scaleDown = (val)=>{
    if(!isOut){
      gsap.to(val, {scaleX:1, scaleY:1, duration: .3,ease: "none"});
    }
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
  .icon{
    background-color: yellow;
    width: 30px;
    float: right;
  }
</style>

  <div bind:this={title} class="title">
      {@html title_content}
  </div>
<!-- https://jsfiddle.net/elvinmammadoff/bqrLkdsc/ -->
<div class="header">
</div>
<div class="projects">
  <ol>
    <li
    bind:this={first} 
    on:click={()=>{moveAll(first)}} 
    on:mouseenter={()=>{scaleUp(first)}}
	  on:mouseleave={()=>{scaleDown(first)}}
    >
    <div class="box" >
      <div class="icon" bind:this={first} on:click={()=>{resetMenu(first)}}>
        <Icon data={timesCircle} scale="2"/>
      </div>
    </div>
    <div class="numbers">01.</div>
    
    <div class="subjects">Tipsmeee</div>
      <Trans text={text1} bind:show={isOut} />
    </li>
    <li
    bind:this={second} 
    on:click={()=>{moveAll(second)}} 
    on:mouseenter={()=>{scaleUp(second)}}
	  on:mouseleave={()=>{scaleDown(second)}}
    >
        <div class="box">
      <div class="icon" bind:this={second} on:click={()=>{resetMenu(second)}}>
          <Icon data={timesCircle} scale="2"/>
        </div>
        </div>
    <div class="numbers">02.</div>
    <div class="subjects">Rolex</div>
    </li>
    <li
    bind:this={third} 
    on:click={()=>{moveAll(third)}} 
    on:mouseenter={()=>{scaleUp(third)}}
	  on:mouseleave={()=>{scaleDown(third)}}
    >
        <div class="box">
      <div class="icon" bind:this={third} on:click={()=>{resetMenu(third)}}>
          <Icon data={timesCircle} scale="2"/>
        </div>
        </div>
        <div class="numbers">03.</div>
    <div class="subjects">Augment</div>
    </li>
    <li
    bind:this={fourth} 
    on:click={()=>{moveAll(fourth)}} 
    on:mouseenter={()=>{scaleUp(fourth)}}
	  on:mouseleave={()=>{scaleDown(fourth)}}
    >
        <div class="box">
      <div class="icon" bind:this={fourth} on:click={()=>{resetMenu(fourth)}}>
          <Icon data={timesCircle} scale="2"/>
        </div>
        </div>
        <div class="numbers">04.</div>
    <div class="subjects">Light-up</div>
    </li>
    <li
    bind:this={fifth} 
    on:click={()=>{moveAll(fifth)}} 
    on:mouseenter={()=>{scaleUp(fifth)}}
	  on:mouseleave={()=>{scaleDown(fifth)}}
    >
    <div class="box">
      <div class="icon" bind:this={fifth} on:click={()=>{resetMenu(fifth)}}>
      <Icon data={timesCircle} scale="2"/>
    </div>
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