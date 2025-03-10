<template>
    <div id="flusso-why" class="hero py-[8rem] bg-cover bg-[url('/FONDO.png')]">
        <div class="hero-content text-left text-neutral-content flex-col lg:flex-row">
            <div class="flex flex-col">
                <div class="md:grid md:grid-cols-1">
                    <div class="max-full py-10 text-white text-center">
                        <h1 class="text-center text-6xl font-bold " style="font-style: italic;">
                            ¿Por qué <span class="text-aqua">Flusso</span>?
                        </h1>
                    </div>
                </div>
                <div class="md:grid md:grid-cols-4 grid-cols-1 justify-items-center pt-14 gap-6">
                    <div v-for="(card, index) in cards" :key="index" class="text-card mx-auto w-full mb-8">
                        <div class="image-container">
                            <img :src="card.image" alt="Imagen">
                        </div>
                        <div class="text-content mt-[8rem] text-center">
                            <p>{{ card.text }}</p>
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
      cards: [
        {
          image: "/ICONO 1.png",
          text: "Centrados y especializados en la comunidad hispanohablante de la Unión Europea, somos un servicio registrado y autorizado ubicado en Europa.",
        },
        {
          image: "/ICONO 2.png",
          text: "Utilizamos medios de pago totalmente seguros para que puedas realizar tu compra de criptomoneda con total tranquilidad.",
        },
        {
          image: "/ICONO 3.png",
          text: "Puedes comprar critpmoneda desde cualquier país de la Unión Europea cuya legislación te protege en las transacciones de pago y en la compra de las criptomonedas.",
        },
        {
          image: "/ICONO 4.png",
          text: "Nuestra plataforma y tecnología se han desarrollado 100% en territorio europeo, protegiendo tus transacciones, los datos personales y respetando las políticas de privacidad.",
        },
      ],
    };
  },
};
</script>