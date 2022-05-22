<!--
<j-score-card name="Player Name" score="100" />

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section>
        <div class="score" :class="{'red-text': isNegative}">{{ formatScore(score) }}</div>
        <br/>
        <span class="name">
            <slot></slot>
        </span>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class ScoreCardController extends Controller {

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
            if(score < 0) {
                this.isNegative = true;
                score *= -1;
            }

            // Regex adds a comma after every three digits, reading right-to-left (Doesn't work with floating point values)
            return ( this.isNegative ? "-" : "" ) + "$" + score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    export default new ScoreCardController('jScoreCard');

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