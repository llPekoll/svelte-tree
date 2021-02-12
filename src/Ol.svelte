<script>
    import ListElement from './ListElement.svelte'
    import {  UpdadeFace } from "./scene";
    import {gsap} from 'gsap';


    let isOut =false;
    let first;
    let second;
    let third;
    let fourth;
    let fifth;

    const img1 = 'assets/img/tps.jpg';
    const img2 = 'assets/img/rolex.jpg';
    const img3 = 'assets/img/agt.jpg';
    const img4 = 'assets/img/ar.jpg';
    const img5 = 'assets/img/jv.jpg';

    const text1 = [".01","Tipsmeee",["Tipsmeee", "Tipsmeee is a cloud web app in the Finetech industry, as a CTO, I had to build the project from scratch starting by the architecture of the project, the functional analysis, the documentation, the development, code review, and deployment on the cloud.Tipsmeee is as well embeded in other website.Tipsmeee is a Multilang Website, an Inboard module for more than 10 countries, each user has a dedicated payment page, it can handle more than 10 currencies, as a dasboard, it as a group feature for spread the money to multiple users and much more."]]
    const text2 = [".02","FixStudio",["FixStudio", "Pipeline Creation for Swatch rendering in 3D. Transform a database made for construction to a database made for 3D rendering, Functional analysis with the Rolex team, Business trip, Developpement of the core app, lead of a small team, Documentation, Code Review, Tool development (etc... interactive 3D visualization and builder)."]]
    const text3 = [".03","Augment",["Augment", "3D Plugin & R&D for Virtual Reality/Augmented Reality, were my tasks. Augment is a 3D application for 3D Artist.Since Artists can use different software, I had to develop and maintain plugins for various 3D software, that was done in python mostly. Plus some virtual reality apps, using HTC Vive and Hololens, that was done in Unity3D/C# and Unreal/C++."]]
    const text4 = [".04","Light-up",["Light-up Studio", "Full conception of Augmented reality instalations, Design, crafting direction, and software and software development, C++(OpenFrameWorks), most instalations were using kinect detection."]]
    const text5 = [".05","Animation",["Animation", "Yohann Mepa In Animation, Working on Animations Projects"]]
    let packs = [
        { text: text1, img: img1, elt:first},
        { text: text2, img: img2, elt:second},
        { text: text3, img: img3, elt:third},
        { text: text4, img: img4, elt:fourth},
        { text: text5, img: img5, elt:fifth},
    ];
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
<style lang="sass">
ol
    padding-top: 10%
    padding-bottom: -10%
</style>

<ol>
    {#each packs as { text, img, elt }, i}
        <li bind:this={elt}
        on:click={()=>{moveAll(elt)}} 
        on:mouseenter={()=>{scaleMenu(elt,"up")}}
        on:mouseleave={()=>{scaleMenu(elt,"down")}}
        >
        <ListElement {elt} isOut={isOut} {text} {img}/>
        </li>
    {/each}
</ol>
