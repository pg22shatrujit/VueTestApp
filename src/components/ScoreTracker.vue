<!-- Copyright (c) 2022 Shatrujit Kumar, All Rights Reserved -->

<!--
<j-score-tracker :round="1" :questions="5" :scoreIncrement="200"/>
-->

<template>

    <section>
        <div v-if="!ready">
            <!-- Prompt player to enter their name and hit ready -->
            <form>
                <input type="text" placeholder="Enter your name" v-model="name" :class="inputClass"/>
                <br/>
                <button type="submit" @click="isReady()"> Ready? </button>
            </form>
        </div>
        <div v-if="ready">
            <!-- Generate range of possible scores based on component properties -->
            <div v-for="index in questions" :key="index" @click="setScoreValue(index, scoreIncrement * round)" class="score-value" :class="{ selected : index == scoreValueIndex }">
                ${{ addCommas(index * scoreIncrement * round) }}
            </div>
            <br/>

            <!-- Buttons to verify score addition/subtraction -->
            <button @click="updateScore()"> Got it Right </button>
            <button @click="updateScore(false)"> Got it Wrong </button>
        </div>
        <!-- Podium displays name and current score -->
        <j-podium v-if="ready" :score="score">{{ name }}</j-podium>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import jPodium from '@/components/Podium.vue'

    class ScoreTrackerController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )

            this.props = {
                round: Number,
                questions: Number,
                scoreIncrement: Number
            }
            
            this.vm = {
                name: null,
                score: 0,
                ready: false,
                inputClass: null,
                scoreValue: 0,
                scoreValueIndex: -1
            }
        }
        isReady() {
            // If a name's been given, flip this.ready
            if(this.name) {
                this.ready = !this.ready;
                return;
            }

            // Otherwise highlight the input with a red border
            this.inputClass = "border-red"
        }

        // Update player's score and reset scoreValueIndex
        updateScore(increase = true) {
            this.scoreValueIndex = -1;

            if(increase)
                this.score += this.scoreValue;
            else
                this.score -= this.scoreValue;
        }

        // Sets score value when the user selects on of the score options
        setScoreValue(index, scoreValue) {
            this.scoreValueIndex = index;
            this.scoreValue = index * scoreValue;
        }
        addCommas(score) {
            // Regex adds a comma after every three digits, reading right-to-left (Doesn't work with floating point values)
            return score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

    }

    export default new ScoreTrackerController('jScoreTracker', {jPodium});

</script>
<style scoped>

/* Red border to highlight input if the user doesn't enter a name */
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

/* Border added on selecting a score option */
.selected {
    border: 2px solid #FFCC00;
}

</style>