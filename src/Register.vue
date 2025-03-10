<template>
    <div
            id="contact"
            class="hero py-[10rem] bg-cover bg-[url('/FONDO.png')]" >
        <div class="hero-content flex-col lg:flex-row max-w-5xl">
            <div class="text-center lg:text-left lg:mr-10">
                <h2 class="text-5xl font-bold text-white" style="font-style: italic;">Contáctanos ahora</h2>
                <p class="py-6 text-base-100">
                    Haz realidad tu inversión en criptomonedas con Flusso. Contáctanos y descubre cómo nuestro servicio fácil y seguro de compra de criptomonedas puede ayudarte a comenzar tu viaje en el mundo cripto y aprovechar al máximo tus oportunidades financieras.                </p>
                <div class="form-control mt-6">
                    <button
                            @click="$root.openWhatsapp"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                        Abrir Whatsapp
                    </button>
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="text-center text-b">
                        O déjanos tus datos y te contactaremos lo antes posible
                    </div>
                    <form
                            v-if="!sent"
                            @submit.prevent="submit">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Nombre</span>
                            </label>
                            <input
                                    v-model="contact.name"
                                    required
                                    name="name"
                                    type="text" placeholder="Nombre" class="input input-bordered"/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                    v-model="contact.email"

                                    required
                                    name="email"
                                    type="text" placeholder="email" class="input input-bordered"/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Nro de tlf</span>
                            </label>
                            <input
                                    v-model="contact.phone"
                                    required
                                    name="phone"
                                    type="text" placeholder="teléfono" class="input input-bordered"/>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Comentarios</span>
                            </label>
                            <textarea
                                    v-model="contact.text"
                                    name="comments"
                                    class="textarea h-24 textarea-bordered"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button
                                    :disabled="sending"
                                    :loading="sending"
                                    type="submit"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
                                Contactarnos
                            </button>
                        </div>
                    </form>
                    <div
                            v-else
                            class="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>
                                'Tus datos han sido enviados con éxito.Nos pondremos en contacto contigo ¡Revisa tú correo electrónico!')
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Register',
    data() {
        return {
            sending: false,
            sent: false,
            contact: {
                name: '',
                email: '',
                phone: '',
                text: '',
            }
        }
    },
    methods: {
        submit() {
            this.sending = true;
            axios.post('https://eh.captadata.com/api/external-form')
                .then(({data}) => {
                    if (data.success) {
                        this.sent = true;
                    }
                })
                .catch(() => {

                })
                .finally(() => {
                    this.sending = false;
                })
        }
    }
}
</script>