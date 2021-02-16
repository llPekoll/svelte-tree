<script>
    export let elt;
</script>

<style lang="sass">
.tittle
    color: lightgrey
    font-size: 30px
    font-weight: 100
</style>

<section>
    {#if elt}
        <div class="tittle">
        {elt[1]}
        </div>
        <div class="text-center">
        {@html elt[3]}
        </div>
        <br/>
        {elt[2]}
    {/if}
</section>