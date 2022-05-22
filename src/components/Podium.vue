<!-- Copyright (c) 2022 Shatrujit Kumar, All Rights Reserved -->

<!--
<j-podium score="100"> Player Name </j-podium>
-->
<template>

    <section>
        <!-- Displays player's score in a box, in white if positive and red if negative -->
        <div class="score" :class="{'red-text': score < 0}">{{ formatScore(score) }}</div>
        <br/>
        <span class="name">
            <slot></slot>
        </span>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    
    class PodiumController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.props = {
                score: Number
            }
        }
        formatScore(score) {
            // Regex adds a comma after every three digits, reading right-to-left (Doesn't work with floating point values)
            return ( score < 0 ? "-" : "" ) + "$" + Math.abs(score).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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