<script>
    import { onMount } from 'svelte';
    import { createScene, updadeFace } from "./scene";
    import {gsap} from 'gsap';
    import { Swipe, SwipeItem } from "svelte-swipe";
    import Icon from 'svelte-awesome';
    import { timesCircle } from 'svelte-awesome/icons';
    import Trans from './Trans.svelte'
    import ListElement from './ListElement.svelte'

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

    let text1 = [".01","Tipsmeee",["Tipsmeee", "Tipsmeee is a cloud web app in the Finetech industry, as a CTO, I had to build the project from scratch starting by the architecture of the project, the functional analysis, the documentation, the development, code review, and deployment on the cloud.Tipsmeee is as well embeded in other website.Tipsmeee is a Multilang Website, an Inboard module for more than 10 countries, each user has a dedicated payment page, it can handle more than 10 currencies, as a dasboard, it as a group feature for spread the money to multiple users and much more."]]
    let text2 = [".02","FixStudio",["FixStudio", "Pipeline Creation for Swatch rendering in 3D. Transform a database made for construction to a database made for 3D rendering, Functional analysis with the Rolex team, Business trip, Developpement of the core app, lead of a small team, Documentation, Code Review, Tool development (etc... interactive 3D visualization and builder)."]]
    let text3 = [".03","Augment",["Augment", "3D Plugin & R&D for Virtual Reality/Augmented Reality, were my tasks. Augment is a 3D application for 3D Artist.Since Artists can use different software, I had to develop and maintain plugins for various 3D software, that was done in python mostly. Plus some virtual reality apps, using HTC Vive and Hololens, that was done in Unity3D/C# and Unreal/C++."]]
    let text4 = [".04","Light-up",["Light-up Studio", "Full conception of Augmented reality instalations, Design, crafting direction, and software and software development, C++(OpenFrameWorks), most instalations were using kinect detection."]]
    let text5 = [".05","Animation",["Animation", "Yohann Mepa In Animation, Working on Animations Projects"]]
    
  let el;
  onMount(() => {
    createScene(el)
  });

    const setMenu = (value, factor)=>{
      let objList = [first, second, third, fourth, fifth]
      if(isOut){
        gsap.to(value, {scaleX: 1,scaleY: 1, duration: .3,ease: "sine",});
        objList.forEach(element => {
          gsap.to(element, {x: 0, y: 0, duration: .3,ease: "sine",onComplete:()=>{isOut=false}});
        });
        ;
      }
      else{
        const index = objList.indexOf(value);
        if (index > -1) {
          objList.splice(index, 1);
        }
        objList.forEach(element => {
          gsap.to(element, {x: -1000, duration: .3,ease: "sine",onComplete:()=>{isOut=true}});
        });
          gsap.set(value, {xPercent:0, yPercent:0, left:0,y:0})
          var h = window.innerHeight/4
          var w = window.innerWidth/3
          gsap.to(value, {x: w,y: h,scaleX: 2,scaleY: 2, duration: .3,ease: "sine"});
      }
        updadeFace(2)
    }
  const moveAll = (value)=>{
    setMenu(value, 'set')
  }
  const resetMenu = (value)=>{
    setMenu(value, 'unset')
  }
  const scaleMenu = (val, fact)=>{
    let factor = (fact == "up" )? 1.2:1;
    if(!isOut){
      gsap.to(val, {scaleX:factor, scaleY:factor, duration: .3,ease: "sine"});
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
    top: 12%; 
    width:200px; 
    height:100px; 
  }

  ol{
    font-family: 'Roboto';
    list-style-type: none;
    width: 230px;
  }
    li{
    height: 70px;
    background-color: red
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
    height: 0px;
    width: 100%;
    background-color: rgba(0,0,0,0.7);
  }
  
</style>

  <div bind:this={title} class="title">
      {@html title_content}
  </div>

<div class="header">
</div>
<div class="projects">
  <ol>
    <li
    bind:this={first} 
    on:click={()=>{moveAll(first)}} 
    on:mouseenter={()=>{scaleMenu(first,"up")}}
	  on:mouseleave={()=>{scaleMenu(first,"down")}}
    >
    <ListElement elt={fourth} isOut={isOut} text={text1} img={img01}/>
    </li>
    <li
    bind:this={second} 
    on:click={()=>{moveAll(second)}} 
    on:mouseenter={()=>{scaleMenu(second,"up")}}
	  on:mouseleave={()=>{scaleMenu(second,"down")}}
    >
        <ListElement elt={fourth} isOut={isOut} text={text2} img={img02}/>
    </li>
    <li
    bind:this={third} 
    on:click={()=>{moveAll(third)}} 
    on:mouseenter={()=>{scaleMenu(third,"up")}}
	  on:mouseleave={()=>{scaleMenu(third,"down")}}
    >
      <ListElement elt={fourth} isOut={isOut} text={text3} img={img03}/>
    </li>
    <li
    bind:this={fourth} 
    on:click={()=>{moveAll(fourth)}} 
    on:mouseenter={()=>{scaleMenu(fourth,"up")}}
	  on:mouseleave={()=>{scaleMenu(fourth,"down")}}
    >
      <ListElement elt={fourth} isOut={isOut} text={text4} img={img04}/>
    </li>
    <li
    bind:this={fifth} 
    on:click={()=>{moveAll(fifth)}} 
    on:mouseenter={()=>{scaleMenu(fifth,"up")}}
	  on:mouseleave={()=>{scaleMenu(fifth,"down")}}
    >
    <ListElement elt={fifth} isOut={isOut} text={text5} img={img05}/>
    </li>
  </ol>
</div>
<div class="footer">
Mepa Yohann all right reserved
</div>
<canvas bind:this={el}></canvas>