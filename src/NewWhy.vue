<template>
    <div id="flusso-why" class="hero bg-cover bg-[url('/FONDO.png')]">
        <div class="hero-content text-left text-neutral-content flex-col lg:flex-row">
            <div class="flex flex-col">
                <div class="md:grid md:grid-cols-1">
                    <div class="max-full py-10 text-white text-center">
                        <h1 class="mt-5 text-center pt-5 text-6xl font-bold " style="font-style: italic;">
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
                <div class="md:grid md:grid-cols-1">
                    <div class="max-full pt-10 text-white text-center">
                        <h1 class="text-4xl font-bold " style="font-style: italic;">
                            Utilizamos métodos de <span class="text-aqua">pago seguros</span>
                        </h1>
                    </div>
                </div>
                <div class="md:grid md:grid-cols-[37%_25%_37%] pt-5">
                    <div></div>
                    <div class="bg-white rounded-lg p-2 flex justify-center items-center">
                        <img src="/LOGO 1.png" alt="Imagen 1" class="h-10 mx-2">
                        <img src="/LOGO 2.png" alt="Imagen 2" class="h-10 mx-2">
                        <img src="/LOGO 3.png" alt="Imagen 3" class="h-10 mx-2">
                    </div>
                    <div></div>
                </div>
                <div class="flex justify-between items-center w-full mx-auto py-5">
                    <div class="flex items-center text-white">
                        <img src="/KRAJOWA.png" alt="Logo" class="max-h-20 mr-5">
                        <div>
                            <p class="text-sm">Flusso es una entidad registrada</p>
                            <p class="text-xs">Número de certificado: 2401-CKRDST.4225.382.2024</p>
                            <p class="text-xs">Número de registro: RDWW-1317</p>
                        </div>
                    </div>
                    <div class="text-white flex flex-col items-end">
                        <div class="flex items-center mb-2">
                            <img src="/FACEBOOK.png" alt="Facebook" class="w-8 mx-0">
                            <img src="/INSTAGRAM.png" alt="Instagram" class="w-8 mx-1">
                            <img src="/YOUTUBE.png" alt="YouTube" class="w-8 mx-0">
                        </div>
                        <div class="flex">
                            <a href="#" class="text-lg mx-2">Términos y Condiciones</a>
                            <a href="#" class="text-lg mx-2">Licencia de Operaciones</a>
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