<!--
<j-player-details />

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section>
        <div v-if="!ready">
            <form>
                <input type="text" placeholder="Enter your name" v-model="name" :class="inputClass"/>
                <br/>
                <button type="submit" @click="isReady()"> Ready? </button>
            </form>
        </div>
        <div v-if="ready">
            <div v-for="(score, index) in scoreValues" :key="index" @click="setScoreValue(index)" class="score-value" :class="{ selected : index == scoreValueIndex }">
                ${{ addCommas(score) }}
            </div>
            <br/>
            <button @click="increaseScore()"> Got it Right </button>
            <button @click="decreaseScore()"> Got it Wrong </button>
        </div>
        <j-score-card v-if="ready" :score="score">{{ name }}</j-score-card>
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
                ready: false,
                inputClass: null,
                scoreValues: [ 200, 400, 600, 800, 1000],
                scoreValueIndex: -1
            }
        }
        isReady() {
            if(this.name) {
                this.ready = !this.ready;
                return;
            }

            this.inputClass = "border-red"

        }
        increaseScore( ) {
            if(this.isValidScoreIndex()) this.score += this.scoreValues[this.scoreValueIndex];
            this.scoreValueIndex = -1;
        }
        decreaseScore( ) {
            if(this.isValidScoreIndex()) this.score -= this.scoreValues[this.scoreValueIndex];
            this.scoreValueIndex = -1;
        }
        setScoreValue(index) {
            this.scoreValueIndex = index;
        }
        isValidScoreIndex() {
            return this.scoreValueIndex >= 0 && this.scoreValueIndex < this.scoreValues.length;
        }
        addCommas(score) {
            // Regex adds a comma after every three digits, reading right-to-left (Doesn't work with floating point values)
            return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

    }

    export default new PlayerDetailsController('jPlayerDetails', {jScoreCard});

</script>
<style scoped>
.border-red {
    border: 2px solid red;
}
input {
    background-color: #FFCC00;
    color: #060CE9;
}
button {
    margin: 1vh 1vw;
    background-color: #FFCC00;
    color: #060CE9;
}
button:hover {
    background-color: #DAB520;
}
.score-value {
    display: inline-block;
    margin: 0 1vw;
    padding: 1vh;
    color: #FFCC00;
    font-size: 2em;
    border: 2px solid transparent;
    border-radius: 4px;
}
.selected {
    border: 2px solid #FFCC00;
}
</style>