<script>
    import Icon from 'svelte-awesome';
    import { timesCircle } from 'svelte-awesome/icons';
    import Trans from './Trans.svelte'
    export let elt;
    export let isOut
    export let text
    export let img

</script>


<style lang="sass">
.projects
    position: absolute
    left: 13%
    top: 30%
  
.box
    background-color: red
    height: 55px
    width: 120px
    margin-right: 10px
    float: left
  
.numbers
    font-weight: 900
    color: darkgreen
    display: inline
    font-size: 30px
  
.subjects
    display: inline
    margin-left: -27px
    color: lightgray
  
.icon
    width: 30px
    float: right
    margin-top: -10px
    margin-right: -10px
</style>


<div class="box" style="background-image: url('{img}');background-size: cover;">
      <div class="icon" bind:this={elt}>
      <Icon data={timesCircle} scale="2"/>
    </div>
</div>
<div class="numbers">{text[0]}</div>
<div class="subjects">{text[1]}</div>
<Trans text={text[2]} bind:show={isOut} />
