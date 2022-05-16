<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="test-container">
        <div class="test">
            <h1 class="title">Testing score card</h1>
            <div>
                <j-player-details />
            </div>
        </div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'
    import jPlayerDetails from '@/components/PlayerDetails.vue'

    class TestController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'VFS Vue Template',
            }
        }
    }

    export default new TestController('pgTest', {jPlayerDetails});

</script>
<style>
/* Local styles for this template */
    .test-container {
        display: inline-block;
        width: 100%;
    }

    .test {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
    }
</style>
