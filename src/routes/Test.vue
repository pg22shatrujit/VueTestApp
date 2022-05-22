<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="test-container">
        <div class="test">
            <div class="card-container">
                <h1 class="title">Testing score card</h1>
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
<style scoped>
/* Local styles for this template */
    .test-container {
        display: inline-block;
        width: 100%;
        background: black;
    }

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
