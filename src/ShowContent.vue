<template>
    <div id="crypto" class="container mx-auto max-w-4xl px-1 py-20">
        <div class="card lg:card-side bg-neutral-focus shadow-xl text-white">
            <figure class="min-w-[40%]">
                <img class="min-h-16"
                     src="/old-man-who-buyed-crypto.webp"
                alt="Compra de criptomonedas"
                />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-accent text-4xl">Compra Criptomonedas de Forma Fácil y Segura</h2>
                <p>¿Listo para entrar en el mundo de las criptomonedas? En Flusso, hacemos que la compra de criptomonedas con fiat en Europa sea rápida y segura. Con múltiples opciones de pago y un equipo especializado, convertir tus euros en Bitcoin y Ethereum es más fácil que nunca. ¡Únete a nosotros y comienza tu aventura cripto hoy mismo!</p>
                <div class="card-actions justify-end pb-4 pr-4">
                    <ActionButton/>
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