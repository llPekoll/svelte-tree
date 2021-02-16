<script>
    export let elt;
</script>
<style lang="sass">
.tittle
    color: lightgrey
    font-size: 30px
    font-weight: 100
</style>

{#if elt}
    <div class="text-center">
    {@html elt[3]}
    </div>
    <div class="tittle">
    {elt[1]}
    </div>
    <br/>
    {elt[2]}
{/if}