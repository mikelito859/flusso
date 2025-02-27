<template>
    <a @click="goToSection">
        {{section.title}}
    </a>
</template>
<script>
export default {
    name: 'MenuSectionComponent',
    props: {
        section: {}
    },
    methods: {
        goToSection() {
            this.$root.goTo(this.section.id);
        }
    }
}
</script>