<template>
    <div id="flusso-benefits" class="py-[8rem] hero bg-cover bg-[url('/FONDO.png')]">
        <div id="crypto" class="container mx-auto max-w-6xl px-1 py-20">
            <h2 class=" text-white mt-5 text-left pt-5 text-6xl font-bold text-center py-20 mt-20 px-3 max-w-3xl mx-auto" style="font-style: italic;">Compra Criptomonedas de Forma <span class="text-aqua">Fácil y Segura</span></h2>
            <div class="card lg:card-side bg-neutral-focus shadow-xl text-white backdrop-blur-md bg-white/5">
                <figure class="min-w-[40%]">
                    <img class="min-h-16"
                        src="/old-man-who-buyed-crypto.webp"
                    alt="Compra de criptomonedas"
                    />
                </figure>
                <div class="card-body">
                    <p class="pt-6 text-left">¿Sientes la curiosidad de explorar el emocionante mundo de las criptomonedas? En Flusso, te abrimos las puertas a este universo digital, haciendo que la compra de criptomonedas con tus euros sea un proceso fluido, rápido y, sobre todo, seguro. Olvídate de las complicaciones y los procesos tediosos.<br><br>Entendemos que la seguridad es tu principal preocupación, por eso hemos implementado protocolos de vanguardia para proteger tus transacciones y tu información personal. Con Flusso, puedes tener la tranquilidad de que tus inversiones están en buenas manos.</p>
                    <div class="card-actions justify-end pb-4 pr-4">
                        <ActionButton/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ActionButton from "./ActionButton.vue";

export default {
    name: 'ShowContent',
    components: {ActionButton}
}
</script>