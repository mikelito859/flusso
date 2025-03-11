<template>
    <div id="flusso-review" class="py-[8rem] hero bg-cover bg-[url('/FONDO.png')]">
        <div class="hero-content text-left text-neutral-content flex-col lg:flex-row">
            <div class="flex flex-col">
                <div class="md:grid md:grid-cols-1">
                    <div class="max-full py-10 text-white text-center">
                        <h1 class="mt-5 text-center pt-5 text-6xl font-bold " style="font-style: italic;">
                            Conoce nuestra <span class="text-aqua">reseñas</span>
                        </h1>
                    </div>
                </div>
                <div class="md:grid md:grid-cols-3 pt-14">
                    <div class="w-full p-7 text-white" v-for="(review, index) in reviews" :key="index">
                        <div class="review-card">
                            <div class="review-header">
                                <div class="text-black">
                                    <strong>{{ review.name }}</strong>
                                    <p>{{ review.username }}</p>
                                </div>
                                <div class="review-time">
                                    {{ review.time }}
                                </div>
                            </div>
                            <div class="review-stars">
                                {{ review.stars }}
                            </div>
                            <p class="review-text">
                                {{ review.text }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="md:grid md:grid-cols-[30%_70%]">
                    <div class="max-full py-10 text-white hidden">
                        <h1 class="text-3xl font-bold " style="font-style: italic;">
                            Suscribete para recibir <br><span class="text-aqua">todas las novedades</span>
                        </h1>
                    </div>
                    <div class="max-full py-10 text-white hidden">
                        <div class="bg-blue-200 p-4 rounded-lg backdrop-blur-md bg-white/5 px-9 pt-5 pb-5 flex items-center">
                            <input
                            type="text"
                            placeholder="Introduce tu email"
                            class="bg-transparent border border-white rounded-md py-2 px-4 outline-none flex-grow text-white placeholder-white"
                        />
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                            Suscribete
                        </button>
                        </div>
                    </div>
                </div>
                <div class="md:grid md:grid-cols-1 mt-10">
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
                        <div class="flex items-center mb-2 invisible">
                            <img src="/FACEBOOK.png" alt="Facebook" class="w-8 mx-0">
                            <img src="/INSTAGRAM.png" alt="Instagram" class="w-8 mx-1">
                            <img src="/YOUTUBE.png" alt="YouTube" class="w-8 mx-0">
                        </div>
                        <div class="flex">
                            <a href="/Terms-and-Conditions.pdf" target="_blank" class="text-lg mx-2">Términos y Condiciones</a>
                            <a href="/VASP_license_24_05_Zasw_RDWW_FLUSSO_DYNAMICS_GROUP 4.pdf" target="_blank" class="text-lg mx-2">Licencia de Operaciones</a>
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
      reviews: [
        {
          name: "Laura Rodríguez",
          username: "@lauracrypto",
          time: "hace 12 min",
          stars: "★★★★★",
          text: "Desde que descubrí esta plataforma, comprar y vender criptomonedas es pan comido. La interfaz es súper intuitiva y el equipo de soporte siempre está ahí para resolver mis dudas. ¡Recomendadísima!",
        },
        {
          name: "Ana Martínez",
          username: "@anamartinezdigital",
          time: "hace 3 dias",
          stars: "★★★★☆",
          text: "Soy nueva en el mundo de las criptomonedas y esta plataforma me ha facilitado mucho el aprendizaje. Los tutoriales son claros y el proceso de compra y venta es muy sencillo. ¡Estoy muy contenta!",
        },
        {
          name: "Sofía López",
          username: "@sofialopezfinanzas",
          time: "hace 1 sem",
          stars: "★★★★★",
          text: "El servicio de atención al cliente es excepcional. Siempre responden rápido y resuelven cualquier problema. La plataforma es fácil de usar y las tarifas son justas. ¡La recomiendo al 100%!",
        },
        // Puedes agregar más reseñas aquí
      ],
    };
  },
};
</script>