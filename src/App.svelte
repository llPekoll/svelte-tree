<script>
    import { onMount } from 'svelte';
    import { createScene } from "./scene";
    import Ol from './Ol.svelte'
    import Description from './Description.svelte'
    import {gsap} from 'gsap';
    import Icon from 'svelte-awesome';
    import { timesCircle } from 'svelte-awesome/icons';

    const title_content = "|<br/>|Mepa <br/> |Yohann";
    let title;
    let desc;
    let el;
    let elt;
    let resetMenu = false;
    onMount(() => {
        createScene(el)
    });
	function handleMessage(event) {
        gsap.to(desc, {x: -180,y:-140, scaleX:.8, scaleY:.8, opacity: 1, duration: .6,delay:.1, ease: "expo"});
        elt = event.detail.text
        if(event.detail.close == true){
            console.log("RESFSAGDSFHS");
        resetMenu = false;

        }
	}
    function closeDesc(){
        resetMenu = true;
        console.log("restetingg");
        gsap.to(desc, {x: 180,y: 140, scaleX:1.2, scaleY:1.2, opacity: 0, duration: .3,delay:.1, ease: "expo"});
    }
</script>

<style lang="sass">
.title
    font-size: 44px
    font-weight: 100
    line-height: 0.8
    position: absolute 
    color:grey
    left: 15% 
    top: 9% 
    width: 200px 
    height: 100px 
ol
    list-style-type: none
    width: 230px
li
    height: 70px
    background-color: red
.header
    position: absolute 
    left: 0 
    top: 0 
    height: 70px
    width: 100%
    background-color: rgba(0,0,0,0.7)
.footer
    text-align: center
    padding-top: 30px
    color: lightgrey
    position: absolute 
    left: 0 
    bottom: 0 
    width: 100%
    background-color: rgba(0,0,0,0.7)
canvas
    position: relative
section
    position: absolute
    height: 100%
    width: 100%
    z-index: 1
.projects
    margin-top: 120px
    margin-left: 120px
.desc
    position: absolute
    top: 176px
    left: 400px
    opacity: 0

.icon
    float: right
</style>


<section>
  <div bind:this={title} class="title">
      {@html title_content}
  </div>
  <div class="header">
</div>
<div class="projects">
<Ol on:message={handleMessage} {resetMenu}/>
<div class="desc" bind:this={desc}>
   <div class="icon" on:click={closeDesc}>
    
      <Icon data={timesCircle} scale="2"/>
    </div>
    <Description  {elt} />
</div>
</div>
<div class="footer">
Mepa Yohann all right reserved
</div>
</section>
<canvas bind:this={el}></canvas>