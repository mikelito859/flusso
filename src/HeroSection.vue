<template>
    <div class="hero bg-cover bg-[url('/FONDO.png')]" id="top">
        <div class="hero-content text-left text-neutral-content flex-col lg:flex-row">
            <div class="md:grid md:grid-cols-[65%_35%]">
                <div class="max-w-[35rem] py-20 text-white">
                    <h1 class="mt-5 pt-5 text-7xl font-bold " style="font-style: italic;">
                    Compra y Vende <span class="text-aqua">Criptos</span> en solo minutos
                    </h1>
                    <img class="mx-auto max-w-[20rem]" src="/BITCOIN.png">
                </div>
                <div class="max-w-[30rem] py-20 text-white">
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

186340

185932