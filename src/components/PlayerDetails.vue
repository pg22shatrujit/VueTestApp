<!--
<j-player-details />

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section>  <!-- Just one main element per template -->
        <div v-if="!ready">
            <input type="text" placeholder="name" v-model="name"/>
            <button @click="isReady()"> Ready? </button>
        </div>
        <div v-if="ready">
            <input type="number" placeholder="Bet Value" v-model.number="addScore"/>
            <button @click="increaseScore()"> Got it Right </button>
            <button @click="decreaseScore()"> Got it Wrong </button>
        </div>
        <j-score-card v-if="ready" :score="score"> {{ name }}</j-score-card>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import jScoreCard from '@/components/ScoreCard.vue'

    // import other components you use here...

    class PlayerDetailsController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )

            // the vm date does not exist until the component is created
            this.vm = {
                name: null,
                score: 0,
                addScore: null,
                ready: false
            }
        }
        isReady() {
            this.ready = !this.ready;
        }
        increaseScore( ) {
            this.score += this.addScore;
            this.addScore = null;
        }
        decreaseScore( ) {
            this.score -= this.addScore;
            this.addScore = null;
        }
    }

    export default new PlayerDetailsController('jPlayerDetails', {jScoreCard});

</script>
<style scoped>
</style>