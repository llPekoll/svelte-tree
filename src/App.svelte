<script>
    import { onMount } from 'svelte';
    import { createScene } from "./scene";
    import Ol from './Ol.svelte'
    import Description from './Description.svelte'
    import {gsap} from 'gsap';
    import Icon from 'svelte-awesome';
    import { timesCircle,githubAlt,linkedin,twitter } from 'svelte-awesome/icons';

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
        resetMenu = false;
        }
    }
    function closeDesc(){
        resetMenu = true;
    }
</script>

<style lang="sass">
$small: 500px
$medium: 700px
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

.header
    position: absolute 
    left: 0 
    top: 0 
    height: 70px
    width: 100%
    background-color: rgba(0,0,0,0.7)
.footer
    text-align: center
    padding-top: 10px
    padding-bottom: 10px
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
    position: absolute
    left: 15%
    top: 26%
.desc
    position: absolute
    top: 176px
    left: 400px
    opacity: 0
    background-color: rgba(125,125 ,125 ,0.7 )
    padding: 20px
    width: 640px
.icon
    float: right
.socials
    margin-right: 5%
    display: inline
a
    color: grey

@media screen and (max-width: $small) 
    a
        color: green

@media screen and (max-width: $medium) 
    a
        color: green


</style>

<section>
  <div class="header">
</div>
  <div bind:this={title} class="title">
      {@html title_content}
  </div>
<div class="projects">
<Ol on:message={handleMessage} {resetMenu}/>
{#if !resetMenu}
<div class="desc" bind:this={desc}>
    <div class="icon" on:click={closeDesc}>
        <Icon data={timesCircle} scale="2"/>
        </div>
        <Description  {elt} />
    </div>
{/if }
</div>
<div class="footer">
    <div class="socials">
    <a href="https://github.com/llPekoll/">
        <Icon data={githubAlt} scale="2"/>
    </a>
    </div>
    <div class="socials">
    <a href="https://www.linkedin.com/in/yohann-mepa-69015073/">
    <Icon data={linkedin} scale="2"/>
    </a>
    </div>
    <div class="socials">
    <a href="https://twitter.com/llpekoll/">
    <Icon data={twitter} scale="2"/>
    </a>
    </div>
    
</div>
</section>
<canvas bind:this={el}></canvas>