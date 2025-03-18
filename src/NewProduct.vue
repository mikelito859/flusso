<template>
    <div id="flusso-product" class="hero py-[8rem] bg-cover bg-[url('/FONDO.png')]">
        <div class="hero-content text-left text-neutral-content flex-col lg:flex-row">
            <div class="md:grid md:grid-cols-[60%_40%]">
                <div class="max-w-[35rem] py-10 text-white">
                    <h1 class="mt-5 pt-5 text-6xl font-bold " style="font-style: italic;">
                        Criptos <span class="text-aqua">Disponibles</span> para comprar
                    </h1>
                    <br><br><br><br>
                    <div class="relative w-[100%] h-[600px]">
                        <img class="absolute top-0 left-0 w-full h-full z-0 mx-auto" src="/MANO.png">
                        <img class="absolute top-[6rem] right-[2rem] w-[25%] z-10" src="/TETHER.png">
                        <img class="absolute top-[11rem] right-[-0.5rem] w-[30%] z-20" src="/BNB.png">
                    </div>
                </div>
                <div class="max-w-[35rem] py-20 text-white">
                    <div class="relative mt-7">
                        <div v-for="(item, index) in paymentMethods" :key="index">
                            <div
                                class="bg-blue-200 p-4 rounded-lg backdrop-blur-md bg-white/5 px-9 pt-5 pb-10"
                                :class="{
                                    'mb-[-3em]': index === 0,
                                    'mt-[-3em] mb-[-2em]': index === 1,
                                    'mt-[-4em]': index === 2,
                                }"
                            >
                                <p class="text-center text-xl font-bold my-3 italic">
                                    {{ item.title }}
                                </p>
                                <p class="text-left" v-html="item.description"></p>
                            </div>
                            <div class="relative h-44" v-if="index < paymentMethods.length - 1">
                                <img
                                    :class="{
                                    'absolute top-0 right-10 w-[25%] mt-2 z-10': index % 2 === 0,
                                    'absolute top-0 left-10 w-[25%] mt-2 z-10 scale-x-[-1]':
                                        index % 2 !== 0,
                                    }"
                                    src="/ARROW.png"
                                    alt="Flecha"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMethods: [
        {
          title: "Elige el metodo de pago",
          description:
            "Paga con tarjeta o transferencia SEPA. <br><br>Recuerda que si pagas con &laquo;Transferencia PSD2&raquo;, pagas menos comisiones.",
        },
        {
          title: "Comprueba los datos",
          description:
            "Verifica que los datos de pago coinciden con la persona que ha hecho el KYC (la identificación). No aceptamos pagos en nombre de terceros.",
        },
        {
          title: "Indicanos tu Wallet",
          description:
            "Una vez que hemos comprobado que el pago es corre3cto, deberas indicarnos tu wallet cripto. Recuerda que la wallet debe ser compatible con el criptoactivo adquirido.",
        },
        // Puedes agregar más métodos de pago aquí
      ],
    };
  },
};
</script>