<!--
<j-nickname> My Component </j-nickname>
@copyright (c) 2019. Scott Henshaw. All Rights Reserved.
-->
<template>

    <section>
        <span class="field">
            <slot/>
        </span>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    class NicknameController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )

            this.vm = {
                // name: "Hello world"
            }

            // props passed in when using this component
            this.props = {
                //name: String
            }
        }
    }

    export default new NicknameController('jNickname');

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .field {
        font-size: 1.5rem;
        font-weight: bold;
        color: blue;
    }
    
    .component-style {
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:flex-start;
    }

</style>