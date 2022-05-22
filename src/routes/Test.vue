<!-- Copyright (c) 2022 Shatrujit Kumar, All Rights Reserved -->
<template>

    <section class="test-container">
        <div class="test">
            <div class="card-container">
                <h1 class="title">Testing score tracking and Podium</h1>
                <!-- Score tracker generates question scores based on the round,
                number of questions, and increment between questions -->
                <j-score-tracker :round="1" :questions="5" :scoreIncrement="200"/>
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import jScoreTracker from '@/components/ScoreTracker.vue'

    class TestController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
        }
    }

    export default new TestController('pgTest', { jScoreTracker });

</script>
<style scoped>
/* Local styles for this template */
    .test-container {
        display: inline-block;
        width: 100%;
        background: black;
    }

    /* Tried to keep colors consistent with Jeopardy */
    .test {
        margin:2vw;
        border: 1px solid black;
        background-color: #060CE9;
        color: black;
        height: 78vh;
        width: 80vw;
        display: flex;
        text-align: center;
        align-items: center;
    }

    .card-container {
        display: inline-block;
        flex-grow: 1;
    }

    .title {
        text-shadow: 2px 2px #9C8E57;
        color: #FFCC00;
    }
</style>
