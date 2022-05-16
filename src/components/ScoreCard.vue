<!--
<j-score-card name="Player Name" score="100" />

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section>
        <div class="score">{{ score }}</div>
        <slot class="name"></slot>
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
        }
    }

    export default new ScoreCardController('jScoreCard');

</script>
<style scoped>
</style>