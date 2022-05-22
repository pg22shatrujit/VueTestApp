<!-- Copyright (c) 2022 Shatrujit Kumar, All Rights Reserved -->

<!--
<j-podium score="100"> Player Name </j-podium>
-->
<template>

    <section>
        <div class="score" :class="{'red-text': isNegative}">{{ formatScore(score) }}</div>
        <!-- <br/>
        <span class="name">
            <slot></slot>
        </span> -->
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class PodiumController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.props = {
                score: Number
            }
            this.vm = {
                isNegative: false
            }
        }
        formatScore(score) {
            this.isNegative = false;
            if(score < 0) 
                this.isNegative = true;

            // Regex adds a comma after every three digits, reading right-to-left (Doesn't work with floating point values)
            return ( this.isNegative ? "-" : "" ) + "$" + Math.abs(score).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    export default new PodiumController('jPodium');

</script>
<style scoped>
.score {
    display: inline-block;
    width: 10vw;
    padding: 1vh;
    color: white;
    font-size: 2em;
    border: 2px solid black;
}
.red-text {
    color: red;
}
.name {
    color: white;
    font-size: 1.5em;
}
</style>