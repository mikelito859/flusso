<template>
    <div id="app" class="bg-white h-screen">
        <Layout>
            <HeroSection/>
            <NewProduct/>
            <NewReview/>
            <NewWhy/>
        </Layout>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<script>
import Layout from "./components/Layout.vue";
import HeroSection from "./HeroSection.vue";
import NewProduct from "./NewProduct.vue";
import NewReview from "./NewReview.vue";
import NewWhy from "./NewWhy.vue";
import Steps from "./Steps.vue";
import Register from "./Register.vue";
import Advantages from "./Advantages.vue";
import ShowContent from "./ShowContent.vue";

export default {
    name: "App",
    components: {
        ShowContent,
        Layout, Advantages, Steps, HeroSection, Register, NewProduct, NewReview, NewWhy
    },
    methods: {
        goTo(id) {
            let el = document.getElementById(id);
            el.scrollIntoView({behavior: "smooth"});
        },
        openWhatsapp() {
            let text = "Hola Eco Home, me gustaría recibir más información de:";
            text = encodeURI(text + " ");
            let phone = '3400000000'
            let url = "https://api.whatsapp.com/send";
            url += "?phone=" + phone + "&text=" + text;
            let link = document.createElement('a');
            link.href = url;
            // if (this.$page.props.isPc) {
            link.setAttribute('target', '_blank');
            // }
            document.body.appendChild(link);
            link.click();
        }
    }
}
</script>