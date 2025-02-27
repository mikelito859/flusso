<template>
    <button
            @click="goToSection"
            type="button"
            class="btn btn-primary text-white">
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