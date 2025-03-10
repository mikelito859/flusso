<template>
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-cover bg-[url('/FONDO.png')] sticky top-0 z-50">
            <div class="container mx-auto max-w-5xl text-white">
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div class="flex-0 px-2 mx-2">
                    <div class="flex">
                        <img class="logo" src="/LOGO.png"/>
                    </div>
                </div>
                <div class="flex-none hidden lg:block">
                    <ul class="menu menu-horizontal flex justify-between items-center w-full">
                        <div class="flex items-center">
                            <li v-for="section in sections" class="mx-2">
                                <MenuSectionComponent :section="section"/>
                            </li>
                        </div>
                    </ul>
                </div>
                <div class="flex-none hidden lg:block ml-auto"> 
                    <ul class="menu menu-horizontal flex justify-between items-center w-full">
                        <div class="flex items-center hidden">
                            <li><a href="#">Inicia Sesión</a></li>
                            <li><a href="#" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-4">Regístrate ahora</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <slot></slot>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 bg-base-100 text-xl">
          <div class="text-center mb-4">
            <div class="flex">
              <img class="logo" src="/LOGO.png"/>
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
                title: 'Inicio',
                id: 'top'
            },{
                title: 'Compra',
                id: 'flusso-benefits'
            },{
                title: '¿Como comprar?',
                id: 'crypto-purchase-steps'
            },{
                title: '¿Porque Flusso?',
                id: 'flusso-why'

            },{
                title: 'Ventajas',
                id: 'advantages'

            },{
                title: 'Transacciones OTC',
                id: 'otc'

            },{
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