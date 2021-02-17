<script>
    export let text
    export let img
</script>
<style lang="sass">
.box
    height: 55px
    width: 120px
    margin-right: 10px
    float: left
.numbers
    font-weight: 900
    color: darkgreen
    display: inline
    font-size: 37px
.subjects
    display: inline
    margin-left: -27px
    color: lightgray
</style>
<div class="box" style="background-image: url('{img}');background-size: cover;">
</div>
<div class="tittle">
    <br />
    <div class="numbers">{text[0]}</div>
    <div class="subjects">{text[1]}</div>
</div>

