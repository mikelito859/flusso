<template>
    <div class="hero py-[8rem] bg-cover bg-[url('/FONDO.png')]" id="top">
        <div class="hero-content text-left text-neutral-content flex-col lg:flex-row">
            <div class="md:grid md:grid-cols-[65%_35%]">
                <div class="max-w-[35rem] py-20 text-white">
                    <h1 class="mt-5 pt-5 text-7xl font-bold " style="font-style: italic;">
                    Compra y Vende <span class="text-aqua">Criptos</span> en solo minutos
                    </h1>
                    <div class="flex items-center text-left"> <p class="mt-14 text-xl mb-5 text-xl mr-4">
                        Con Flusso, adquiere criptomonedas usando fiat, tarjetas o transferencias
                        bancarias. Únete a la revolución digital de forma sencilla y segura.
                    </p>
                    <img class="max-w-[9rem]" src="/BITCOIN.png">
                </div>
                </div>
                <div class="max-w-[35rem] py-20 text-white">
                    <iframe sandbox="allow-same-origin allow-forms allow-top-navigation allow-scripts allow-popups"
                    title="Compra y vende criptoactivos con Flusso" scrolling="no"
                    src="https://atc.flussogroup.com/widget/pay?symbol=usdt&amp;amount=100&amp;lang=es"
                    class="w-full h-[28rem] border-0 overflow-hidden md:min-w-[440px]">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
    name: 'HeroSection',
    components: {ActionButton}
}
</script>