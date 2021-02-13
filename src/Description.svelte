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
    {@html elt[3]}
    <br/>
    <div class="tittle">
    {elt[1]}
    </div>
    <br/>
    {elt[2]}
{/if}