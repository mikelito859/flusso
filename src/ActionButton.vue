<template>
    <button
            @click="goToSection"
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
        Comenzar ahora
    </button>
</template>
<script>
export default {
    name: 'ActionButton',
    methods: {
        goToSection() {
            this.$root.goTo('top');
        }
    }
}
</script>