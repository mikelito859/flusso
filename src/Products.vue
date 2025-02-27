<template>
    <div id="flusso-benefits">
        <TextH2
            text="¿Por qué elegir Flusso para la compra de criptomonedas?"/>
        <div class="flex flex-wrap justify-center items-center">
            <div
                v-for="benefit in benefits"
                class="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <img
                    :src="benefit.img_url"
                    class="w-full"
                    alt="Benefit image">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        {{ benefit.title }}
                    </div>
                    <p class="text-gray-700 text-base">
                        {{ benefit.description }}
                    </p>
                </div>
                <div class="card-actions justify-end pb-4 pr-4">
                    <ActionButton/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextH2 from "./TextH2.vue";
import ActionButton from "./ActionButton.vue";

export default {
    name: 'FlussoBenefits',
    components: { ActionButton, TextH2 },
    data() {
        return {
            benefits: [{
                title: 'Transacciones Seguras',
                description: 'Con Flusso, disfruta de transacciones seguras respaldadas por estándares de seguridad avanzada, ofreciendo protección para tus fondos en todo momento.',
                img_url: '/feature-1.webp',
            },{
                title: 'Fácil Acceso a Criptomonedas',
                description: 'Realiza compras de criptomonedas de manera rápida y sencilla con nuestras múltiples opciones de pago, incluyendo tarjetas de crédito y transferencias bancarias.',
                img_url: '/feature-2.webp',
            },{
                title: 'Soporte a la Población Hispana',
                description: 'Nuestro equipo de atención al cliente está preparado para ofrecer soporte en español, brindando asesoramiento especializado para la comunidad hispanohablante en Europa.',
                img_url: '/feature-3.webp',
            }]
        }
    }
}
</script>