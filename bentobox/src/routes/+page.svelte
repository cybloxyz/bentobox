<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { language, currency, manualRates } from '$lib/store';
  import Navbar from '$lib/components/navbar.svelte';
  import Bentobox from '$lib/components/bentobox.svelte'; 
  import './layout.css';
  
  let isLoading = true;

  // Konten teks (pindahan dari thebento.jsx)
  const content = {
    say: { id: `selesaikan kuis dapatkan resep!`, en: `solve quiz get recipe!` },
    say2: { 
      id: `siap untuk tes memasakmu?`, 
      en: `ready to take cooking test?` 
    },
    say3: { id: `klik tombol 'masak'!`, en: `click the 'cook' button!` },
    staff: { id: `TERATAS!`, en: `TOP!` },
  };

  onMount(() => {
    // 1. Logic Loading Screen (2 detik)
    setTimeout(() => {
      isLoading = false;
    }, 1000);

    // 2. Logic Auto Detect Lokasi (pindahan dari App.jsx)
    fetch(`https://ipapi.co/json/`)
      .then(r => r.json())
      .then(data => {
        if (data.country_code.toLowerCase() === "id") {
          $language = "id";
          $currency = "id";
        }
      })
      .catch(() => console.log("Gagal deteksi lokasi, pakai default EN/USD"));
  });
</script>

{#if isLoading}
  <div class="fixed inset-0 flex items-center justify-center bg-[#facfa2] z-999" transition:fade>
    <img src="/benben.gif" alt="Loading..." class="w-48 h-48 object-contain" />
  </div>
{:else}
  <div class="flat min-h-screen relative" style="background-color: #facfa2; background-image: url('/bgup3c.png');">

<Navbar/>

    <div class="bg-white/10 backdrop-blur-sm min-h-screen w-full">
      
      <section id="hero" class="pt-48 pb-20 flex justify-center items-center">
        <div 
          class="flex justify-center items-center mt-48 p-2 min-h-92 bg-[#ddbc93] w-[90%] max-w-237.5 border-[#380d07] border-12 md:border-24 rounded-3xl shadow-lg shadow-black/30"
          in:fly={{ y: 50, duration: 1000 }}
        >
          <div class="text-center px-4">
            <h1 class="text-4xl md:text-7xl mb-8 text-white drop-shadow-lg">
              {content.say[$language]}
            </h1>
            <p class="text-lg md:text-2xl mb-6 text-white font-medium">
              {content.say2[$language]}
            </p>
            <p class="text-sm md:text-lg mb-8 text-white font-medium">
              {content.say3[$language]}
            </p>
          </div>
        </div>
      </section>

 <!--     <section id="best" class="mt-24 pb-20">
        <div class="flex justify-center items-center mb-12">
          <h1 class="bg-[#713822] text-white rounded-full px-10 py-4 text-center text-3xl md:text-5xl pgm shadow-xl">
            {content.staff[$language]}
          </h1>
        </div>
        <Bentobox />
      </section>
-->

    </div>
  </div>
{/if}

<style>
  .flat {
    background-attachment: fixed;
    background-size: cover;
  }
  .pix { font-family: 'pix';}
</style>