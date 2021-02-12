<script>
    import { onMount } from 'svelte';
    import { createScene } from "./scene";
    import Ol from './Ol.svelte'

    const title_content = "|<br/>|Mepa <br/> |Yohann";
    let title;

    let el;
    onMount(() => {
        createScene(el)
    });


</script>

<style lang="sass">
.title
    font-family: 'Roboto'
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
    font-family: 'Roboto'
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
</style>



<section>
  <div bind:this={title} class="title">
      {@html title_content}
  </div>
  <div class="header">
</div>
<div class="projects">
<Ol />
</div>
<div class="footer">
Mepa Yohann all right reserved
</div>
</section>
<canvas bind:this={el}></canvas>