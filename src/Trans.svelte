<script>
    export let text;
    export let show;
    console.log(show)
    console.log(typeof show)

    function swipe(node){
        return{
            duration: 800,
            css(t){
                let color = window.getComputedStyle(node).color;
                if(t < 0.5){
                    const percentage = 200 * t
                    return `width:100px; height:100px; background: linear-gradient(to right, ${color} 0,${percentage}%, transparent ${percentage}%); color: transparent`
                }else{
                    const u =t -0.5;
                    const percentage = 200 * u
                    return `width:100px; height:100px; background: linear-gradient(to right, transparent 0,${percentage}%, ${color} ${percentage}%); color: ${color}`

                }
            }
        }
 }
</script>

{#if show}
	<div>
		<span class="header" transition:swipe>{@html text[0]}</span>
	</div>
	<div>
		<span class="text" transition:swipe>{@html text[1]}</span>
	</div>
{/if}


<style>
	span {
		font-size: 20px;
	}
	.header {
		color: #ff3e00;
	}
	.text {
		color: #1f5389;
	}
</style>