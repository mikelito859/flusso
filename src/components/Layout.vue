<template>
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full navbar bg-white shadow">
                <div class="container mx-auto max-w-5xl">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2">
                        <div class="flex">
                            <img
                              class="logo"
                              src="/logo-flusso.svg"/>
                            <p class="my-auto text-2xl ml-3 font-bold ">
                                Flusso
                            </p>
                        </div>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            <!-- Navbar menu content here -->
                            <li v-for="section in sections">
                                <MenuSectionComponent :section="section"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <slot></slot>
            <FooterComponent/>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" class="drawer-overlay"></label>

            <ul class="menu p-4 w-80 bg-base-100 text-xl">
                <div class="text-center mb-4">
                    <div class="flex">
                        <img
                            class="logo"
                            src="/logo-flusso.svg"/>
                        <p class="my-auto text-2xl ml-3 font-bold">
                            Flusso
                        </p>
                    </div>
                </div>
                <li v-for="section in sections">
                    <MenuSectionComponent :section="section"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import FooterComponent from "./FooterComponent.vue";
import MenuSectionComponent from "./MenuSectionComponent.vue";

export default {
    name: "Layout",
    components: {MenuSectionComponent, FooterComponent},
    data() {
        return {
            sections: [{
                title: 'Por que Flusso?',
                id: 'flusso-benefits'
            },  {
                title: 'Pasos para comprar',
                id: 'crypto-purchase-steps'

            }, {
                title: 'Ventajas',
                id: 'advantages'

            }, {
                title: 'Contacto',
                id: 'contact'

            }, ]
        }
    }
}
</script>

<style scoped>
    .logo {
        max-height: 40px;
    }
</style>