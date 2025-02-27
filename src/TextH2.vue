<template>
    <div class="text-center py-10 mt-20 px-3 max-w-3xl mx-auto">
        <h2 class="text-5xl text-primary">
            {{ text }}
        </h2>
    </div>
</template>
<script>
export default {
    name: 'TextH2',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>