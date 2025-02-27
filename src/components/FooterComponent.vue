<template>
    <div class="bg-neutral">
        <footer class="footer p-10 bg-neutral text-neutral-content justify-between max-w-5xl mx-auto">
            <div>
                <div class="flex">
                    <img
                        class="logo"
                        src="/logo-flusso.svg"/>
                    <p class="my-auto text-2xl ml-3 font-bold hidden md:block">
                        Flusso
                    </p>
                </div>
                <p>
                    WARSAW, POLAND<br>
                    Street HOZA, No. 68 Apt./Room 210 <br>
                    municipality WARSAW, tposcode 06-82, post office
                </p>
                <p>
                    <a
                        class="text-white"
                        href="/Terms-and-Conditions.pdf"
                       target="_blank"
                       >
                        - Terms and Conditions of Use
                    </a>
                </p>
                <p>
                    <a
                        class="text-white"
                        href="/VASP_license_24_05_Zasw_RDWW_FLUSSO_DYNAMICS_GROUP 4.pdf"
                        target="_blank"
                    >
                        - Operating License
                    </a>
                </p>
            </div>
            <div>
                <span class="footer-title">Social</span>
                <div class="grid grid-flow-col gap-4">
                    <a>
                        <svg
                                class="fill-current"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" viewBox="0 0 300 300" xml:space="preserve">
                            <g id="XMLID_504_">
                                <path id="XMLID_505_" d="M38.52,0.012h222.978C282.682,0.012,300,17.336,300,38.52v222.978c0,21.178-17.318,38.49-38.502,38.49   H38.52c-21.184,0-38.52-17.313-38.52-38.49V38.52C0,17.336,17.336,0.012,38.52,0.012z M218.546,33.329   c-7.438,0-13.505,6.091-13.505,13.525v32.314c0,7.437,6.067,13.514,13.505,13.514h33.903c7.426,0,13.506-6.077,13.506-13.514   V46.854c0-7.434-6.08-13.525-13.506-13.525H218.546z M266.084,126.868h-26.396c2.503,8.175,3.86,16.796,3.86,25.759   c0,49.882-41.766,90.34-93.266,90.34c-51.487,0-93.254-40.458-93.254-90.34c0-8.963,1.37-17.584,3.861-25.759H33.35v126.732   c0,6.563,5.359,11.902,11.916,11.902h208.907c6.563,0,11.911-5.339,11.911-11.902V126.868z M150.283,90.978   c-33.26,0-60.24,26.128-60.24,58.388c0,32.227,26.98,58.375,60.24,58.375c33.278,0,60.259-26.148,60.259-58.375   C210.542,117.105,183.561,90.978,150.283,90.978z"/>
                            </g>
                        </svg>
                    </a>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             class="fill-current">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             class="fill-current">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             class="fill-current">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'FooterComponent'
}
</script>