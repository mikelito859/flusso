<template>
    <div id="advantages" class="py-[8rem] px-2 bg-cover bg-[url('/FONDO.png')]">
        <h2 class="text-white mt-5 text-left pt-5 font-bold text-center px-3 mx-auto" :class="{
            'text-5xl md:text-6xl': true,
            'py-10 md:py-20': true,
            'mt-10 md:mt-20': true,
            'max-w-xl md:max-w-3xl': true
        }" style="font-style: italic;">¿Ventajas de elegir <span class="text-aqua">Flusso</span> para la compra de criptomonedas?</h2>
        <div class="flex flex-wrap justify-center items-center sm:py-10">
            <div class="max-w-4xl container mx-auto sm:px-4"> <div v-for="advantage in advantages" tabindex="0" class="collapse group text-xl mb-2">
                    <div class="collapse-title bg-aqua text-primary-content group-focus:bg-aqua group-focus:backdrop-blur-md">
                        {{ advantage.title }}
                    </div>
                    <div class="collapse-content bg-primary text-primary-content group-focus:bg-white group-focus:text-secondary-content">
                        <p class="m-5">
                            {{ advantage.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextH2 from "./TextH2.vue";

export default {
    name: 'Advantages',
    components: {TextH2},
    data() {
        return {
            advantages: [
                {
                    "title": "Facilidad de uso",
                    "text": "Con Flusso, comprar criptomonedas es un proceso intuitivo y sencillo, adecuado tanto para principiantes como para usuarios avanzados en la inversión en criptomonedas."
                },
                {
                    "title": "Seguridad",
                    "text": "Nuestra plataforma incorpora medidas de seguridad avanzadas, incluyendo el proceso KYC, para garantizar que tus transacciones sean seguras y privadas."
                },
                {
                    "title": "Variedad de métodos de pago",
                    "text": "Ofrecemos múltiples opciones de pago, incluyendo PSD2, tarjetas de crédito/débito y transferencias bancarias, para facilitar tu experiencia de compra."
                },
                {
                    "title": "Atención al cliente en español",
                    "text": "Disponemos de un servicio de soporte al cliente en español dedicado a ayudarte con cualquier duda o consulta que puedas tener durante el proceso de compra."
                },
                {
                    "title": "Transacciones rápidas",
                    "text": "Proceso eficiente que permite convertir tus fondos de fiat a criptomonedas en cuestión de minutos, minimizando el tiempo de espera."
                },
                {
                    "title": "Soporte local en Europa",
                    "text": "Al estar orientados al mercado europeo, optimizamos nuestras operaciones para cumplir con las normativas locales y ofrecerte el mejor servicio posible."
                }
            ]
        }
    }
}
</script>