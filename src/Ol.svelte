<script>
    import ListElement from './ListElement.svelte'
    import {  UpdadeFace } from "./scene";
    import {gsap} from 'gsap';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let resetMenu;

    function UpdateAnimation(elt, inAndOut) {
        dispatch('message', {
            text: elt
        });
    }

    let isOut =false;
    let first;
    let second;
    let third;
    let fourth;
    let fifth;
    const objList = [first, second, third, fourth, fifth]

    const img1 = 'assets/img/tps.jpg';
    const img2 = 'assets/img/rolex.jpg';
    const img3 = 'assets/img/agt.jpg';
    const img4 = 'assets/img/ar.jpg';
    const img5 = 'assets/img/jv.jpg';

    const text1 = [".01","Tipsmeee", 
    "Tipsmeee is a cloud web app in the Finetech industry, as a CTO, I had to build the project from scratch starting by the architecture of the project, the functional analysis, the documentation, the development, code review, and deployment on the cloud.Tipsmeee is as well embeded in other website.Tipsmeee is a Multilang Website, an Inboard module for more than 10 countries, each user has a dedicated payment page, it can handle more than 10 currencies, as a dasboard, it as a group feature for spread the money to multiple users and much more.",
    '<iframe src="https://player.vimeo.com/video/481992024" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>']
    
    const text2 = [".02","FixStudio", 
    "Pipeline Creation for Swatch rendering in 3D. Transform a database made for construction to a database made for 3D rendering, Functional analysis with the Rolex team, Business trip, Developpement of the core app, lead of a small team, Documentation, Code Review, Tool development (etc... interactive 3D visualization and builder).",
    '<iframe src="https://player.vimeo.com/video/481991636" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>']
    
    const text3 = [".03","Augment", 
    "3D Plugin & R&D for Virtual Reality/Augmented Reality, were my tasks. Augment is a 3D application for 3D Artist.Since Artists can use different software, I had to develop and maintain plugins for various 3D software, that was done in python mostly. Plus some virtual reality apps, using HTC Vive and Hololens, that was done in Unity3D/C# and Unreal/C++.",
    '<iframe src="https://player.vimeo.com/video/481994923" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>']

    const text4 = [".04","Light-up", 
    "Full conception of Augmented reality instalations, Design, crafting direction, and software and software development, C++(OpenFrameWorks), most instalations were using kinect detection.",
    '<iframe src="https://player.vimeo.com/video/156682863" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>']

    const text5 = [".05","Animation", 
    "Yohann Mepa In Animation, Working on Animations Projects",
    '<iframe src="https://player.vimeo.com/video/145055102" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>']
    let packs = [
        { text: text1, img: img1 },
        { text: text2, img: img2 },
        { text: text3, img: img3 },
        { text: text4, img: img4 },
        { text: text5, img: img5 },
    ];
    const setMenu = (value,i, factor)=>{
        if(!isOut){
            let index = objList.indexOf(value);
            let newList = new Array(...objList);
            if (index > -1) {
               newList.splice(index, 1);
            }
            newList.forEach(element => {
                gsap.to(element, {x: -200, opacity:0, duration: .4,ease: "sine",onComplete:()=>{isOut=true}});
            });
            gsap.to(value, {x: -130, scaleX:1, scaleY:1, duration: .5,ease: "sine", delay:.1, onComplete:()=>{isOut=true}});
        }
            UpdadeFace(2)
            
        let val;
        if (i == 0)
            {val = text1}
        else if (i == 1)
            {val = text2}
        else if (i == 2)
            {val = text3}
        else if (i == 3)
            {val = text4}
        else if (i == 4)
            {val = text5}
        UpdateAnimation(val, "in")
    }
  const moveAll = (value,i)=>{
    setMenu(value,i, 'set')
  }

  const scaleMenu = (val, fact)=>{
    let factor = (fact == "up" )? 1.2:1;
    if(!isOut){
      gsap.to(val, {scaleX:factor, scaleY:factor, duration: .3,ease: "sine"});
    }
  }
$: if(resetMenu){
    objList.forEach(element => {
        gsap.to(element, {x: 0, y: 0,opacity:1, duration: .3,ease: "sine",onComplete:()=>{isOut=false}});
    });
    UpdadeFace(0)
    dispatch('message', {
    close: true
    });
}
</script>
<style lang="sass">
ol
    padding-top: 0px
    margin-top: 0px
    padding-bottom: -10%
    padding-left: 0px
li
    list-style: none
    width: 235px
    z-index: -1

</style>

<ol>
    {#each packs as { text, img }, i}
        <li bind:this={objList[i]}
        on:click={()=>{moveAll(objList[i],i)}}
        on:mouseenter={()=>{scaleMenu(objList[i],"up")}}
        on:mouseleave={()=>{scaleMenu(objList[i],"down")}}
        >
        <ListElement elt={objList[i]} {text} {img}/>
        </li>
    {/each}
</ol>
