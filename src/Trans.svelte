<script>
    export let text;
    export let show;

    function swipe(node){
        return{
            duration: 800,
            css(t){
                let color = window.getComputedStyle(node).color;
                if(t < 0.5){
                    const percentage = 200 * t
                    return `background: linear-gradient(to right, ${color} 0,${percentage}%, transparent ${percentage}%); color: transparent`
                }else{
                    const u =t -0.5;
                    const percentage = 200 * u
                    return `background: linear-gradient(to right, transparent 0,${percentage}%, ${color} ${percentage}%); color: ${color}`
                }
            }
        }
 }
</script>

{#if show}
    <div class="header-div">
        <p class="header" transition:swipe>{@html text[0]}</p>
    </div>
    <div class="text-div">
        <p class="text" transition:swipe>{@html text[1]}</p>
    </div>
{/if}

<style lang="sass">
    .header 
        color: #ff3e00
        height: 10px
        margin: 0
    .text 
        color: #1f5389
        font-size: 10px
        line-height: .8
    .header-div 
        color: #ff3e00
        width: 30%
    .text-div 
        color: #1f5389
        width: 100%
        text-align: justify
</style>