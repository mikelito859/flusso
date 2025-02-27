<template>
    <div id="crypto-purchase-steps">
        <TextH2 text="¿Cómo comprar criptomonedas con Flusso?" />
        <div class="text-center text-xl">
            {{title1}}
        </div>
        <div class="container mx-auto max-w-4xl py-20 md:grid md:grid-cols-2 md:gap-4 px-2">
            <ul class="steps steps-vertical">
                <li
                    @click="selected = step"
                    v-for="(step, index) in steps"
                    :class="{'step-primary text-primary': selected == step}"
                    class="step cursor-pointer text-xl">
                    {{step.title}}
                    <div
                        class="block md:hidden w-full bg-primary"
                        v-show="step == selected"></div>
                    <div v-show="step == selected" class="text-left text-black block md:hidden">
                        {{selected.description}}
                    </div>
                </li>
            </ul>
            <div class="my-auto hidden md:block">
                <h2 class="text-3xl font-bold mb-5 text-primary">{{selected.title}}</h2>
                <p class="text-xl ">{{selected.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import TextH2 from "./TextH2.vue";

export default {
    name: 'CryptoPurchaseSteps',
    components: {TextH2},
    data() {
        return {
            title1: 'Sigue estos pasos para convertir tu moneda fiat a criptomonedas:',
            selected: {},
            steps: [{
                title: 'Selecciona el monto y par de monedas',
                description: 'Elige la cantidad y el par de monedas que deseas intercambiar a través de nuestro sencillo formulario integrado en la página.',
            }, {
                title: 'Completa tus datos personales',
                description: 'Para procesar la transacción, proporciona tus datos personales siguiendo nuestras directrices de privacidad y seguridad.',
            }, {
                title: 'Completa el KYC (Conoce a tu Cliente)',
                description: 'Sigue el proceso de verificación para garantizar la seguridad de tu transacción. Esto incluye la subida de los documentos necesarios.',
            }, {
                title: 'Indica tu cartera (wallet) de criptomonedas',
                description: 'Proporciona la dirección de la cartera a donde deseas recibir tus criptomonedas adquiridas.',
            }, {
                title: 'Selecciona y completa tu forma de pago',
                description: 'Elige entre las múltiples opciones de pago disponibles, incluyendo tarjetas de crédito/débito y transferencias bancarias.',
            }]
        }
    },
    mounted() {
        this.selected = this.steps[0];
    }
}
</script>