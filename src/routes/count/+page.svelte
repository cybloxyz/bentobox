<script>
  import { onMount, onDestroy } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { language, cookedRecipes, globalStreak } from '$lib/store';
  import { menuData } from '$lib/data/menudata';
  import Navbar from '$lib/components/navbar.svelte';
  import '../layout.css';

  let isLoading = true;
  let isCooking = false;
  let showPopup = false;
  let timeLeft = 25 * 60; 
  let timerInterval;
  
  let finalStatus = "";
  let revealedMeal = null;

  const content = {
    title: { id: `SEDANG MEMASAK...`, en: `COOKING...` },
    subtitle: { id: `Fokuslah selama 25 menit untuk hasil terbaik!`, en: `Focus for 25 minutes for the best result!` },
    btnStart: { id: `MULAI MASAK!`, en: `START COOKING!` },
    btnCancel: { id: `BATALKAN`, en: `CANCEL` },
    revealTitle: { id: `MASAKAN MATANG!`, en: `DISH IS READY!` },
    btnMenu: { id: `KE MENU`, en: `GO TO MENU` },
    btnAgain: { id: `MASAK LAGI`, en: `COOK AGAIN` }
  };

  // Timer Formatting
  $: minutes = Math.floor(timeLeft / 60);
  $: seconds = timeLeft % 60;
  $: timeString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  function startTimer() {
    isCooking = true;
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
      } else {
        finishCooking();
      }
    }, 1000);
  }

  function finishCooking() {
    clearInterval(timerInterval);
    isCooking = false;
    
    // Logic penentuan menu (Mirip kuis kamu)
    // Di sini kita asumsikan default AVERAGE karena ini mode Pomodoro
    finalStatus = "SUCCESS"; 
    revealedMeal = menuData[Math.floor(Math.random() * menuData.length)];
    
    // Simpan ke koleksi resep
    cookedRecipes.update(current => {
      if (!current.includes(revealedMeal.id)) return [...current, revealedMeal.id];
      return current;
    });

    showPopup = true;
  }

  function stopTimer() {
    if(confirm("Yakin mau berhenti? Masakanmu bisa gosong!")) {
      clearInterval(timerInterval);
      isCooking = false;
      timeLeft = 25 * 60;
    }
  }

  function resetAll() {
    showPopup = false;
    timeLeft = 25 * 60;
  }

  onMount(() => {
    setTimeout(() => { isLoading = false; }, 1000);
  });

  onDestroy(() => clearInterval(timerInterval));
</script>

{#if isLoading}
  <div class="fixed inset-0 flex items-center justify-center bg-[#facfa2] z-[999]" transition:fade>
    <img src="/benben.gif" alt="Loading..." class="w-48 h-48 object-contain" />
  </div>
{:else}
  <div class="flat min-h-screen relative" style="background-color: #facfa2; background-image: url('/bgup3c.png');">
    <Navbar/>

    <div class="bg-white/10 backdrop-blur-sm min-h-screen w-full flex flex-col justify-center items-center pt-20">
      
      <!-- MAIN CARD -->
      <div 
        class="relative flex flex-col justify-center items-center p-8 md:p-12 bg-[#ddbc93] w-[90%] max-w-2xl border-[#380d07] border-[12px] md:border-[20px] rounded-[40px] shadow-2xl overflow-hidden"
        in:fly={{ y: 50, duration: 1000 }}
      >
        
        <!-- Decoration: Steam/Uap -->
        {#if isCooking}
          <div class="absolute top-10 flex gap-6">
            <div class="w-4 h-12 bg-white/40 rounded-full animate-pulse blur-sm"></div>
            <div class="w-4 h-16 bg-white/30 rounded-full animate-pulse blur-sm delay-75"></div>
            <div class="w-4 h-12 bg-white/40 rounded-full animate-pulse blur-sm delay-150"></div>
          </div>
        {/if}

        <!-- Ikon Panci -->
        <div class="mb-6 z-10">
          <img 
            src="/emp.png" 
            alt="pot" 
            class="w-40 h-40 md:w-56 md:h-56 object-contain {isCooking ? 'animate-bounce' : 'grayscale-[0.5]'}" 
          />
        </div>

        {#if !isCooking}
          <!-- TAMPILAN AWAL -->
          <h1 class="pgm text-4xl md:text-6xl mb-4 text-white text-center drop-shadow-[0_4px_0_#380d07]">
            POMODORO
          </h1>
          <p class="bby text-xl md:text-2xl mb-8 text-[#380d07] text-center max-w-md">
            {content.subtitle[$language]}
          </p>
          <button 
            on:click={startTimer}
            class="px-12 py-5 bg-[#713822] text-[#facfa2] pgm text-3xl rounded-3xl hover:scale-105 active:translate-y-2 transition-all shadow-[0_12px_0_#380d07] border-4 border-[#380d07]"
          >
            {content.btnStart[$language]}
          </button>
        {:else}
          <!-- TAMPILAN SAAT MASAK -->
          <div in:scale={{duration: 400}} class="text-center z-10">
            <div class="bg-[#380d07] px-6 py-6 rounded-[32px] border-4 border-[#713822] shadow-inner mb-6">
              <h2 class="pix text-6xl md:text-8xl text-white tracking-tighter">
                {timeString}
              </h2>
            </div>
            
            <p class="bby text-2xl text-white mb-6 animate-pulse tracking-widest">
              {content.title[$language]}
            </p>
            
            <button 
              on:click={stopTimer}
              class="px-6 py-2 bg-red-900/80 text-white pix text-sm rounded-xl border-2 border-red-400 hover:bg-red-700 transition-all"
            >
              {content.btnCancel[$language]}
            </button>
          </div>
        {/if}
      </div>
    </div>

    <!-- POPUP REVEAL (MUNCUL SETELAH TIMER HABIS) -->
    {#if showPopup && revealedMeal}
      <div class="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[1001] p-6" transition:fade>
        <div in:fly={{ y: 100 }} class="bg-white rounded-[40px] border-[10px] border-[#713822] p-8 max-w-sm w-full text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          <h2 class="pgm text-3xl mb-2 text-[#713822]">{content.revealTitle[$language]}</h2>
          <div class="w-full h-1 bg-[#713822] mb-6 opacity-20"></div>
          
          <div class="bg-[#fdf2e9] p-6 rounded-3xl mb-6 border-4 border-dashed border-[#713822] scale-110">
            <img src={revealedMeal.image} alt="result" class="w-32 h-32 mx-auto object-contain mb-4 drop-shadow-lg" />
            <p class="pgm text-3xl uppercase text-[#380d07] leading-none">{revealedMeal.name[$language]}</p>
          </div>
          
          <div class="grid gap-3 mt-8">
            <a href="/menu" class="w-full py-4 bg-[#713822] text-[#facfa2] pgm text-2xl rounded-2xl hover:bg-[#380d07] transition-all text-center">
              {content.btnMenu[$language]}
            </a>
            <button on:click={resetAll} class="w-full py-4 border-4 border-[#713822] text-[#713822] pgm text-xl rounded-2xl hover:bg-[#fdf2e9] transition-all">
              {content.btnAgain[$language]}
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .flat {
    background-attachment: fixed;
    background-size: cover;
  }
  .pgm { font-family: 'pgm', sans-serif; }
  .pix { font-family: 'pix', monospace; }
  .bby { font-family: 'bby', cursive; }
  
  /* Animasi uap tambahan */
  .delay-75 { animation-delay: 75ms; }
  .delay-150 { animation-delay: 150ms; }
</style>