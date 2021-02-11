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
    const img01 = 'assets/img/tps.jpg';
    const img02 = 'assets/img/rolex.jpg';
    const img03 = 'assets/img/agt.jpg';
    const img04 = 'assets/img/ar.jpg';
    const img05 = 'assets/img/jv.jpg';

    let text1 = ["Tipsmeee", "Tipsmeee is a cloud web app in the Finetech industry, as a CTO, I had to build the project from scratch starting by the architecture of the project, the functional analysis, the documentation, the development, code review, and deployment on the cloud.Tipsmeee is as well embeded in other website.Tipsmeee is a Multilang Website, an Inboard module for more than 10 countries, each user has a dedicated payment page, it can handle more than 10 currencies, as a dasboard, it as a group feature for spread the money to multiple users and much more."]
    let text2 = ["FixStudio", "Pipeline Creation for Swatch rendering in 3D. Transform a database made for construction to a database made for 3D rendering, Functional analysis with the Rolex team, Business trip, Developpement of the core app, lead of a small team, Documentation, Code Review, Tool development (etc... interactive 3D visualization and builder)."]
    let text3 = ["Augment", "3D Plugin & R&D for Virtual Reality/Augmented Reality, were my tasks. Augment is a 3D application for 3D Artist.Since Artists can use different software, I had to develop and maintain plugins for various 3D software, that was done in python mostly. Plus some virtual reality apps, using HTC Vive and Hololens, that was done in Unity3D/C# and Unreal/C++."]
    let text4 = ["Light-up Studio", "Full conception of Augmented reality instalations, Design, crafting direction, and software and software development, C++(OpenFrameWorks), most instalations were using kinect detection."]
    let text5 = ["Animation", "Yohann Mepa In Animation, Working on Animations Projects"]
    
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
          gsap.to(value, {x: 150,y: -20,scaleX: 2,scaleY: 2, duration: .3,ease: "none",});
        // gsap.to(value, {y: -20, duration: .3,ease: "none",});
        // gsap.to(value, {x: 150, duration: 1,ease: "none",});
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
    width: 30px;
    float: right;
    margin-top: -10px;
    margin-right: -10px;
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
    <div class="box" style="background-image: url('{img01}');background-size: cover;">
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
        <div class="box" style="background-image: url('{img02}');background-size: cover;">
      <div class="icon" bind:this={second} on:click={()=>{resetMenu(second)}}>
          <Icon data={timesCircle} scale="2"/>
        </div>
        </div>
    <div class="numbers">02.</div>
    <div class="subjects">Rolex</div>
    <Trans text={text2} bind:show={isOut} />
    </li>
    <li
    bind:this={third} 
    on:click={()=>{moveAll(third)}} 
    on:mouseenter={()=>{scaleUp(third)}}
	  on:mouseleave={()=>{scaleDown(third)}}
    >
        <div class="box" style="background-image: url('{img03}');background-size: cover;">
      <div class="icon" bind:this={third} on:click={()=>{resetMenu(third)}}>
          <Icon data={timesCircle} scale="2"/>
        </div>
        </div>
        <div class="numbers">03.</div>
    <div class="subjects">Augment</div>
    <Trans text={text3} bind:show={isOut} />
    </li>
    <li
    bind:this={fourth} 
    on:click={()=>{moveAll(fourth)}} 
    on:mouseenter={()=>{scaleUp(fourth)}}
	  on:mouseleave={()=>{scaleDown(fourth)}}
    >
        <div class="box" style="background-image: url('{img04}');background-size: cover;">
      <div class="icon" bind:this={fourth} on:click={()=>{resetMenu(fourth)}}>
          <Icon data={timesCircle} scale="2"/>
        </div>
        </div>
        <div class="numbers">04.</div>
    <div class="subjects">Light-up</div>
    <Trans text={text4} bind:show={isOut} />
    </li>
    <li
    bind:this={fifth} 
    on:click={()=>{moveAll(fifth)}} 
    on:mouseenter={()=>{scaleUp(fifth)}}
	  on:mouseleave={()=>{scaleDown(fifth)}}
    >
    <div class="box" style="background-image: url('{img05}');background-size: cover;">
      <div class="icon" bind:this={fifth} on:click={()=>{resetMenu(fifth)}}>
      <Icon data={timesCircle} scale="2"/>
    </div>
    </div>
        <div class="numbers">05.</div>
    <div class="subjects">Animation</div>
    <Trans text={text5} bind:show={isOut} />
    </li>
  </ol>
</div>
<div class="footer">
Mepa Yohann all right reserved
</div>
<canvas bind:this={el}></canvas>