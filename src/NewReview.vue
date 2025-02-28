<template>
    <div id="flusso-review" class="hero bg-cover bg-[url('/FONDO.png')]">
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
          name: "Adam Woods",
          username: "@adamwoods",
          time: "12 min ago",
          stars: "★★★★★",
          text: "A true crowd-pleaser! The cookie dough ice cream is a delightful combination of creamy vanilla.",
        },
        {
          name: "Jane Doe",
          username: "@janedoe",
          time: "30 min ago",
          stars: "★★★★☆",
          text: "This product is amazing! I love how easy it is to use and the results are fantastic.",
        },
        {
          name: "John Smith",
          username: "@johnsmith",
          time: "1 hour ago",
          stars: "★★★★★",
          text: "I highly recommend this! It exceeded my expectations and I'm very happy with my purchase.",
        },
        // Puedes agregar más reseñas aquí
      ],
    };
  },
};
</script>