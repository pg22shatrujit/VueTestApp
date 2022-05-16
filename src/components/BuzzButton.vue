<!--
<buzz-button title="My Component" />

@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section class="button-container">  <!-- Just one main element per template -->
        <div class="button"></div>
        <div class="button-title">{{ title }}</div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    // import other components you use here...

    class BuzzButtonController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )

            // props passed in when using this component
            this.props = {
                title: String
            }
        }
    }

    export default new BuzzButtonController('buzzButton');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .button-container {
        display: flex;
        flex-direction:column;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:center;
    }

    .button {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
        height: 64px;
        width: 64px;
        background: url("@/assets/Button-Red.svg");
        background-size: cover;
    }

    .button-title {
        font-size:1em;
        font-weight: bold;
        text-shadow: black 2px 2px;
        color: #fff;
        text-align: center;
        margin:0;
        padding: 0;
    }

</style>